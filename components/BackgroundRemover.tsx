'use client';

import { useRef, useState } from 'react';
import { Download, ImagePlus, Loader2, RefreshCw, Scissors } from 'lucide-react';

export default function BackgroundRemover() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [result, setResult] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const choose = (next: File | undefined) => {
    if (!next || !next.type.startsWith('image/')) return;
    if (preview) URL.revokeObjectURL(preview);
    if (result) URL.revokeObjectURL(result);
    setFile(next); setPreview(URL.createObjectURL(next)); setResult(''); setError(''); setStatus('Ready to remove the background.');
  };

  const remove = async () => {
    if (!file || busy) return;
    setBusy(true); setError(''); setStatus('Loading the background-removal AI…');
    try {
      const mod = await import(/* webpackIgnore: true */ 'https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.7.0/+esm');
      setStatus('Removing background on your device…');
      const blob = await mod.removeBackground(file, { output: { format: 'image/png' }, progress: (key: string, current: number, total: number) => { if (total) setStatus(`Processing… ${Math.round((current / total) * 100)}%`); } });
      const url = URL.createObjectURL(blob);
      if (result) URL.revokeObjectURL(result);
      setResult(url); setStatus('Background removed. Your transparent PNG is ready.');
    } catch (e) {
      console.error(e); setError('Background removal could not start. Please try a smaller image or refresh the page.'); setStatus('');
    } finally { setBusy(false); }
  };

  const download = () => { if (!result || !file) return; const a=document.createElement('a'); a.href=result; a.download=`${file.name.replace(/\.[^.]+$/,'')}-no-background.png`; a.click(); };

  return <div className="bg-tool">
    <div className="bg-tool-top"><div><span className="feature-kicker"><Scissors size={14}/> AI background removal</span><h2>Remove background from an image</h2><p>Get a transparent PNG directly in your browser. The first run may take longer while the AI model loads.</p></div><div className="privacy-pill">Private · Browser based</div></div>
    {!file ? <label className="bg-drop"><input type="file" accept="image/*" onChange={e=>choose(e.target.files?.[0])}/><ImagePlus size={30}/><strong>Upload an image</strong><span>JPG · PNG · WebP</span></label> : <>
      <div className="bg-preview-grid"><div><small>Original</small><div className="preview-box"><img src={preview} alt="Original"/></div></div><div><small>Transparent result</small><div className="preview-box checker"><img src={result || preview} alt="Background removed preview"/></div></div></div>
      {status && <div className="bg-status">{busy && <Loader2 className="spin" size={16}/>} {status}</div>}
      {error && <div className="bg-error">{error}</div>}
      <input ref={fileInputRef} hidden type="file" accept="image/*" onChange={e=>choose(e.target.files?.[0])}/>
      <div className="bg-actions"><button className="secondary" onClick={()=>fileInputRef.current?.click()}> <RefreshCw size={15}/> Change image </button><button className="primary" disabled={busy} onClick={remove}>{busy ? 'Removing…' : 'Remove Background'}</button>{result && <button className="zip" onClick={download}><Download size={16}/> Download PNG</button>}</div>
      <p className="bg-note">Tip: clear, well-lit subjects usually produce the cleanest cutouts.</p>
    </>}
  </div>;
}
