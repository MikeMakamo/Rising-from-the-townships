'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function HomePage() {
  const mainRef = useReveal();

  return (
    <div ref={mainRef}>
      {/* ===== VIDEO HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/Dr Zwane 2.jpg"
        >
          <source src="/videos/book-panel.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-brand-dark/90 z-[1]" />

        {/* Content */}
        <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-3xl">
            <div className="animate-[fade-in_1s_ease-out]">
              <Image
                src="/images/rftt-logo.png"
                alt="Rising from the Township"
                width={320}
                height={200}
                className="mb-8 brightness-0 invert drop-shadow-lg w-[200px] sm:w-[280px] lg:w-[320px] h-auto"
                priority
              />
            </div>

            <h1 className="animate-[fade-up_0.8s_ease-out_0.3s_both] font-body text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6">
              Where Lived Experience<br />
              Becomes Structured<br />
              Knowledge.
            </h1>

            <p className="animate-[fade-up_0.8s_ease-out_0.6s_both] text-base sm:text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
              We transform African entrepreneurial journeys into strategy,
              systems, and scalable learning frameworks for institutions,
              corporates, and government.
            </p>

            <div className="animate-[fade-up_0.8s_ease-out_0.9s_both] flex flex-wrap gap-4">
              <Link
                href="/partner"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-all text-sm uppercase tracking-wider shadow-lg"
              >
                Partner With Us
              </Link>
              <Link
                href="/about"
                className="px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white hover:text-brand-dark transition-all text-sm uppercase tracking-wider"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== WATCH PODCAST CTA ===== */}
      <section className="py-6 bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="text-white font-bold text-lg">Watch Podcast</span>
        </div>
      </section>

      {/* ===== ABOUT SNAPSHOT WITH DR ZWANE ===== */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="reveal relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-red/20 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Dr Zwane.jpg"
                  alt="Dr Steven Zwane - Founder of RFTT"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[500px] lg:h-[600px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-dark/90 to-transparent p-8">
                  <p className="text-brand-red-light font-bold text-xs uppercase tracking-wider">Founder</p>
                  <h3 className="text-white font-heading text-2xl font-bold">Dr Steven Zwane</h3>
                  <p className="text-white/70 text-sm mt-1">Senior Lecturer, GIBS | Founder, YLED</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal">
              <h2 className="font-body text-2xl sm:text-3xl font-bold leading-tight mb-6 text-brand-dark">
                Where Lived Experience Becomes<br />
                <span className="text-brand-red">Structured Knowledge</span>
              </h2>
              <p className="text-brand-gray-mid leading-relaxed mb-6">
                RFTT is a knowledge creation and entrepreneurship education platform that codifies
                township enterprise journeys into structured, research-informed systems.
              </p>
              <p className="text-brand-dark font-bold mb-4">We convert lived experience into:</p>
              <div className="space-y-3 mb-8">
                {[
                  'Academic case studies',
                  'High school entrepreneurship models',
                  'University curriculum material',
                  'Corporate shared value frameworks',
                  'Policy-relevant research',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 bg-brand-red rounded-full" />
                    <span className="text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-all text-sm"
              >
                Learn More About RFTT
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOOK SHOWCASE BANNER ===== */}
      <section className="py-20 lg:py-28 bg-brand-red overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Open book spread mockup */}
            <div className="relative flex justify-center">
              <div className="absolute -inset-8 bg-black/10 rounded-3xl blur-3xl" />
              <Image
                src="/images/books/RFTT_Book_Mockup_2_V7.jpg"
                alt="Rising from the Township - Open book spread"
                width={600}
                height={450}
                className="relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: Text content – all white on red */}
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Rising from the Township
              </h2>
              <p className="text-white/90 text-lg sm:text-xl font-medium mb-4">
                Inspiring Stories of South African Entrepreneurs
              </p>
              <p className="text-white/70 text-base mb-8">
                By Dr Steven Zwane &amp; Yamkela Khoza Tywakadi
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-brand-red transition-all text-sm uppercase tracking-wider"
              >
                Get Your Copy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY / VIDEO BANNER ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/reading-panel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-dark/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              We do not only inspire.
            </h2>
            <div className="space-y-2">
              {['We codify.', 'We structure.', 'We institutionalise.'].map((line, i) => (
                <p key={line} className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: `rgba(255,255,255,${0.7 - i * 0.15})` }}>
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-14 inline-flex items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 sm:px-10 py-4">
              {['Inspiration', 'Instruction', 'Institutionalisation', 'Impact'].map((step, i) => (
                <span key={step} className="flex items-center gap-2 sm:gap-4">
                  <span className="text-white font-bold text-xs sm:text-sm">{step}</span>
                  {i < 3 && <span className="text-brand-red font-bold">&rarr;</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED ENTREPRENEURS ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <h2 className="font-body text-3xl sm:text-4xl font-bold text-brand-dark">
              Entrepreneurs
            </h2>
            <p className="text-brand-gray-mid mt-3 max-w-lg mx-auto">
              Each entrepreneur represents case material, teaching content, ecosystem insight, and lived strategy.
            </p>
          </div>

          {/* Main featured entrepreneur */}
          <div className="reveal grid lg:grid-cols-2 gap-10 mb-14 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <Image
                src="/images/entrepreneurs/Rita Zwane.jpg"
                alt="Rita Zwane"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-brand-gray-mid text-sm mb-1">Imbizo Shisanyama</p>
              <h3 className="font-body text-2xl font-bold text-brand-dark mb-4">Rita Zwane</h3>
              <p className="text-brand-gray-mid leading-relaxed mb-6">
                Rita Zwane pioneered the formalisation of the shisanyama industry in South Africa,
                transforming an informal township food concept into a scalable hospitality brand. Her story
                highlights resilience, operational discipline, and community-rooted enterprise growth.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/entrepreneurs" className="px-5 py-2.5 bg-brand-red text-white text-sm font-bold rounded-full hover:bg-brand-red-dark transition-colors">
                  Purchase Case Study
                </Link>
                <Link href="/entrepreneurs" className="px-5 py-2.5 border-2 border-brand-dark text-brand-dark text-sm font-bold rounded-full hover:bg-brand-dark hover:text-white transition-colors">
                  View Summary
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of entrepreneurs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { name: 'Rita Zwane', company: 'Imbizo Shisanyama', img: '/images/entrepreneurs/Rita Zwane.jpg' },
              { name: 'Sheldon Tatchell', company: 'Legends Barbershop', img: '/images/entrepreneurs/Sheldon Tatchell.jpg' },
              { name: 'Nozipho Tshabalala', company: 'Conversation Strategist', img: '/images/entrepreneurs/Nozipho Mbanjwa-Tshabalala.jpg' },
              { name: 'Themba Makamo', company: 'VAYA Footwear', img: '/images/entrepreneurs/Themba Makamo.jpg' },
              { name: 'Nomso Kana', company: 'Simsciex Technologies', img: '/images/entrepreneurs/Nomso Kana.jpg' },
              { name: 'Dr Steven Zwane', company: 'RFTT / YLED', img: '/images/entrepreneurs/Dr Steven Zwane.jpg' },
              { name: 'Candice Thurston', company: 'Candi & Co', img: '/images/entrepreneurs/Candice Thurston 2.jpg' },
              { name: 'Ntuthuko Shezi', company: 'Livestock Wealth', img: '/images/entrepreneurs/Ntuthuko-Shezi.jpg' },
              { name: 'Veronica Motloutsi', company: 'SmartDigital', img: '/images/entrepreneurs/Veronica Motloutsi.jpg' },
              { name: 'Tebogo Phiri', company: 'Disoufeng', img: '/images/entrepreneurs/Tebogo Phiri.jpg' },
            ].map((e) => (
              <Link
                key={e.name}
                href="/entrepreneurs"
                className="reveal group relative rounded-xl overflow-hidden aspect-square bg-gray-100"
              >
                <Image
                  src={e.img}
                  alt={e.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold text-xs">{e.name}</p>
                  <p className="text-white/70 text-[10px]">{e.company}</p>
                </div>
                {/* Name label below - always visible */}
                <div className="absolute bottom-0 left-0 right-0 text-center py-1.5 bg-white/90 group-hover:opacity-0 transition-opacity">
                  <p className="font-heading text-[10px] font-bold text-brand-dark">{e.name}</p>
                  <p className="font-heading text-[8px] text-brand-gray-mid">{e.company}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/entrepreneurs" className="inline-flex items-center gap-2 text-brand-red font-bold hover:gap-3 transition-all">
              View All Entrepreneurs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUOTE / VISION ===== */}
      <section className="py-16 bg-brand-red-pale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative text-center">
            <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-brand-dark">
              &ldquo;To transform township entrepreneurship stories into codified knowledge systems that can be
              taught, scaled, researched, and embedded within universities, corporates, and policy frameworks.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Image
                src="/images/Dr Zwane.jpg"
                alt="Dr Steven Zwane"
                width={48}
                height={48}
                className="rounded-full object-cover w-12 h-12"
              />
              <div className="text-left">
                <p className="font-bold text-brand-dark text-sm">Dr Steven Zwane</p>
                <p className="text-brand-gray-mid text-xs">Founder, RFTT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SHOP PREVIEW ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <h2 className="font-body text-3xl sm:text-4xl font-bold text-brand-dark">
              <span className="text-brand-red">Shop</span>
            </h2>
            <p className="text-brand-gray-mid mt-3">Knowledge You Can Own. Tools You Can Use.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'RFTT Heritage T-Shirt', price: 'R350', tag: 'New', img: '/images/merchandise/RFTT_T Shirt_v3.jpg' },
              { name: 'RFTT Book', price: 'R250', tag: 'New', img: '/images/books/RFTT_Book_Mockup_V7.jpg' },
              { name: 'RFTT Keychain', price: 'R80', tag: 'New', img: '/images/merchandise/RFTT_Keychain.png' },
              { name: 'Workbook + Book', price: 'R550', tag: '', img: '/images/merchandise/RFTT_Cap.jpg' },
            ].map((item) => (
              <Link key={item.name} href="/shop" className="reveal card-hover group">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-brand-cream mb-4">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {item.tag && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-brand-red text-white text-[10px] font-bold rounded-full uppercase">
                      {item.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-brand-dark text-sm">{item.name}</h3>
                <p className="text-brand-red font-bold mt-1">{item.price}</p>
                <button className="mt-3 w-full py-2.5 bg-brand-dark text-white text-xs font-bold rounded-full hover:bg-brand-red transition-colors uppercase tracking-wider">
                  Buy
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Stacked books mockup */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-brand-red/10 rounded-3xl blur-3xl" />
                <Image
                  src="/images/books/RFTT_Book_Mockup_8.jpg"
                  alt="Rising from the Township - Stacked books"
                  width={500}
                  height={400}
                  className="relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                  sizes="(max-width: 1024px) 0vw, 500px"
                />
              </div>
            </div>

            {/* Right: CTA text */}
            <div className="text-center lg:text-left">
              <h2 className="font-body text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Partner?
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We invite universities, corporates, funders, and government partners to collaborate in
                building a structured, research-informed, African-centred entrepreneurship education ecosystem.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/partner"
                  className="px-10 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-all text-sm uppercase tracking-wider"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm uppercase tracking-wider"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
