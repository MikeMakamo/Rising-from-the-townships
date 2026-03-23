import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'Learn' };

const articles = [
  {
    title:
      "Shaka iLembe Isn\u2019t Just Entertainment \u2014 It\u2019s a Bold Reclaiming of Heritage and Enterprise",
    topic: 'Heritage & Enterprise',
  },
  {
    title: "Aim High Matrics \u2014 and Claim What\u2019s Yours",
    topic: 'Youth Development',
  },
  {
    title: "Proper Entrepreneurship Education Is SA\u2019s Missing Link",
    topic: 'Education Policy',
  },
];

const podcasts = [
  {
    show: 'Kasi Business Podcast',
    title:
      'Championing Youth Leadership and Entrepreneurship Development with Dr. Steven Zwane',
    guest: 'Dr Steven Zwane',
  },
  {
    show: 'SuperLead Advisory',
    title:
      'Dr Steven Zwane on scaling youth employability and entrepreneurship | Episode 141',
    guest: 'Dr Steven Zwane',
  },
  {
    show: 'Unfiltered with Aubrey Masango',
    title:
      'Dr Steven Zwane: The Story Behind the Glory | Small Wins = Big Outcomes',
    guest: 'Dr Steven Zwane',
  },
  {
    show: 'The Conversation Capital',
    title:
      'Dr Steven Zwane Believing in Yourself Matters Way More Than Your Degree',
    guest: 'Dr Steven Zwane',
  },
  {
    show: 'Kasi Business Podcast',
    title: 'Pioneering the Shisanyama Industry with Rita Zwane',
    guest: 'Rita Zwane',
  },
];

export default function LearnPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-brand-dark overflow-hidden">
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
          <div className="max-w-3xl">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Knowledge You Can Engage With.
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Learn
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Thought leadership, opinion pieces, podcast features, and media appearances
              &mdash; where structured knowledge meets national discourse.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

      {/* Opinion & Thought Leadership */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              Opinion &amp; Thought Leadership
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Shaping the <span className="text-brand-red">Conversation</span>
            </h2>
            <p className="text-brand-gray-mid text-lg leading-relaxed">
              Dr Steven Zwane contributes actively to national discourse on entrepreneurship,
              youth development, leadership, and policy &mdash; bridging academia and society as a
              public intellectual voice influencing how South Africa thinks about enterprise and
              education.
            </p>
          </div>

          {/* Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {articles.map((article) => (
              <div
                key={article.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
              >
                <span className="inline-block text-brand-red font-bold text-xs uppercase tracking-wider mb-4">
                  {article.topic}
                </span>
                <h3 className="font-heading text-lg font-bold text-brand-dark leading-snug mb-4 flex-1">
                  {article.title}
                </h3>
                <p className="text-brand-gray-mid text-sm">By Dr Steven Zwane</p>
              </div>
            ))}
          </div>

          {/* Positioning */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              'Public intellectual platform',
              'Policy-influencing voice',
              'Bridge between academia and society',
            ].map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100"
              >
                <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                <p className="text-sm font-bold text-brand-dark">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Feature */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <Image
                src="/images/books/RFTT_Book_Mockup_2_V7.jpg"
                alt="Rising from the Township open book spread"
                width={700}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
                The Book
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
                Read the Full Stories
              </h2>
              <p className="text-brand-gray-mid text-lg leading-relaxed mb-4">
                Rising from the Township is more than a collection of profiles &mdash; it is a
                structured knowledge resource that captures the entrepreneurial journeys of
                township founders in teachable, research-informed case narratives.
              </p>
              <p className="text-brand-gray-mid text-base leading-relaxed mb-8">
                Each chapter brings together lived experience, strategic insight, and
                structured learning &mdash; designed for classrooms, boardrooms, and anyone
                seeking to understand enterprise from the ground up.
              </p>
              <Link
                href="/shop"
                className="inline-block px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Features & Media */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              Podcast Features &amp; Media
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark">
              Heard Across <span className="text-brand-red">Platforms</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast, i) => (
              <div
                key={`${podcast.show}-${i}`}
                className="bg-brand-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Podcast icon */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-red/20">
                    <svg
                      className="w-5 h-5 text-brand-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </span>
                  <span className="text-brand-red font-bold text-xs uppercase tracking-wider">
                    {podcast.show}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-brand-dark leading-snug mb-3 flex-1">
                  {podcast.title}
                </h3>
                <p className="text-brand-gray-mid text-sm">Featuring {podcast.guest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Courses */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Go <span className="text-brand-red">Deeper?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Explore structured courses, masterclasses, and learning pathways built on real African
            entrepreneurship case studies.
          </p>
          <Link
            href="/courses"
            className="inline-block px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
          >
            Explore Courses
          </Link>
        </div>
      </section>
    </>
  );
}
