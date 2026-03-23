import Link from 'next/link';

export const metadata = {
  title: 'Community',
};

const ecosystemNodes = [
  {
    name: 'YLED',
    full: 'Youth-Led Enterprise Development',
    desc: 'A flagship initiative driving structured youth entrepreneurship across South Africa.',
  },
  {
    name: 'GIBS',
    full: 'Gordon Institute of Business Science',
    desc: 'Academic partnership bringing rigour and institutional credibility to entrepreneurship education.',
  },
  {
    name: 'NWU',
    full: 'North-West University',
    desc: 'Collaborative research and curriculum development for African-centred entrepreneurship.',
  },
  {
    name: 'TWIMS',
    full: 'Township Wisdom & Strategy',
    desc: 'Bridging township-born enterprise knowledge with formal business strategy frameworks.',
  },
];

const initiatives = [
  {
    title: 'Dialogue Forums',
    desc: 'Structured conversations that bring together entrepreneurs, academics, corporates, and policy actors around pressing ecosystem challenges.',
  },
  {
    title: 'Youth Entrepreneurship Dialogue (YED)',
    desc: 'A dedicated platform where young entrepreneurs engage with mentors, funders, and peers in facilitated strategic dialogue.',
  },
  {
    title: 'Book Donation Drives',
    desc: 'Distributing entrepreneurship books, case studies, and workbooks to under-resourced schools and community libraries.',
  },
  {
    title: 'Educator Roundtables',
    desc: 'Bringing educators together to share best practices, challenges, and innovations in teaching African entrepreneurship.',
  },
  {
    title: 'Entrepreneur Mentoring Circles',
    desc: 'Peer-to-peer and expert-guided mentoring structures that sustain entrepreneurs beyond the inspiration stage.',
  },
];

export default function CommunityPage() {
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
            Ecosystem &amp; Collaboration
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Knowledge You <span className="text-brand-red">Belong To.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            RFTT is not just content — it is an ecosystem. A structured space of collaboration
            between entrepreneurs, universities, corporates, policy actors, and youth development
            organisations working toward a shared vision for African entrepreneurship.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

      {/* Key Ecosystem Nodes */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              Key Ecosystem Nodes
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark">
              Our Strategic Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemNodes.map((node) => (
              <div
                key={node.name}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center"
              >
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-dark text-brand-red font-heading font-bold text-xl mb-4">
                  {node.name.charAt(0)}
                </span>
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-1">
                  {node.name}
                </h3>
                <p className="text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
                  {node.full}
                </p>
                <p className="text-brand-gray-mid text-sm leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              What We Do Together
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark">
              Community Initiatives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item, idx) => (
              <div
                key={item.title}
                className="bg-brand-cream rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <span className="inline-block font-heading text-4xl font-bold text-brand-red/25 mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-lg font-bold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Be Part of the Ecosystem
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you are an entrepreneur, educator, corporate partner, or policy maker —
            there is a place for you in the RFTT community.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
          >
            Join the Community
          </Link>
        </div>
      </section>
    </>
  );
}
