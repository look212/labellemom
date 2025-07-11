'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, MessageSquareMore } from 'lucide-react';

export default function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 space-y-3 z-30">
      <a
        href="https://talk.naver.com/ct/w4nej8"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-green-500 text-white rounded-full shadow-lg p-3 hover:bg-green-600 transition"
      >
        <MessageSquareMore className="w-5 h-5 inline-block" />
      </a>
      <a
        href="https://open.kakao.com/o/sVVD2l0b"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-yellow-500 text-white rounded-full shadow-lg p-3 hover:bg-yellow-600 transition"
      >
        <MessageSquareMore className="w-5 h-5 inline-block" />
      </a>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="bg-gray-700 text-white rounded-full shadow-lg p-3 hover:bg-gray-800 transition"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
