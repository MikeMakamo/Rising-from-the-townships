'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InquiryModalTrigger from '../components/InquiryModalTrigger';
import { bookSynopsisDownloadUrl } from '../data/book';
import {
  filterDescriptions,
  filterEntrepreneurs,
  filterOptions,
  getInitials,
} from './data';

export default function EntrepreneursPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredEntrepreneurs = filterEntrepreneurs(activeFilter);

  return (
    <>
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
              ecosystem insight, and lived strategy. Click any profile to view the full
              biography, external links, and booking request options.
            </p>
          </div>
        </div>
      </section>

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

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-2">
                Active Filter
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark">
                {activeFilter}
              </h2>
              <p className="text-brand-gray-mid text-sm sm:text-base leading-relaxed max-w-2xl mt-3">
                {filterDescriptions[activeFilter]}
              </p>
            </div>
            <p className="text-brand-gray-mid text-sm font-bold uppercase tracking-[0.18em]">
              {filteredEntrepreneurs.length} entrepreneur
              {filteredEntrepreneurs.length === 1 ? '' : 's'}
            </p>
          </div>

          {filteredEntrepreneurs.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredEntrepreneurs.map((entrepreneur) => (
                <Link
                  key={entrepreneur.slug}
                  href={`/entrepreneurs/${entrepreneur.slug}`}
                  className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[3/4] card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-4"
                  aria-label={`View ${entrepreneur.name}'s entrepreneur profile`}
                >
                  {entrepreneur.image ? (
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
                    <h2 className="text-white font-bold text-sm sm:text-base">
                      {entrepreneur.name}
                    </h2>
                    <p className="text-brand-red text-xs sm:text-sm">
                      {entrepreneur.title}, {entrepreneur.company}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-brand-dark/90 flex flex-col justify-end p-4 sm:p-5 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                    <h2 className="text-white font-bold text-sm sm:text-base mb-1">
                      {entrepreneur.name}
                    </h2>
                    <p className="text-brand-red text-xs font-bold mb-2">
                      {entrepreneur.title}, {entrepreneur.company}
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed mb-4">
                      {entrepreneur.summary}
                    </p>
                    <span className="inline-flex items-center justify-center px-3 py-2 bg-brand-red text-white text-xs font-bold rounded-full">
                      View profile & booking options
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-brand-dark/15 bg-brand-cream p-10 text-center">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark mb-3">
                No entrepreneurs match this filter yet
              </h3>
              <p className="text-brand-gray-mid max-w-2xl mx-auto leading-relaxed">
                Try another filter or return to All to explore the full entrepreneur archive.
              </p>
            </div>
          )}
        </div>
      </section>

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
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/shop"
                  className="inline-block px-8 py-4 bg-white text-brand-red font-bold rounded-full hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider"
                >
                  Get The Book
                </Link>
                <a
                  href={bookSynopsisDownloadUrl}
                  download
                  className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
                >
                  Download Synopsis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
            Engagement & Bookings
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
            Book An Entrepreneur
          </h2>
          <p className="text-brand-gray-mid text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Our featured entrepreneurs are available for keynotes, panel discussions,
            masterclasses, entrepreneur-in-residence programmes, and strategy workshops.
          </p>
          <p className="text-brand-gray-mid text-base mb-10 max-w-2xl mx-auto">
            Open a profile to see the full entrepreneur biography and then send a booking
            request with the person pre-selected in the contact form.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <InquiryModalTrigger
              label="General Booking Enquiry"
              subject="Book an Entrepreneur"
              recipient="bookings"
              modalTitle="Book an RFTT Entrepreneur"
              modalDescription="Tell us about your event, institution, or programme and we will recommend the right entrepreneur and format."
              defaultMessage="I would like to book an RFTT entrepreneur and discuss the best fit for my audience or event."
              className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
            />
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
