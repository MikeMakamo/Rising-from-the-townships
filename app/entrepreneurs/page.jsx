'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const filterOptions = [
  'All',
  'Industry',
  'Gender',
  'Case Available',
  'Speaking Available',
  'High School Learning',
  'University Case',
];

const entrepreneurs = [
  {
    name: 'Dr Steven Zwane',
    title: 'Academic, Entrepreneur, Ecosystem Builder',
    company: 'YLED',
    image: '/images/entrepreneurs/Dr Steven Zwane.jpg',
    bio: 'Scholar-practitioner at intersection of youth entrepreneurship, knowledge systems, and institutional reform.',
    hasImage: true,
  },
  {
    name: 'Themba Makamo',
    title: 'Founder',
    company: 'VAYA Footwear',
    image: '/images/entrepreneurs/Themba Makamo.jpg',
    bio: 'From township roots to international manufacturing, built VAYA into a proudly African sneaker brand.',
    hasImage: true,
  },
  {
    name: 'Rita Zwane',
    title: 'Founder',
    company: 'Imbizo Shisanyama',
    image: '/images/entrepreneurs/Rita Zwane.jpg',
    bio: 'Pioneered formalisation of the shisanyama industry, transforming informal township food into scalable hospitality.',
    hasImage: true,
  },
  {
    name: 'Nozipho Tshabalala',
    title: 'Founder',
    company: 'The Conversation Strategist',
    image: '/images/entrepreneurs/Nozipho Mbanjwa-Tshabalala.jpg',
    bio: 'Built a global strategic advisory platform rooted in African leadership conversations.',
    hasImage: true,
  },
  {
    name: 'Sheldon Tatchell',
    title: 'Founder',
    company: 'Legends Barbershop',
    image: '/images/entrepreneurs/Sheldon Tatchell.jpg',
    bio: 'From cutting hair on a stoep to building a multi-country grooming brand.',
    hasImage: true,
  },
  {
    name: 'Nomso Kana',
    title: 'Founder',
    company: 'Simsciex Technologies',
    image: '/images/entrepreneurs/Nomso Kana.jpg',
    bio: 'Technology entrepreneur at the intersection of engineering, innovation, and African tech ecosystems.',
    hasImage: true,
  },
  {
    name: 'Veronica Motloutsi',
    title: 'Founder',
    company: 'SmartDigital Solutions',
    image: '/images/entrepreneurs/Veronica Motloutsi.jpg',
    bio: 'Digital entrepreneur focused on transformation, innovation, and digital capability building.',
    hasImage: true,
  },
  {
    name: 'Tebogo Phiri',
    title: 'Founder',
    company: 'Disoufeng',
    image: '/images/entrepreneurs/Tebogo Phiri.jpg',
    bio: 'Built Disoufeng into a multi-industry enterprise reflecting diversification and strategic reinvention.',
    hasImage: true,
  },
  {
    name: 'Ntuthuko Shezi',
    title: 'Founder',
    company: 'Livestock Wealth',
    image: '/images/entrepreneurs/Ntuthuko-Shezi.jpg',
    bio: "Built Africa's first crowd-farming livestock investment platform.",
    hasImage: true,
  },
  {
    name: 'Candice Thurston',
    title: 'Founder',
    company: 'Candi & Co',
    image: '/images/entrepreneurs/Candice Thurston 2.jpg',
    bio: 'Built a purpose-driven beauty and lifestyle brand combining entrepreneurship with social empowerment.',
    hasImage: true,
  },
  {
    name: 'Yamkela Khoza Tywakadi',
    title: 'Founder',
    company: 'Blank Page Books',
    image: null,
    bio: 'Publishing entrepreneur amplifying African voices and intellectual capital.',
    hasImage: false,
  },
  {
    name: 'Zibusiso Mkhwanazi',
    title: 'Co-Founder',
    company: 'M&N Brands',
    image: null,
    bio: "Built one of SA's leading digital marketing and brand strategy firms.",
    hasImage: false,
    initials: 'ZM',
  },
  {
    name: 'Lekau Sehoana',
    title: 'Founder',
    company: 'Drip Footwear',
    image: null,
    bio: "Built Drip Footwear into one of SA's fastest-growing sneaker brands.",
    hasImage: false,
    initials: 'LS',
  },
];

function getInitials(name) {
  return name
    .split(' ')
    .filter((part) => !['Dr', 'Prof'].includes(part))
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

export default function EntrepreneursPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Entrepreneur Profiles
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Meet Our Featured{' '}
              <span className="text-brand-red">Entrepreneurs</span>
            </h1>
            <p className="text-xl text-gray-300 font-heading mb-4">
              Lived Enterprise. Structured Insight. Scalable Impact.
            </p>
            <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
              Each entrepreneur on this platform represents case material, teaching content,
              ecosystem insight, and lived strategy. Their journeys have been codified into
              knowledge systems that inform education, corporate programmes, and policy.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? 'bg-brand-red text-white'
                    : 'bg-gray-100 text-brand-gray-mid hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Entrepreneur Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {entrepreneurs.map((entrepreneur) => (
              <div
                key={entrepreneur.name}
                className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[3/4]"
              >
                {/* Image or Placeholder */}
                {entrepreneur.hasImage ? (
                  <Image
                    src={entrepreneur.image}
                    alt={entrepreneur.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-brand-dark flex items-center justify-center">
                    <span className="font-heading text-4xl sm:text-5xl font-bold text-brand-red/40">
                      {entrepreneur.initials || getInitials(entrepreneur.name)}
                    </span>
                  </div>
                )}

                {/* Default overlay - name and company */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-white font-bold text-sm sm:text-base">
                    {entrepreneur.name}
                  </h3>
                  <p className="text-brand-red text-xs sm:text-sm">
                    {entrepreneur.title}, {entrepreneur.company}
                  </p>
                </div>

                {/* Hover overlay - bio and CTAs */}
                <div className="absolute inset-0 bg-brand-dark/90 flex flex-col justify-end p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-bold text-sm sm:text-base mb-1">
                    {entrepreneur.name}
                  </h3>
                  <p className="text-brand-red text-xs font-bold mb-2">
                    {entrepreneur.title}, {entrepreneur.company}
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {entrepreneur.bio}
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/contact"
                      className="text-center px-3 py-2 bg-brand-red text-white text-xs font-bold rounded-full hover:bg-brand-red-dark transition-colors"
                    >
                      View Profile
                    </Link>
                    <Link
                      href="/contact"
                      className="text-center px-3 py-2 border border-white/30 text-white text-xs font-bold rounded-full hover:bg-white/10 transition-colors"
                    >
                      Enquire About Availability
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Banner */}
      <section className="bg-brand-red py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-64 lg:w-80 flex-shrink-0">
              <Image
                src="/images/books/RFTT_Book_Mockup_8.jpg"
                alt="Rising from the Township stacked books"
                width={400}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                Their stories are in the book
              </h2>
              <p className="text-white text-lg leading-relaxed mb-8 max-w-xl">
                Rising from the Township captures the journeys of these entrepreneurs
                in structured, teachable case narratives.
              </p>
              <Link
                href="/shop"
                className="inline-block px-8 py-4 bg-white text-brand-red font-bold rounded-full hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider"
              >
                Get The Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
            Engagement & Bookings
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
            Book This Entrepreneur
          </h2>
          <p className="text-brand-gray-mid text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Our featured entrepreneurs are available for keynotes, panel discussions,
            masterclasses, entrepreneur-in-residence programmes, and strategy workshops.
          </p>
          <p className="text-brand-gray-mid text-base mb-10 max-w-2xl mx-auto">
            Each engagement is grounded in lived experience and structured through
            research-informed frameworks, ensuring every interaction delivers insight that
            is both authentic and actionable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
            >
              Enquire About Availability
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-brand-dark/20 text-brand-dark font-bold rounded-full hover:bg-brand-dark hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Learn More About RFTT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
