'use client';

import { useCallback, useMemo, useState } from 'react';
import JSZip from 'jszip';
import { Download, Image as ImageIcon, Maximize2, ShieldCheck, Sparkles, Upload, X } from 'lucide-react';

type Item = { id: string; file: File; preview: string; width: number; height: number; result?: Blob; resultUrl?: string; resultSize?: number };

const fmt = (bytes: number) => bytes < 1024 ? `${bytes} B` : bytes < 1048576 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1048576).toFixed(2)} MB`;

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [quality, setQuality] = useState(80);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [format, setFormat] = useState<'image/jpeg'|'image/webp'|'image/png'>('image/webp');
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState<'compress'|'resize'|'both'>('both');
  const [keepRatio, setKeepRatio] = useState(true);

  const addFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    Array.from(files).filter(f => f.type.startsWith('image/')).forEach(file => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => setItems(prev => [...prev, { id: crypto.randomUUID(), file, preview: url, width: img.naturalWidth, height: img.naturalHeight }]);
      img.src = url;
    });
  }, []);

  const processOne = async (item: Item) => {
    const img = new Image();
    img.src = item.preview;
    await img.decode();
    let w = img.naturalWidth, h = img.naturalHeight;
    if (mode !== 'compress') {
      const tw = Number(width) || w, th = Number(height) || h;
      if (keepRatio) {
        if (width && !height) h = Math.max(1, Math.round(w ? tw * img.naturalHeight / img.naturalWidth : th));
        else if (height && !width) w = Math.max(1, Math.round(th * img.naturalWidth / img.naturalHeight));
        else if (width && height) { const r = Math.min(tw / img.naturalWidth, th / img.naturalHeight); w = Math.round(img.naturalWidth * r); h = Math.round(img.naturalHeight * r); }
      } else { w = tw; h = th; }
    }
    const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d'); if (!ctx) throw new Error('Canvas unavailable');
    ctx.drawImage(img, 0, 0, w, h);
    const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(b => b ? resolve(b) : reject(new Error('Could not encode image')), format, quality / 100));
    return { ...item, result: blob, resultUrl: URL.createObjectURL(blob), resultSize: blob.size, width: w, height: h };
  };

  const processAll = async () => {
    if (!items.length) return;
    setBusy(true);
    try { const out = []; for (const item of items) out.push(await processOne(item)); setItems(out); }
    finally { setBusy(false); }
  };

  const download = (item: Item) => { if (!item.resultUrl) return; const a = document.createElement('a'); a.href = item.resultUrl; a.download = `${item.file.name.replace(/\.[^.]+$/, '')}-tinypixel.${format.split('/')[1].replace('jpeg','jpg')}`; a.click(); };
  const downloadZip = async () => { const zip = new JSZip(); items.filter(i => i.result).forEach(i => zip.file(`${i.file.name.replace(/\.[^.]+$/, '')}-tinypixel.${format.split('/')[1].replace('jpeg','jpg')}`, i.result!)); const blob = await zip.generateAsync({type:'blob'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='tinypixel-images.zip'; a.click(); };

  const totalOriginal = useMemo(() => items.reduce((s,i)=>s+i.file.size,0),[items]);
  const totalResult = useMemo(() => items.reduce((s,i)=>s+(i.resultSize||0),0),[items]);
  const saved = totalOriginal && totalResult ? Math.max(0, Math.round((1-totalResult/totalOriginal)*100)) : 0;

  return <main>
    <header className="nav"><div className="brand"><span className="logo brand-logo" aria-hidden="true" /><span>TinyPixel</span></div><div className="navlinks"><a href="#tool">Tool</a><a href="#how">How it works</a><a href="/privacy">Privacy</a></div></header>
    <section className="hero"><div className="badge"><Sparkles size={15}/> Free browser-based image tools</div><h1>Compress. Resize.<br/><span>Keep every pixel that matters.</span></h1><p>Optimize JPG, PNG and WebP images in seconds. Your files stay on your device.</p></section>
    <section id="tool" className="toolcard">
      <div className="tabs"><button className={mode==='both'?'active':''} onClick={()=>setMode('both')}>Compress + Resize</button><button className={mode==='compress'?'active':''} onClick={()=>setMode('compress')}>Compress</button><button className={mode==='resize'?'active':''} onClick={()=>setMode('resize')}>Resize</button></div>
      {items.length===0 ? <label className="drop" onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault(); addFiles(e.dataTransfer.files)}}><input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={e=>addFiles(e.target.files)}/><div className="uploadIcon"><Upload/></div><h2>Drop images here</h2><p>or <b>browse files</b></p><small>JPG · PNG · WEBP · Multiple files supported</small></label> : <>
        <div className="controls"><div><label>Quality <strong>{quality}%</strong></label><input type="range" min="10" max="100" value={quality} onChange={e=>setQuality(Number(e.target.value))}/></div><div><label>Output format</label><select value={format} onChange={e=>setFormat(e.target.value as any)}><option value="image/webp">WebP</option><option value="image/jpeg">JPG</option><option value="image/png">PNG</option></select></div>{mode!=='compress'&&<><div><label>Width (px)</label><input value={width} onChange={e=>setWidth(e.target.value.replace(/\D/g,''))} placeholder="Auto"/></div><div><label>Height (px)</label><input value={height} onChange={e=>setHeight(e.target.value.replace(/\D/g,''))} placeholder="Auto"/></div><label className="check"><input type="checkbox" checked={keepRatio} onChange={e=>setKeepRatio(e.target.checked)}/> Keep ratio</label></>}</div>
        <div className="filelist">{items.map(item=><div className="file" key={item.id}><img src={item.preview}/><div className="filemeta"><b>{item.file.name}</b><span>{item.width} × {item.height} · {fmt(item.file.size)} {item.resultSize ? `→ ${fmt(item.resultSize)}` : ''}</span></div>{item.resultUrl&&<button className="download" onClick={()=>download(item)}><Download size={16}/> Download</button>}<button className="remove" onClick={()=>setItems(items.filter(x=>x.id!==item.id))}><X size={17}/></button></div>)}</div>
        <div className="actions"><button className="secondary" onClick={()=>document.getElementById('fileinput')?.click()}>+ Add images</button><input id="fileinput" hidden type="file" accept="image/*" multiple onChange={e=>addFiles(e.target.files)}/><button className="primary" disabled={busy} onClick={processAll}>{busy?'Processing…':'Optimize images'}</button>{items.some(i=>i.result)&&<button className="zip" onClick={downloadZip}>Download ZIP</button>}</div>
        {items.some(i=>i.result)&&<div className="summary"><div><small>Total saved</small><strong>{saved}%</strong></div><div><small>Original</small><strong>{fmt(totalOriginal)}</strong></div><div><small>Optimized</small><strong>{fmt(totalResult)}</strong></div></div>}
      </>}
    </section>
    <section id="how" className="features"><article><ShieldCheck/><h3>Private by design</h3><p>Images are processed locally in your browser. Nothing needs to be uploaded to a server.</p></article><article><Maximize2/><h3>Resize precisely</h3><p>Set width, height and aspect-ratio behavior exactly how you want it.</p></article><article><ImageIcon/><h3>JPG, PNG & WebP</h3><p>Choose a practical output format and balance quality against file size.</p></article></section>
    <section id="privacy" className="privacy"><h2>Built for simple image optimization</h2><p>TinyPixel is designed to make everyday image compression and resizing fast without requiring an account or file upload.</p></section>
    <footer>© {new Date().getFullYear()} TinyPixel · Free image tools · <a href="/privacy">Privacy Policy</a> · <span>Your files stay on your device</span></footer>
  </main>;
}
