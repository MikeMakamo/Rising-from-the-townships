import Link from 'next/link';

export const metadata = {
  title: 'For Organisations | RFTT Institutional Solutions',
};

const strategicDomains = [
  {
    number: '01',
    title: 'Knowledge & Curriculum Development',
    tagline: 'Local case material. African-centred pedagogy. Institutional rigour.',
    description:
      'We develop structured, research-backed learning content rooted in real African entrepreneurial journeys — designed for universities, TVET colleges, and training institutions seeking contextually relevant material.',
    items: [
      'African entrepreneurship case studies',
      'Contextualised workbooks and learning guides',
      'Curriculum integration support',
      'Research collaboration frameworks',
    ],
  },
  {
    number: '02',
    title: 'High School Entrepreneurship Integration',
    tagline:
      "Supporting South Africa's policy shift towards entrepreneurship education in high schools.",
    description:
      "Dr Zwane's doctoral research examined the intention-to-action gap in youth entrepreneurship. RFTT operationalises this research into practical, scalable tools for high school integration.",
    items: [
      'Structured learning models for high school entrepreneurship',
      'Teacher capacity-building and support',
      'Intention-to-action diagnostic frameworks',
      'Youth enterprise labs and experiential programmes',
    ],
  },
  {
    number: '03',
    title: 'Corporate & Shared Value Strategy',
    tagline:
      'Move beyond CSR compliance into structured, measurable ecosystem engagement.',
    description:
      'RFTT helps corporates embed authentic township enterprise insight into their development strategies — creating shared value that serves business objectives and community impact simultaneously.',
    items: [
      'Enterprise & Supplier Development alignment',
      'Youth employability integration',
      'Township market insight and intelligence',
      'Measurable ecosystem impact reporting',
    ],
  },
  {
    number: '04',
    title: 'Ecosystem & Policy Engagement',
    tagline:
      'Bridging entrepreneurs, institutions, and government through structured dialogue.',
    description:
      'RFTT creates platforms where lived enterprise experience meets policy design — ensuring that entrepreneurship strategies are grounded in the realities of township economies.',
    items: [
      'Dialogue platforms for multi-stakeholder engagement',
      'Research-backed policy advisory',
      'Entrepreneur ecosystem bridging',
      'Youth Entrepreneurship Dialogue facilitation',
    ],
  },
];

const signatureProgrammes = [
  'Rising from the Township Masterclass Series',
  'Youth Entrepreneurship Orientation Workshops',
  'Entrepreneurial Mindset Development Labs',
  'Intention-to-Action Diagnostic Tools',
  'Corporate Shared Value Entrepreneurship Sessions',
  'Entrepreneur Dialogue Series (YED-aligned)',
  'Youth Entrepreneurship Skills Workshops',
];

export default function OrganisationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-brand-dark overflow-hidden">
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
          <div className="max-w-4xl">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Institutional Solutions
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              RFTT{' '}
              <span className="text-brand-red">Institutional Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Supporting institutions across four strategic domains — from
              curriculum development and high school integration to corporate
              shared value and ecosystem engagement.
            </p>
            <Link
              href="#domains"
              className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider inline-block"
            >
              Explore Our Domains
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

      {/* Strategic Domains */}
      <section id="domains" className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              What We Do
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Four Strategic Domains
            </h2>
            <p className="text-brand-gray-mid text-lg leading-relaxed">
              RFTT operates at the intersection of lived enterprise experience
              and institutional delivery, structured across four interconnected
              domains.
            </p>
          </div>

          <div className="space-y-16">
            {strategicDomains.map((domain) => (
              <div
                key={domain.number}
                className="bg-white rounded-2xl border border-brand-red/20 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Number badge */}
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/10 text-brand-red font-heading text-2xl font-bold">
                        {domain.number}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark mb-3">
                        {domain.title}
                      </h3>
                      <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-4">
                        {domain.tagline}
                      </p>
                      <p className="text-brand-gray-mid text-lg leading-relaxed mb-6">
                        {domain.description}
                      </p>

                      <ul className="grid sm:grid-cols-2 gap-3">
                        {domain.items.map((item) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Signature Programmes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Our Programmes
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Signature Programmes
            </h2>
            <p className="text-brand-gray-mid text-lg leading-relaxed">
              Each programme is designed to bridge the gap between entrepreneurial
              intention and sustained enterprise action.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {signatureProgrammes.map((programme, index) => (
              <div
                key={programme}
                className="group relative bg-brand-cream rounded-xl p-6 border border-brand-red/10 hover:border-brand-red/40 transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brand-dark leading-snug group-hover:text-brand-dark transition-colors">
                    {programme}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Partner with <span className="text-brand-red">RFTT</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are a university, school, corporate, or government
            department — RFTT has a structured pathway to support your
            entrepreneurship objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partner"
              className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
            >
              Why Partner With Us
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-brand-red text-brand-red font-bold rounded-full hover:bg-brand-red hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
