"use client";

import { useState, useRef } from "react";
import { UploadCloud, ImageIcon, MousePointerClick } from "lucide-react";
import clsx from "clsx";

interface UploadBoxProps {
  onUpload: (file: File) => void;
  id?: string;
}

export default function UploadBox({ onUpload, id }: UploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        onUpload(file);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div 
      className={clsx(
        "upload-zone glass-card w-full p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group",
        isDragging ? "border-accent-blue bg-accent-blue/5 shadow-[0_0_40px_rgba(129,140,248,0.2)]" : ""
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input 
        type="file" 
        className="hidden" 
        id={id}
        ref={inputRef}
        onChange={handleChange}
        accept="image/*"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/0 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 relative">
        <UploadCloud className="w-10 h-10 text-gray-400 group-hover:text-accent-blue transition-colors" />
        <div className="absolute -bottom-2 -right-2 bg-accent-purple p-1.5 rounded-lg">
          <ImageIcon className="w-4 h-4 text-white" />
        </div>
      </div>

      <h3 className="text-2xl font-heading font-bold text-white mb-2">
        Upload your UI screenshot
      </h3>
      <p className="text-gray-400 text-sm max-w-sm mx-auto mb-6">
        Drag and drop your image here, or click to browse. We support PNG, JPG, and WEBP formats.
      </p>

      <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-white/5 px-4 py-2 rounded-full">
        <MousePointerClick className="w-4 h-4" /> Click anywhere to browse files
      </div>
    </div>
  );
}
