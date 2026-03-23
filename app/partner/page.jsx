import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Why Partner With RFTT',
};

const whyNowPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    text: 'Youth unemployment remains structurally high across South Africa.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    text: 'Entrepreneurial intention is widespread, but the transition to sustained action remains low.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
    text: 'Township enterprises drive real economic activity but remain under-codified in formal education.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    text: 'Government policy is now prioritising the integration of entrepreneurship education in high schools.',
  },
];

const corporateItems = [
  'National youth development alignment',
  'Enterprise & Supplier Development integration',
  'Authentic township market insight',
  'Shared value strategy activation',
  'Measurable and reportable impact',
];

const higherLearningItems = [
  'African-centred entrepreneurship case studies',
  'Bridging the gap between practice and theory',
  'Curriculum enhancement with lived enterprise content',
  'Research collaboration opportunities',
  'Connection to real entrepreneurial ecosystems',
];

const professionalsItems = [
  'Donate entrepreneurship books to schools with measurable outcomes',
  'Use books as conversation starters for workshops and mentorship',
  'Tell your own Rising from the Township story',
];

const csiItems = [
  'Alignment with national priorities and policy frameworks',
  'Measurable impact and structured reporting',
  'Authentic ecosystem engagement beyond compliance',
  'Sustainability, scalability, and long-term value',
];

const policyItems = [
  'Structured learning models for high school entrepreneurship',
  'African-centred case material rooted in real enterprise journeys',
  'Practical workbooks and learning guides',
  'Research-backed pedagogical frameworks',
  'High school masterclass facilitation',
];

const distinctItems = [
  { label: 'Research-Grounded', description: 'Built on doctoral-level research into the intention-to-action gap in youth entrepreneurship.' },
  { label: 'African Case-Based', description: 'Every framework, workbook, and programme draws from real township enterprise journeys.' },
  { label: 'Education Reform-Aligned', description: "Directly supports South Africa's policy shift towards entrepreneurship in high schools." },
  { label: 'Cross-Sector Bridging', description: 'Connects corporates, universities, schools, government, and entrepreneurs into a unified ecosystem.' },
  { label: 'Designed for Scale', description: 'Programmes and tools built to be replicated, adapted, and scaled across institutions and regions.' },
];

export default function PartnerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-brand-dark overflow-hidden">
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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="max-w-4xl flex-1">
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Partnership
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Why Partner with{' '}
                <span className="text-brand-red">Rising from the Township?</span>
              </h1>
              <p className="text-brand-red font-heading text-xl sm:text-2xl mb-6">
                Bridging Lived Enterprise and Institutional Impact
              </p>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
                South Africa does not lack entrepreneurial energy. It lacks
                structured pathways that translate entrepreneurial intention into
                sustained enterprise action.
              </p>
            </div>
            <div className="hidden lg:block flex-shrink-0 w-64 xl:w-72">
              <Image
                src="/images/books/RFTT_front_hardcover.jpg"
                alt="Rising from the Township book cover"
                width={350}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

      {/* Why RFTT Matters Now */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              The Context
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Why RFTT Matters Now
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyNowPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-start gap-5 bg-white rounded-xl p-6 border border-brand-red/10"
              >
                <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-red/10 text-brand-red">
                  {point.icon}
                </span>
                <p className="text-brand-dark text-lg leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alignment with Government Policy */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Policy Alignment
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
                Strategic Alignment with Government Policy
              </h2>
              <p className="text-brand-gray-mid text-lg leading-relaxed mb-8">
                The South African government has prioritised the integration of
                entrepreneurship education in high schools. RFTT provides the
                tools, content, and frameworks to make this vision actionable.
              </p>
            </div>

            <div className="bg-brand-cream rounded-2xl p-8 border border-brand-red/20">
              <h3 className="font-heading text-xl font-bold text-brand-dark mb-6">
                What RFTT Provides
              </h3>
              <ul className="space-y-4">
                {policyItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-brand-dark text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Who We Serve
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              A Partnership for Every Stakeholder
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* For Corporates */}
            <div className="bg-white rounded-2xl border border-brand-red/20 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-brand-dark p-6">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-red/20">
                    <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    For Corporates
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-brand-gray-mid text-lg leading-relaxed mb-6">
                  Move beyond CSR compliance into structured, measurable ecosystem
                  engagement that creates shared value for business and community.
                </p>
                <ul className="space-y-3">
                  {corporateItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-brand-red" />
                      <span className="text-brand-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* For Higher Learning Institutions */}
            <div className="bg-white rounded-2xl border border-brand-red/20 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-brand-dark p-6">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-red/20">
                    <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    For Higher Learning Institutions
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-brand-gray-mid text-lg leading-relaxed mb-6">
                  Enrich your entrepreneurship curriculum with contextualised,
                  African-centred content grounded in real enterprise experience.
                </p>
                <ul className="space-y-3">
                  {higherLearningItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-brand-red" />
                      <span className="text-brand-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* For Professionals / Donors / Social Change Agents */}
            <div className="bg-white rounded-2xl border border-brand-red/20 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-brand-red p-6">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-dark/20">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    For Professionals, Donors & Social Change Agents
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-brand-gray-mid text-lg leading-relaxed mb-6">
                  Make a tangible impact through entrepreneurship education and
                  become part of the Rising from the Township movement.
                </p>
                <ul className="space-y-3">
                  {professionalsItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-brand-red" />
                      <span className="text-brand-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* For CSI Departments */}
            <div className="bg-white rounded-2xl border border-brand-red/20 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-brand-dark p-6">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-red/20">
                    <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    For CSI Departments
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-brand-gray-mid text-lg leading-relaxed mb-6">
                  Deliver on your social investment mandate with programmes that
                  are aligned, measurable, and genuinely transformative.
                </p>
                <ul className="space-y-3">
                  {csiItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-brand-red" />
                      <span className="text-brand-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes RFTT Distinct */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Our Differentiator
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              What Makes RFTT Distinct
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {distinctItems.map((item, index) => (
              <div
                key={item.label}
                className={`relative bg-brand-cream rounded-2xl p-8 border border-brand-red/10 ${
                  index === distinctItems.length - 1 && distinctItems.length % 3 === 2
                    ? 'sm:col-span-2 lg:col-span-1'
                    : ''
                }`}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-red text-white font-bold text-sm mb-4">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-3">
                  {item.label}
                </h3>
                <p className="text-brand-gray-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            RFTT Stands Ready to{' '}
            <span className="text-brand-red">Partner</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you represent a corporate, university, school, government
            department, or civil society organisation — RFTT has a structured,
            research-backed pathway to support your entrepreneurship and
            development objectives.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
