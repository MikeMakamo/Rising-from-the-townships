import Link from 'next/link';

import PodcastShowcase from './PodcastShowcase';
import { articleItems, featuredBookResource, podcastItems } from './content';

export const metadata = { title: 'Learn' };

const insightPoints = [
  'Public-facing entrepreneurship thought leadership',
  'Case-driven learning grounded in South African realities',
  'Media, podcasts, and commentary with institutional relevance',
];

const featuredArticle = articleItems[0];
const supportingArticles = articleItems.slice(1);

export default function LearnPage() {
  return (
    <>
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
          <div className="max-w-4xl">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Knowledge You Can Engage With
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Articles, media, and conversations shaping how entrepreneurship is understood.
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              The Learn platform brings together published opinion, podcast conversations, and
              book-based knowledge resources that connect township enterprise to national
              discourse, education, and institutional action.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.18em] mb-2">
              Opinion &amp; Thought Leadership
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Published writing with a wider public life
            </h2>
            <p className="text-brand-gray-mid text-lg leading-relaxed">
              These articles are credited to their original publishers and presented here as a
              curated reading stream. Each card opens the original source in a new tab so readers
              can continue directly on the publication site.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] gap-8 items-start">
            <a
              href={featuredArticle.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-brand-dark">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.18em] font-bold mb-4">
                  <span className="text-brand-red">{featuredArticle.source}</span>
                  <span className="text-brand-gray-light">{featuredArticle.published}</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark leading-tight mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-brand-gray-mid text-base leading-relaxed mb-6">
                  By {featuredArticle.author}. Read the full article on the original publication.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-dark group-hover:text-brand-red transition-colors">
                  Read on {featuredArticle.source}
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>

            <div className="space-y-4">
              {supportingArticles.slice(0, 6).map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[112px_minmax(0,1fr)] gap-4 bg-white rounded-[1.5rem] border border-gray-200 overflow-hidden hover:border-brand-red/40 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)] transition-all"
                >
                  <div className="bg-brand-dark">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="py-4 pr-4">
                    <p className="text-brand-red font-bold text-[11px] uppercase tracking-[0.18em] mb-2">
                      {article.published}
                    </p>
                    <h3 className="font-heading text-lg font-bold text-brand-dark leading-snug mb-2 group-hover:text-brand-red transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-brand-gray-mid">
                      {article.source} · {article.author}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {insightPoints.map((point) => (
              <div
                key={point}
                className="bg-white border border-gray-200 rounded-[1.25rem] px-5 py-5 flex items-start gap-3"
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-brand-red flex-shrink-0" />
                <p className="text-sm font-bold text-brand-dark">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportingArticles.slice(6).map((article) => (
              <a
                key={article.href}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[1.75rem] border border-gray-200 overflow-hidden hover:border-brand-red/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all"
              >
                <div className="aspect-[4/3] bg-brand-dark overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.18em] font-bold mb-3">
                    <span className="text-brand-red">{article.source}</span>
                    <span className="text-brand-gray-light">{article.published}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-dark leading-snug mb-3 group-hover:text-brand-red transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-brand-gray-mid">By {article.author}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
            <div className="bg-brand-cream rounded-[2rem] p-6 sm:p-8 border border-gray-200 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-white">
                <img
                  src={featuredBookResource.image}
                  alt={featuredBookResource.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.18em] mb-2">
                Featured Resource
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
                {featuredBookResource.title}
              </h2>
              <p className="text-brand-gray-mid text-lg leading-relaxed mb-4">
                The book sits at the centre of the wider RFTT knowledge platform: stories,
                interviews, frameworks, and entrepreneurial lessons gathered into a resource that
                can travel into classrooms, reading circles, institutions, and public dialogue.
              </p>
              <p className="text-brand-gray-mid text-base leading-relaxed mb-8">
                Written by {featuredBookResource.author} and published through{' '}
                {featuredBookResource.source}, it anchors the case-based learning approach behind
                the wider platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={featuredBookResource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-[0.18em]"
                >
                  View Book
                </a>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 border border-brand-dark text-brand-dark font-bold rounded-full hover:bg-brand-dark hover:text-white transition-colors text-sm uppercase tracking-[0.18em]"
                >
                  Explore Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-brand-red font-bold text-sm uppercase tracking-[0.18em] mb-2">
              Podcast Features &amp; Video Conversations
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Watch the conversations on site
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              These YouTube conversations now play directly inside the site. Visitors can switch
              between interviews, book discussions, and entrepreneurship reflections without being
              pushed away from the RFTT experience.
            </p>
          </div>

          <PodcastShowcase podcasts={podcastItems} />
        </div>
      </section>
    </>
  );
}
