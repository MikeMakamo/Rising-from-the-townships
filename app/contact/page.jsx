'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const subjectOptions = [
  'General Enquiry',
  'Book an Entrepreneur',
  'Partnership',
  'Shop Order',
  'Media / Press',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(212,31,36,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Contact <span className="text-brand-red">Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Rising from the Township (RFTT) — Whether you have a question, a partnership proposal,
            or a booking enquiry, we would love to hear from you.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

      {/* Contact Details & Form */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark mb-8">
                Contact Details
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-brand-dark text-sm mb-1">Address</p>
                    <p className="text-brand-gray-mid text-sm leading-relaxed">
                      79 The Broads Street, Mulbarton,<br />
                      Johannesburg South
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-brand-dark text-sm mb-1">Telephone</p>
                    <a href="tel:0100231815" className="text-brand-gray-mid text-sm hover:text-brand-red transition-colors">
                      010 023 1815
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-brand-dark text-sm mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/27710481898"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gray-mid text-sm hover:text-brand-red transition-colors"
                    >
                      +27 71 048 1898
                    </a>
                  </div>
                </div>

                {/* General Enquiries */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-brand-dark text-sm mb-1">General Enquiries</p>
                    <a href="mailto:info@risingfromthetownship.co.za" className="text-brand-gray-mid text-sm hover:text-brand-red transition-colors break-all">
                      info@risingfromthetownship.co.za
                    </a>
                  </div>
                </div>

                {/* Bookings */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-brand-dark text-sm mb-1">Bookings</p>
                    <a href="mailto:rathu@risingfromthetownship.co.za" className="text-brand-gray-mid text-sm hover:text-brand-red transition-colors break-all">
                      rathu@risingfromthetownship.co.za
                    </a>
                  </div>
                </div>
              </div>

              {/* Book Promo Card */}
              <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-20 flex-shrink-0">
                    <Image
                      src="/images/books/RFTT_Book_Mockup_V7.jpg"
                      alt="Rising from the Township book"
                      width={120}
                      height={160}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-dark text-sm mb-1">
                      Get the Book
                    </p>
                    <p className="text-brand-gray-mid text-xs mb-2">
                      Rising from the Township &mdash; real stories, real strategy.
                    </p>
                    <Link
                      href="/shop"
                      className="text-brand-red font-bold text-xs hover:text-brand-red-dark transition-colors"
                    >
                      Shop Now &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark mb-2">
                  Send Us a Message
                </h2>
                <p className="text-brand-gray-mid text-sm mb-8">
                  Fill in the form below and we will get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/10 mb-6">
                      <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-brand-dark mb-2">
                      Thank You!
                    </h3>
                    <p className="text-brand-gray-mid">
                      Your message has been received. We will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-brand-dark mb-1.5">
                        Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-cream/50 text-brand-dark placeholder-brand-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors text-sm"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-brand-dark mb-1.5">
                          Email <span className="text-brand-red">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-cream/50 text-brand-dark placeholder-brand-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors text-sm"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-brand-dark mb-1.5">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-cream/50 text-brand-dark placeholder-brand-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors text-sm"
                          placeholder="+27 ..."
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-brand-dark mb-1.5">
                        Subject <span className="text-brand-red">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-cream/50 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors text-sm"
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-brand-dark mb-1.5">
                        Message <span className="text-brand-red">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-cream/50 text-brand-dark placeholder-brand-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors text-sm resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
