import Link from 'next/link';

export const metadata = {
  title: 'Courses & Structured Learning',
};

const tiers = [
  {
    number: '01',
    title: 'Youth Entrepreneurship Foundations',
    description:
      'Building entrepreneurial mindsets from the ground up — designed for high school learners ready to move from intention to action.',
    courses: [
      {
        name: 'High School Entrepreneurship Mindset Programme',
        desc: 'A structured programme that cultivates entrepreneurial thinking, resilience, and opportunity recognition among high school learners.',
      },
      {
        name: 'Intention-to-Action Lab',
        desc: 'A facilitated workshop bridging the gap between entrepreneurial intention and tangible first steps.',
      },
      {
        name: 'Mini Enterprise Lab',
        desc: 'Hands-on enterprise simulation where learners build, test, and iterate real micro-ventures.',
      },
    ],
  },
  {
    number: '02',
    title: 'University-Level Entrepreneurship Modules',
    description:
      'Rigorous, case-based modules grounded in African entrepreneurial realities — built for tertiary institutions seeking relevance and depth.',
    courses: [
      {
        name: 'African Case-Based Entrepreneurship',
        desc: 'Teaching entrepreneurship through real African case studies published via Ivey, Emerald, and Harvard platforms.',
      },
      {
        name: 'Effectuation in African Markets',
        desc: 'Applying effectuation theory to the unique constraints and opportunities of African township and emerging markets.',
      },
      {
        name: 'Township Enterprise Systems',
        desc: 'Understanding the systemic dynamics of township-based enterprises and their pathways to scale.',
      },
    ],
  },
  {
    number: '03',
    title: 'Corporate Masterclasses',
    description:
      'Strategic sessions for executives, E&SD teams, and corporate leaders seeking to engage meaningfully with township economies and youth enterprise.',
    courses: [
      {
        name: 'Shared Value & Township Markets',
        desc: 'How corporates can create shared value by strategically engaging township markets as economic ecosystems.',
      },
      {
        name: 'Entrepreneurship as Ecosystem Strategy',
        desc: 'Positioning entrepreneurship development as a core business strategy, not just a CSI line item.',
      },
      {
        name: 'Youth Enterprise Development Strategy',
        desc: 'Designing effective youth enterprise programmes that move beyond motivation to measurable outcomes.',
      },
    ],
  },
  {
    number: '04',
    title: 'Educator Development',
    description:
      'Equipping educators with the tools, methods, and confidence to teach African entrepreneurship with rigour and relevance.',
    courses: [
      {
        name: 'Teaching African Entrepreneurship Effectively',
        desc: 'Frameworks and facilitation techniques for delivering entrepreneurship content rooted in African contexts.',
      },
      {
        name: 'Case Method Training',
        desc: 'Training educators in the case method of instruction using published African entrepreneurship case studies.',
      },
      {
        name: 'Intention-to-Action Facilitation',
        desc: 'Developing facilitation skills to guide learners from entrepreneurial intention through to structured action.',
      },
    ],
  },
];

export default function CoursesPage() {
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
            Education &amp; Learning
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Courses &amp; <span className="text-brand-red">Structured Learning</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            From high school classrooms to corporate boardrooms — our tiered course framework
            transforms African entrepreneurial knowledge into structured, scalable capability.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

      {/* Course Tiers */}
      {tiers.map((tier, idx) => (
        <section
          key={tier.number}
          className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-brand-cream' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block font-heading text-5xl font-bold text-brand-red/25 mb-2">
                {tier.number}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
                {tier.title}
              </h2>
              <p className="text-brand-gray-mid text-lg max-w-3xl">{tier.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tier.courses.map((course) => (
                <div
                  key={course.name}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-10 h-1 bg-brand-red rounded-full mb-6" />
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-3">
                    {course.name}
                  </h3>
                  <p className="text-brand-gray-mid text-sm leading-relaxed">{course.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Need a Tailored Programme?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Every institution, corporate, and community has unique needs. Contact us to discuss
            how we can design a programme that fits your context, audience, and objectives.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
          >
            Contact Us to Discuss
          </Link>
        </div>
      </section>
    </>
  );
}
