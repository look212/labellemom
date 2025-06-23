// components/ImageModal.tsx
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function ImageModal({ src, alt = "", width = 300, height = 200 }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-zoom-in">
        <Image src={src} alt={alt} width={width} height={height} />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setIsOpen(false)}
        >
          <button
              className="absolute top-2 right-2 text-white z-50"
              onClick={() => setIsOpen(false)}
          >
              <X size={24} />
          </button>
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1000}
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
