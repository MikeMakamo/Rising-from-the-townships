'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/entrepreneurs', label: 'Entrepreneurs' },
  { href: '/shop', label: 'Shop' },
  {
    label: 'Solutions',
    children: [
      { href: '/organisations', label: 'For Organisations' },
      { href: '/partner', label: 'Why Partner With Us' },
      { href: '/speakers', label: 'Speaking' },
    ],
  },
  {
    label: 'Learn',
    children: [
      { href: '/learn', label: 'Articles & Podcasts' },
      { href: '/courses', label: 'Courses' },
    ],
  },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/images/rftt-logo.png"
              alt="Rising from the Township"
              width={120}
              height={70}
              className="h-9 lg:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-3 py-2 text-sm font-bold uppercase tracking-wider text-brand-gray hover:text-brand-red transition-colors flex items-center gap-1">
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-brand-gray hover:text-brand-red hover:bg-brand-red-pale transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                    link.label === 'Shop' ? 'text-brand-red hover:text-brand-red-dark' : 'text-brand-gray hover:text-brand-red'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/partner"
              className="px-6 py-2.5 text-sm font-bold bg-brand-red text-white rounded-full hover:bg-brand-red-dark transition-colors"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-brand-dark p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu – full screen overlay */}
      {mobileOpen && (
        <div className="lg:hidden bg-white z-40 overflow-y-auto" style={{ position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0 }}>
          <div className="px-6 py-6 space-y-1 min-h-full flex flex-col">
            <div className="flex-1 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="pt-3">
                    <p className="px-3 py-2 text-xs font-bold text-brand-red uppercase tracking-wider">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-6 py-2.5 text-sm text-brand-gray-mid hover:text-brand-red transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-bold text-brand-dark hover:text-brand-red uppercase tracking-wider transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <div className="pt-6 pb-8 border-t border-gray-100 mt-4">
              <Link
                href="/partner"
                className="block w-full text-center px-5 py-3.5 font-bold bg-brand-red text-white rounded-full text-sm uppercase tracking-wider"
                onClick={() => setMobileOpen(false)}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
