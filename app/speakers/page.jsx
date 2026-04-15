import Image from 'next/image';
import Link from 'next/link';
import InquiryModalTrigger from '../components/InquiryModalTrigger';

export const metadata = {
  title: 'Speakers & Engagements',
};

const availableFor = [
  'Corporate conferences',
  'University graduations & entrepreneurship weeks',
  'Policy summits',
  'Youth development forums',
  'Global entrepreneurship platforms',
  'Executive offsites',
];

const signatureThemes = [
  'Innovation from Constraint',
  'Youth Entrepreneurship & Africa\'s Economic Future',
  'Bridging Intention to Action',
  'Shared Value & Inclusive Growth',
  'Township Markets as Strategy',
  'Building Entrepreneurial Ecosystems in Emerging Economies',
];

const bookingSteps = [
  { step: '01', title: 'Submit Brief', desc: 'Share your event details, audience profile, and objectives with our team.' },
  { step: '02', title: 'Align Objectives', desc: 'We work with you to ensure the engagement aligns with your strategic goals.' },
  { step: '03', title: 'Curate Speaker', desc: 'We match the right speaker from our network to your specific context and audience.' },
  { step: '04', title: 'Confirm Delivery', desc: 'Final logistics, content alignment, and delivery preparation are completed.' },
];

const panelTopics = [
  'Entrepreneurship policy',
  'Youth employment',
  'Township economy dynamics',
  'Effectuation',
  'African case-based education',
  'E&SD strategy',
];

const whyRftt = [
  { title: 'Research-Backed Thought Leadership', desc: 'Every speaker brings insights grounded in published academic research and lived enterprise experience.' },
  { title: 'Grounded in Lived Enterprise', desc: 'Our speakers are not theorists alone — they have built, failed, scaled, and learned in real markets.' },
  { title: 'Aligned with National Priorities', desc: 'Content that speaks to South Africa\'s policy agenda on entrepreneurship education and youth development.' },
  { title: 'Structured Engagement Design', desc: 'We do not just send a speaker — we design the engagement for maximum impact and relevance.' },
  { title: 'Cross-Sector Credibility', desc: 'Speakers trusted across academia, corporates, government, and community — bridging all sectors.' },
];

export default function SpeakersPage() {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Speakers &amp; Engagements
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Voices. Systems. <span className="text-brand-red">Strategy.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            A curated network of entrepreneurs, academics, and ecosystem builders available for
            keynotes, panels, masterclasses, and strategic engagements.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

      {/* Available For & Signature Themes */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Available For */}
            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
                Available For
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-8">
                Where We Speak
              </h2>
              <ul className="space-y-4">
                {availableFor.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-brand-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature Themes */}
            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
                Signature Themes
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-8">
                What We Speak About
              </h2>
              <div className="space-y-3">
                {signatureThemes.map((theme, idx) => (
                  <div
                    key={theme}
                    className="bg-white rounded-xl px-6 py-4 border border-gray-100 flex items-center gap-4"
                  >
                    <span className="font-heading text-2xl font-bold text-brand-red/30">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-brand-dark font-medium text-sm">{theme}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              How It Works
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark">
              Booking Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((item, idx) => (
              <div key={item.step} className="relative">
                <div className="bg-brand-cream rounded-2xl p-8 h-full border border-gray-100">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-dark text-brand-red font-heading font-bold text-lg mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray-mid text-sm leading-relaxed">{item.desc}</p>
                </div>
                {idx < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-brand-red/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel Participation */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              Panel Participation
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Topics We Contribute To
            </h2>
            <p className="text-brand-gray-mid text-lg">
              Our speakers are available for panel discussions and moderated conversations across
              these critical areas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {panelTopics.map((topic) => (
              <span
                key={topic}
                className="px-6 py-3 bg-white rounded-full text-sm font-medium text-brand-dark border border-gray-200 hover:border-brand-red hover:text-brand-red transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book Through RFTT */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              The RFTT Difference
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark">
              Why Book Through RFTT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyRftt.map((item, idx) => (
              <div
                key={item.title}
                className="bg-brand-cream rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-10 h-1 bg-brand-red rounded-full mb-6" />
                <h3 className="font-heading text-lg font-bold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <blockquote className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark leading-snug">
              &ldquo;We combine story with system.{' '}
              <span className="text-brand-red">Inspiration with instruction.</span>{' '}
              Voice with structure.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Book Banner */}
      <section className="bg-brand-red py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-64 lg:w-80 flex-shrink-0">
              <Image
                src="/images/books/RFTT_Book_Mockup_10.jpg"
                alt="Rising from the Township book with spine"
                width={400}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                Every speaker&rsquo;s story is in the book
              </h2>
              <p className="text-white text-lg leading-relaxed mb-8 max-w-xl">
                Dive deeper into the journeys, strategies, and insights of our speakers
                through structured case narratives in the Rising from the Township book.
              </p>
              <Link
                href="/shop"
                className="inline-block px-8 py-4 bg-white text-brand-red font-bold rounded-full hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider"
              >
                Get Your Copy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Book a Speaker
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Ready to bring research-backed, lived-experience thought leadership to your next event?
            Submit your brief and let us curate the perfect engagement.
          </p>
          <InquiryModalTrigger
            label="Contact Us for Booking"
            subject="Speaking Enquiry"
            recipient="bookings"
            modalTitle="Book a Speaker"
            modalDescription="Send your brief and we will help curate the right RFTT speaker or engagement format for your audience."
            defaultMessage="I would like to book an RFTT speaker and discuss the event brief, audience, and objectives."
            className="inline-block px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
          />
        </div>
      </section>
    </>
  );
}
