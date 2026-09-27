"use client";

import { useRef, useState } from "react";

export default function ImageOptimizer() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [quality, setQuality] = useState(0.8);
  const [result, setResult] = useState<Blob | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleFile = (selected: File) => {
    if (!selected.type.startsWith("image/")) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult(null);
  };

  const compressImage = async () => {
    if (!file) return;

    setProcessing(true);

    try {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          setProcessing(false);
          return;
        }

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            setResult(blob);
            setProcessing(false);
          },
          "image/jpeg",
          quality
        );
      };

      img.src = URL.createObjectURL(file);
    } catch {
      setProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!result) return;

    const url = URL.createObjectURL(result);
    const a = document.createElement("a");

    a.href = url;
    a.download = `tinyplex-${file?.name || "image"}.jpg`;

    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div
        className="border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer hover:bg-gray-50 transition"
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          hidden
          onChange={(e) => {
            const selected = e.target.files?.[0];
            if (selected) handleFile(selected);
          }}
        />

        {!file ? (
          <>
            <div className="text-4xl mb-3">🖼️</div>
            <h3 className="text-xl font-semibold">
              Upload an image
            </h3>
            <p className="text-gray-500 mt-2">
              JPG, PNG or WebP
            </p>
          </>
        ) : (
          <>
            <img
              src={preview}
              alt="Preview"
              className="max-h-72 mx-auto rounded-xl object-contain"
            />

            <p className="mt-4 font-medium">{file.name}</p>
          </>
        )}
      </div>

      {file && (
        <div className="mt-6 space-y-5">
          <div>
            <label className="block font-medium mb-2">
              Compression Quality: {Math.round(quality * 100)}%
            </label>

            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <button
            onClick={compressImage}
            disabled={processing}
            className="w-full rounded-xl px-6 py-3 font-semibold bg-black text-white hover:opacity-90 disabled:opacity-50"
          >
            {processing ? "Compressing..." : "Compress Image"}
          </button>
        </div>
      )}

      {result && (
        <div className="mt-6 p-5 rounded-2xl border bg-gray-50">
          <p className="font-semibold mb-3">
            Compression complete
          </p>

          <p className="text-sm text-gray-600 mb-4">
            Original: {(file!.size / 1024).toFixed(1)} KB
            <br />
            Compressed: {(result.size / 1024).toFixed(1)} KB
          </p>

          <button
            onClick={downloadImage}
            className="w-full rounded-xl px-6 py-3 font-semibold bg-blue-600 text-white hover:opacity-90"
          >
            Download Compressed Image
          </button>
        </div>
      )}
    </div>
  );
}
