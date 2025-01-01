'use client';
import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { href: '/trending', label: 'Trending' },
  { href: '/tech', label: 'Tech' },
  { href: '/freelancing', label: 'Freelancing' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/about', label: 'About Us' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
    <header className="fixed w-full bg-gradient-to-b from-cyan-500 to-slate-900 shadow z-50 opacity-90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-16">
          <Link href="/" className="text-4xl font-bold italic text-white">
            TechWare
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white text-lg hover:text-cyan-100 hover:text-xl">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`bg-white block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
            <span className={`bg-white block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`bg-white block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-white hover:bg-cyan-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
    <div className="pt-24"></div>
    </div>
  );
}

