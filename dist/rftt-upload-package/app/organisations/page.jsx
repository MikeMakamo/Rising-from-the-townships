import Link from 'next/link';
import InquiryModalTrigger from '../components/InquiryModalTrigger';
import {
  additionalServiceModels,
  coreServicePortfolio,
  popularFormats,
  popularThemes,
  serviceHeroChips,
  serviceLead,
  serviceProofStats,
  whoWeServe,
  whyRfttServices,
} from '../data/services';

export const metadata = {
  title: 'Services & Institutional Solutions',
};

const strategicDomains = [
  {
    number: '01',
    title: 'Knowledge & Curriculum Development',
    tagline: 'Local case material. African-centred pedagogy. Institutional rigour.',
    description:
      'We develop structured, research-backed learning content rooted in real African entrepreneurial journeys, designed for universities, TVET colleges, and training institutions seeking contextually relevant material.',
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
      'RFTT helps corporates embed authentic township enterprise insight into their development strategies, creating shared value that serves business objectives and community impact simultaneously.',
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
      'RFTT creates platforms where lived enterprise experience meets policy design, ensuring that entrepreneurship strategies are grounded in the realities of township economies.',
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
          <div className="max-w-5xl">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Services & Institutional Solutions
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Entrepreneurship education, leadership development and{' '}
              <span className="text-brand-red">story-powered learning</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
              Learning experiences for schools, universities, foundations and ecosystem
              partners. RFTT helps institutions develop entrepreneurial mindsets by
              combining real African founder stories, entrepreneurship research,
              learning design and practical programme delivery.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {serviceHeroChips.map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white text-xs font-bold uppercase tracking-wider"
                >
                  {chip}
                </span>
              ))}
            </div>
            <Link
              href="#service-portfolio"
              className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider inline-block"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

      <section className="bg-brand-red py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {serviceProofStats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-white/80 text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-portfolio" className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Core Service Portfolio
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Structured services built from real African founder stories
            </h2>
            <p className="text-brand-gray-mid text-lg leading-relaxed">
              Our work translates entrepreneurial thinking into leadership capability,
              especially for young people navigating uncertainty and possibility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreServicePortfolio.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-[2rem] border border-brand-red/15 p-8 sm:p-10 shadow-sm hover:shadow-lg transition-shadow"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-red/10 text-brand-red font-bold text-sm mb-6">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-2xl font-bold text-brand-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-brand-gray-mid text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_420px] gap-10 lg:gap-12 items-start">
            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Additional Services
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
                Formats, learning tools and engagement models
              </h2>
              <div className="space-y-6">
                {additionalServiceModels.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-[2rem] border border-brand-dark/10 bg-brand-cream p-8"
                  >
                    <h3 className="font-heading text-2xl font-bold text-brand-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-brand-gray-mid leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-dark rounded-[2rem] p-8 sm:p-10 text-white">
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Popular Themes
              </p>
              <h3 className="font-heading text-3xl font-bold mb-6">
                Themes that travel well across classrooms, cohorts and institutions
              </h3>
              <div className="space-y-3">
                {popularThemes.map((theme) => (
                  <div
                    key={theme}
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <p className="text-white font-medium leading-relaxed">{theme}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] border border-brand-red/15 p-8 sm:p-10 shadow-sm">
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Who We Serve
              </p>
              <h2 className="font-heading text-3xl font-bold text-brand-dark mb-6">
                Institutions and ecosystems we support
              </h2>
              <ul className="space-y-4">
                {whoWeServe.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-red flex-shrink-0" />
                    <span className="text-brand-dark leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-[2rem] border border-brand-red/15 p-8 sm:p-10 shadow-sm">
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Popular Formats
              </p>
              <h2 className="font-heading text-3xl font-bold text-brand-dark mb-6">
                How services are delivered in practice
              </h2>
              <ul className="space-y-4">
                {popularFormats.map((format) => (
                  <li key={format} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-red flex-shrink-0" />
                    <span className="text-brand-dark leading-relaxed">{format}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="domains" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Strategic Domains
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              How RFTT translates services into institutional delivery
            </h2>
            <p className="text-brand-gray-mid text-lg leading-relaxed">
              RFTT operates at the intersection of lived enterprise experience and
              institutional delivery, structured across four connected domains.
            </p>
          </div>

          <div className="space-y-16">
            {strategicDomains.map((domain) => (
              <div
                key={domain.number}
                className="bg-brand-cream rounded-2xl border border-brand-red/20 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
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

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Signature Programmes
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Programme pathways that extend beyond a once-off event
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
                className="group relative bg-white rounded-xl p-6 border border-brand-red/10 hover:border-brand-red/40 transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brand-dark leading-snug">
                    {programme}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Why RFTT
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Why institutions choose this approach
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyRfttServices.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-brand-dark/10 bg-brand-cream p-8"
              >
                <div className="w-10 h-1 bg-brand-red rounded-full mb-6" />
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-gray-mid leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Bring RFTT To Your Institution
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Services can be tailored for learner cohorts, student founders, educators and leadership communities
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
                Available for schools, universities, foundations, youth platforms and
                partner ecosystems. If you need a keynote, a workshop series, programme
                design support or a case-based learning intervention, we can shape the
                format around your audience and objectives.
              </p>
              <div className="flex flex-wrap gap-4">
                <InquiryModalTrigger
                  label="Discuss a Service Brief"
                  subject="Service Brief"
                  recipient="info"
                  modalTitle="Discuss a Service Brief"
                  modalDescription="Tell us about your institution, audience, and the kind of service delivery or programme support you need."
                  defaultMessage="I would like to discuss an RFTT service brief for my institution or organisation."
                  className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
                />
                <a
                  href={`mailto:${serviceLead.email}`}
                  className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
                >
                  Email Directly
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10">
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Service Lead
              </p>
              <h3 className="font-heading text-3xl font-bold text-white mb-2">
                {serviceLead.name}
              </h3>
              <p className="text-gray-300 mb-2">{serviceLead.title}</p>
              <p className="text-gray-400 mb-8">{serviceLead.secondaryTitle}</p>
              <div className="space-y-4">
                <a
                  href={`mailto:${serviceLead.email}`}
                  className="block text-white hover:text-brand-red transition-colors"
                >
                  {serviceLead.email}
                </a>
                <a
                  href="tel:+27117714000"
                  className="block text-white hover:text-brand-red transition-colors"
                >
                  {serviceLead.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
