import Image from 'next/image';
import Link from 'next/link';
import InquiryModalTrigger from '../components/InquiryModalTrigger';

export const metadata = {
  title: 'About Us',
};

const transitionSteps = [
  {
    number: '01',
    label: 'Inspiration',
    desc: 'Capturing lived entrepreneurial journeys from the township.',
  },
  {
    number: '02',
    label: 'Instruction',
    desc: 'Converting stories into structured teaching and learning content.',
  },
  {
    number: '03',
    label: 'Institutionalisation',
    desc: 'Embedding knowledge into universities, schools, corporates, and policy.',
  },
  {
    number: '04',
    label: 'Impact',
    desc: 'Creating scalable systems that drive entrepreneurial capability nationally.',
  },
];

const knowledgeOutputs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Academic Case Studies',
    desc: 'Published through Ivey Publishing and Emerald Emerging Markets Case Studies for global university classrooms.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: 'High School Learning Models',
    desc: 'Age-appropriate entrepreneurship workbooks aligned with South Africa\'s national curriculum policy goals.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'University Curriculum',
    desc: 'Full course modules, teaching notes, and assessment frameworks for higher education institutions.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: 'Corporate Shared Value Frameworks',
    desc: 'Structured enterprise development and CSI programmes grounded in real township enterprise data.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: 'Policy-Relevant Research',
    desc: 'Evidence-based insights informing entrepreneurship education policy at national and provincial levels.',
  },
];

const intersections = [
  'Entrepreneurship Education',
  'Township Enterprise Development',
  'Shared Value Strategy',
  'Knowledge System Design',
  'Youth Entrepreneurial Intention-to-Action Research',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-cream py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text - Left */}
            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                About RFTT
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
                Where Lived Experience Becomes{' '}
                <span className="text-brand-red">Structured Knowledge</span>
              </h1>
            </div>

            {/* Book Cover - Right */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] drop-shadow-2xl">
                <Image
                  src="/images/books/RFTT_front_hardcover.jpg"
                  alt="Rising from the Township - Book Cover"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Purpose */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              Platform Purpose
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              Codifying Township Enterprise Into{' '}
              <span className="text-brand-red">Scalable Systems</span>
            </h2>
            <p className="text-brand-gray-mid text-lg leading-relaxed">
              RFTT is a knowledge creation and entrepreneurship education platform that codifies
              township enterprise journeys into structured, research-informed systems. We convert
              lived experience into frameworks that can be taught, scaled, and institutionalised.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {knowledgeOutputs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-red/10 text-brand-red mb-4">
                  {item.icon}
                </span>
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Transition */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              The Transition
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              From Inspiration to <span className="text-brand-red">Impact</span>
            </h2>
          </div>

          {/* Stepper - Desktop */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-brand-red/20" />
            <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-red via-brand-red/60 to-brand-red/20" />

            {transitionSteps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center w-1/4 px-4">
                <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm z-10">
                  {step.number}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mt-4 mb-2">
                  {step.label}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Stepper - Mobile */}
          <div className="md:hidden space-y-8">
            {transitionSteps.map((step, i) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  {i < transitionSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-brand-red/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-lg font-bold text-white mb-1">
                    {step.label}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              Founder
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark">
              Dr Steven Zwane
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Dr Zwane.jpg"
                alt="Dr Steven Zwane - Founder of RFTT"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Bio Content */}
            <div>
              {/* Roles */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'Founder of RFTT',
                  'Co-Author of Rising from the Township',
                  'Senior Lecturer at GIBS',
                  'Founder of YLED',
                ].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 bg-brand-red/10 text-brand-red text-xs font-bold rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="text-brand-gray-mid text-base leading-relaxed mb-6">
                Dr Steven Zwane works at the intersection of multiple disciplines, bridging
                academic rigour with entrepreneurial practice to create systems that transform how
                township enterprise is understood, taught, and scaled.
              </p>

              {/* Intersection Areas */}
              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-brand-dark mb-4">
                  Works at the Intersection of:
                </h3>
                <div className="space-y-2">
                  {intersections.map((area) => (
                    <div key={area} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                      <span className="text-brand-gray-mid text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publications */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="relative w-20 h-28 rounded-md overflow-hidden flex-shrink-0 shadow-md">
                    <Image
                      src="/images/books/RFTT_Book_Mockup_V7.jpg"
                      alt="Rising from the Township - Book"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-dark mb-2">
                      Published Case Studies
                    </h3>
                    <p className="text-brand-gray-mid text-sm leading-relaxed">
                      His cases have been featured in <span className="font-bold text-brand-dark">Ivey Publishing</span> and{' '}
                      <span className="font-bold text-brand-dark">Emerald Emerging Markets Case Studies</span>,
                      making African township entrepreneurship accessible to global university classrooms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <blockquote className="border-l-4 border-brand-red pl-6 mb-8">
                <p className="font-heading text-lg text-brand-dark leading-relaxed italic">
                  &ldquo;To transform township entrepreneurship stories into codified knowledge
                  systems that can be taught, scaled, researched, and embedded within universities,
                  corporates, and policy frameworks.&rdquo;
                </p>
                <footer className="mt-3 text-brand-gray-mid text-sm font-bold">
                  &mdash; Dr Steven Zwane, Vision for RFTT
                </footer>
              </blockquote>

              {/* Mission */}
              <div className="bg-brand-dark rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-2">Mission</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To ensure township enterprises are studied, systematised, and institutionalised
                  &mdash; moving from informal resilience to structured, scalable knowledge that
                  shapes education, industry, and policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Book Section */}
      <section className="py-20 lg:py-28 bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Book Mockup - Left */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] drop-shadow-2xl">
                <Image
                  src="/images/books/RFTT_Book_Mockup_2_V7.jpg"
                  alt="Rising from the Township - Open book front and back spread"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Book Details - Right */}
            <div>
              <p className="text-white/70 font-bold text-sm uppercase tracking-[0.2em] mb-4">
                The Book
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                The Book That Started It All
              </h2>
              <p className="text-white text-xl font-heading font-bold leading-snug mb-2">
                Rising from the Township &mdash; Inspiring Stories of South African Entrepreneurs
              </p>
              <p className="text-white/80 text-base mb-6">
                By Dr Steven Zwane &amp; Yamkela Khoza Tywakadi
              </p>
              <p className="text-white/90 text-base leading-relaxed mb-8">
                This book codifies 10 real township enterprise journeys into compelling narratives
                that reveal the resilience, ingenuity, and strategic thinking behind South
                Africa&apos;s most inspiring grassroots entrepreneurs. More than a collection of
                stories, it is the foundation on which the entire RFTT knowledge system is built
                &mdash; bridging lived experience with academic rigour.
              </p>
              <Link
                href="/shop"
                className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-brand-red transition-colors text-sm uppercase tracking-wider"
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
            Want to Learn More?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Explore our entrepreneurs, discover our knowledge products, or get in touch to
            discuss partnership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/entrepreneurs"
              className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
            >
              Meet Our Entrepreneurs
            </Link>
            <InquiryModalTrigger
              label="Get In Touch"
              subject="Partnership"
              recipient="info"
              modalTitle="Discuss a Partnership Opportunity"
              modalDescription="Tell us a little about your institution, audience, or opportunity and we will respond with the right next step."
              defaultMessage="I would like to discuss a possible partnership opportunity with RFTT."
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
            />
          </div>
        </div>
      </section>
    </>
  );
}
