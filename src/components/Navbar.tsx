import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 bg-white shadow-md px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">라벨르맘</div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 text-gray-700 text-sm font-medium">
          <li><Link href="/">홈</Link></li>
          <li><Link href="/programs">프로그램</Link></li>
          <li><Link href="/info">이용 안내</Link></li>
          <li><Link href="/therapist">테라피스트</Link></li>
          <li><Link href="/event">이벤트</Link></li>
          <li>
            <a href="https://blog.naver.com/labellelani" target="_blank" rel="noopener noreferrer">블로그</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-gray-700 text-sm font-medium">
          <li><Link href="/" onClick={toggleMenu}>홈</Link></li>
          <li><Link href="/programs" onClick={toggleMenu}>관리 프로그램</Link></li>
          <li><Link href="/info" onClick={toggleMenu}>이용 안내</Link></li>
          <li><Link href="/therapist" onClick={toggleMenu}>테라피스트</Link></li>
          <li><Link href="/event" onClick={toggleMenu}>이벤트</Link></li>
          <li>
            <a href="https://blog.naver.com/labellelani" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>블로그</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
