'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/entrepreneurs', label: 'Entrepreneurs' },
  { href: '/shop', label: 'Shop' },
  {
    label: 'Solutions',
    children: [
      { href: '/organisations', label: 'Services & Solutions' },
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
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const scrollFrameRef = useRef(null);
  const lastScrollStateRef = useRef(false);

  useEffect(() => {
    const updateScrolledState = () => {
      const nextScrolled = window.scrollY > 50;

      if (lastScrollStateRef.current !== nextScrolled) {
        lastScrollStateRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      scrollFrameRef.current = null;
    };

    updateScrolledState();

    const onScroll = () => {
      if (scrollFrameRef.current !== null) {
        return;
      }

      scrollFrameRef.current = window.requestAnimationFrame(updateScrolledState);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);

      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
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

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase tracking-wider text-brand-gray transition-colors hover:text-brand-red"
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-0 w-56 rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-brand-gray transition-colors hover:bg-brand-red-pale hover:text-brand-red"
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
                  className="px-3 py-2 text-sm font-bold uppercase tracking-wider text-brand-gray transition-colors hover:text-brand-red"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/partner"
              className="rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-dark"
            >
              Partner With Us
            </Link>
          </div>

          <button
            type="button"
            className="relative z-[60] lg:hidden p-2 text-brand-dark [touch-action:manipulation]"
            onClick={() => setMobileOpen((currentOpen) => !currentOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
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

      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`fixed left-0 right-0 bottom-0 z-40 overflow-y-auto bg-white transition-[opacity,transform,visibility] duration-200 ease-out lg:hidden ${
          mobileOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 pointer-events-none opacity-0'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex min-h-full flex-col space-y-1 px-6 py-6">
          <div className="flex-1 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="pt-3">
                  <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand-red">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      prefetch={false}
                      className="block px-6 py-2.5 text-sm text-brand-gray-mid transition-colors hover:text-brand-red"
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
                  prefetch={false}
                  className="block px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-brand-dark transition-colors hover:text-brand-red"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
          <div className="mt-4 border-t border-gray-100 pt-6 pb-8">
            <Link
              href="/partner"
              prefetch={false}
              className="block w-full rounded-full bg-brand-red px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white"
              onClick={() => setMobileOpen(false)}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
