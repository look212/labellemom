import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const nav = [
    {href: '/', label: '홈'},
    {href: '/programs', label: '프로그램'},
    {href: '/community', label: '커뮤니티'},
    {href: '/info', label: '이용안내'},
    {href: '/therapist', label: '테라피스트'},
    {href: '/event', label: '이벤트'},
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-md px-4 py-3 dark:bg-gray-800 dark:text-white">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800 dark:text-white"><Link href="/">라벨르맘</Link></div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 text-gray-700 text-sm font-medium">
            {nav.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="hover:text-zinc-500 dark:hover:text-zinc-400 dark:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-gray-700 text-sm font-medium dark:text-white">
            {nav.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} onClick={toggleMenu} className="hover:text-zinc-500 dark:hover:text-zinc-400 dark:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </nav>
  );
}
