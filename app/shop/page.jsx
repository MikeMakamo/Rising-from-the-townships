import Link from 'next/link';
import Image from 'next/image';
import { bookStoreUrl, bookSynopsisDownloadUrl } from '../data/book';

export const metadata = { title: 'Shop' };

const books = [
  {
    title: 'Rising from the Township – Inspiring Stories of SA Entrepreneurs',
    authors: 'Dr Steven Zwane & Yamkela Khoza Tywakadi',
    image: '/images/books/RFTT_Book_Mockup_V7.jpg',
    spreadImage: '/images/books/RFTT_Book_Mockup_2_V7.jpg',
    summary:
      'The founding text of the RFTT movement. Real stories of South African entrepreneurs who built enterprises from township realities — structured into teachable, research-grounded case narratives.',
    note: 'Adopted by universities and youth development programmes nationally.',
    featured: true,
  },
  {
    title: 'Conquering the Poverty of the Mind',
    authors: 'Rita Zwane',
    image: null,
    summary:
      'A deeply personal and strategic account of overcoming mental barriers to enterprise. Rita Zwane shares how mindset transformation is the first act of entrepreneurship.',
    note: 'Essential reading for youth facilitators and personal development programmes.',
  },
  {
    title: 'After the Fires',
    authors: 'Nozipho Tshabalala',
    image: null,
    summary:
      "A powerful narrative of resilience, rebuilding, and reclaiming agency after devastation. Nozipho's story speaks to every entrepreneur who has had to start over.",
    note: 'Relevant for disaster recovery, resilience training, and community enterprise.',
  },
  {
    title: 'Business by Grace',
    authors: 'Zibusiso Mkhwanazi with Dr Steven Zwane',
    image: null,
    summary:
      'An exploration of faith-driven entrepreneurship and the intersection of purpose, calling, and commerce in the African context.',
    note: 'Ideal for faith-based organisations, enterprise development, and leadership curricula.',
  },
];

const workbookEntrepreneurs = [
  'Dr Steven Zwane',
  'Sheldon Tatchell',
  'Candice Thurston',
  'Ntuthuko Shezi',
  'Tebogo Phiri',
  'Themba Makamo',
  'Veronica Motloutsi',
  'Rita Zwane',
  'Nomso Kana',
  'Zibusiso Mkhwanazi',
  'Lekau Sehoana',
  'Nozipho Tshabalala',
];

const workbookFeatures = [
  'Case reflection tools',
  'Intention-to-action exercises',
  'Facilitator guidance',
  'Practical enterprise design worksheets',
];

const workbookAudiences = [
  'High schools',
  'Universities',
  'Youth development organisations',
  'Entrepreneurship facilitators',
  'Corporate enterprise development',
];

const caseStudies = [
  { title: 'VAYA Footwear', publisher: 'Harvard Publishing', year: '2025' },
  { title: 'Legends Barbershop', publisher: 'Ivey Publishing', year: '2025' },
  { title: 'Busy Corner Family Business', publisher: 'Ivey Publishing', year: '2024' },
  { title: "Pandemic's Impact on YLED", publisher: 'Ivey Publishing', year: '2024' },
  { title: 'Zibusiso Mkhwanazi Case Study', publisher: 'Ivey Publishing', year: '2024' },
  { title: 'Drip Footwear Brand', publisher: 'Emerald Emerging Markets Case Studies', year: '2022' },
  { title: 'An Imbizo at the Busy Corner', publisher: 'Emerald Emerging Markets Case Studies', year: '2019' },
];

const merchandise = [
  {
    name: 'RFTT T-Shirts',
    price: 'R450',
    image: '/images/merchandise/RFTT_T Shirt_v3.jpg',
    details: 'Available in S, M, L, XL. Custom option: "Write Your Own Township".',
  },
  {
    name: 'RFTT Caps',
    price: 'R200 – R300',
    image: '/images/merchandise/RFTT_Cap.jpg',
    details: 'Branded caps representing the RFTT movement.',
  },
  {
    name: 'RFTT Book – Collector\u2019s Edition',
    price: 'R350',
    image: '/images/books/RFTT_Book_Mockup_10.jpg',
    details: 'The flagship RFTT publication — perfect as a gift or desk companion. Hardcover with spine detail.',
  },
];

export default function ShopPage() {
  const featuredBook = books[0];
  const otherBooks = books.slice(1);

  return (
    <>
      {/* Hero Section — 2-column with book mockup */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Knowledge You Can Own. Tools You Can Use.
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                The RFTT <span className="text-brand-red">Shop</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Structured, curated African entrepreneurship knowledge products &mdash; books,
                workbooks, case studies, teaching guides, and merchandise built from real stories and
                rigorous research.
              </p>
            </div>

            {/* Right — Book Cover Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[280px] sm:w-[340px] lg:w-[400px] aspect-[3/4]">
                <div className="absolute inset-0 rounded-2xl bg-brand-red/20 blur-3xl translate-x-4 translate-y-4" />
                <div className="relative w-full h-full drop-shadow-2xl hover:-rotate-1 hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/images/books/RFTT_front_hardcover.jpg"
                    alt="Rising from the Township — Front Cover"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

      {/* Books Section */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">Publications</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark">
              Books
            </h2>
          </div>

          {/* Featured Book — Full-width card */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Book Spread Image */}
                <div className="relative w-full h-80 sm:h-96 lg:h-auto min-h-[400px] bg-brand-dark/5">
                  <Image
                    src={featuredBook.spreadImage}
                    alt={`${featuredBook.title} — Open book spread`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-4 py-1.5 bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                      Flagship Publication
                    </span>
                  </div>
                </div>

                {/* Featured Book Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-md hidden sm:block">
                      <Image
                        src={featuredBook.image}
                        alt={featuredBook.title}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl lg:text-3xl font-bold text-brand-dark mb-1">
                        {featuredBook.title}
                      </h3>
                      <p className="text-brand-red text-sm font-bold">{featuredBook.authors}</p>
                    </div>
                  </div>
                  <p className="text-brand-gray-mid text-base leading-relaxed mb-3">
                    {featuredBook.summary}
                  </p>
                  <p className="text-sm text-brand-gray-mid italic mb-6">{featuredBook.note}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={bookStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
                    >
                      Get The Book
                    </a>
                    <a
                      href={bookSynopsisDownloadUrl}
                      download
                      className="px-8 py-3 border border-brand-dark text-brand-dark font-bold rounded-full hover:bg-brand-dark hover:text-white transition-colors text-sm uppercase tracking-wider"
                    >
                      Download Synopsis
                    </a>
                    <Link
                      href="/entrepreneurs"
                      className="text-brand-red text-sm font-bold hover:underline"
                    >
                      Author Profile &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Books — Standard cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherBooks.map((book) => (
              <div
                key={book.title}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Book Cover */}
                <div className="relative w-full h-56 flex-shrink-0 bg-brand-dark/5">
                  {book.image ? (
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/5">
                      <span className="font-heading text-brand-red/40 text-6xl font-bold">
                        RFTT
                      </span>
                    </div>
                  )}
                </div>

                {/* Book Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-1">
                    {book.title}
                  </h3>
                  <p className="text-brand-red text-sm font-bold mb-3">{book.authors}</p>
                  <p className="text-brand-gray-mid text-sm leading-relaxed mb-3">{book.summary}</p>
                  <p className="text-xs text-brand-gray-mid italic mb-4">{book.note}</p>
                  <div className="mt-auto flex items-center gap-3">
                    <button className="px-6 py-2.5 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm">
                      Add to Cart
                    </button>
                    <Link
                      href="/entrepreneurs"
                      className="text-brand-red text-sm font-bold hover:underline"
                    >
                      Author Profile &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Book Banner — Red */}
      <section className="py-20 lg:py-24 bg-brand-red overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Stacked Books Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-[320px] sm:w-[400px] lg:w-[480px] aspect-[4/3]">
                <div className="absolute inset-0 rounded-2xl bg-black/10 blur-2xl translate-x-3 translate-y-3" />
                <div className="relative w-full h-full drop-shadow-2xl">
                  <Image
                    src="/images/books/RFTT_Book_Mockup_8.jpg"
                    alt="Stacked RFTT books"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 480px"
                  />
                </div>
              </div>
            </div>

            {/* Text — all white on red */}
            <div className="order-1 lg:order-2">
              <p className="text-white/80 font-bold text-sm uppercase tracking-[0.2em] mb-4">
                The Book That Started It All
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                The founding text of the RFTT movement
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Available in print and ebook formats. Real stories. Real entrepreneurs. Real lessons
                from the townships of South Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={bookStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-brand-red font-bold rounded-full hover:bg-brand-cream transition-colors text-sm uppercase tracking-wider shadow-lg"
                >
                  Order Now
                </a>
                <a
                  href={bookSynopsisDownloadUrl}
                  download
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
                >
                  Download Synopsis
                </a>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workbooks & Teaching Guides */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              Learning Tools
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Informed Entrepreneurship Workbooks{' '}
              <span className="text-brand-red">(1st Edition)</span> &amp; Teaching Guides
            </h2>
            <p className="text-brand-gray-mid text-lg max-w-2xl mx-auto">
              Structured companion workbooks and facilitator guides for each featured entrepreneur
              &mdash; built for active, case-based learning.
            </p>
          </div>

          {/* Entrepreneur grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {workbookEntrepreneurs.map((name) => (
              <div
                key={name}
                className="bg-brand-cream rounded-xl p-4 text-center border border-gray-100 hover:shadow-md transition-shadow"
              >
                <p className="font-bold text-sm text-brand-dark">{name}</p>
                <p className="text-xs text-brand-red mt-1">Workbook + Guide</p>
              </div>
            ))}
          </div>

          {/* What each includes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-heading text-xl font-bold mb-4">Each Workbook Includes</h3>
              <ul className="space-y-3">
                {workbookFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-brand-gray-mid">
                    <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-heading text-xl font-bold mb-4">Designed For</h3>
              <ul className="space-y-3">
                {workbookAudiences.map((audience) => (
                  <li key={audience} className="flex items-center gap-3 text-sm text-brand-gray-mid">
                    <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider">
              Browse All Workbooks
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              Academic Publishing
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Published Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-red/40 transition-colors"
              >
                <span className="inline-block text-brand-red font-bold text-xs uppercase tracking-wider mb-3">
                  {cs.publisher}
                </span>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{cs.title}</h3>
                <p className="text-gray-400 text-sm">{cs.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchandise */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              Wear the Movement
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark">
              Merchandise
            </h2>
            <p className="text-brand-gray-mid text-lg mt-4 max-w-xl mx-auto">
              More than apparel &mdash; RFTT merchandise reinforces identity, belonging, and
              movement culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {merchandise.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-72 bg-brand-dark/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-1">
                    {item.name}
                  </h3>
                  <p className="text-brand-red font-bold text-lg mb-2">{item.price}</p>
                  <p className="text-brand-gray-mid text-sm mb-4">{item.details}</p>
                  <button className="px-6 py-2.5 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
              Coming Soon
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Upcoming Events
            </h2>
            <p className="text-brand-gray-mid text-lg max-w-2xl mx-auto">
              Event tickets available when active.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {['Masterclasses', 'Dialogues', 'Book Launches', 'Youth Sessions', 'YED'].map(
              (event) => (
                <div
                  key={event}
                  className="bg-brand-cream rounded-xl p-6 text-center border border-gray-100"
                >
                  <span className="inline-block w-10 h-10 rounded-full bg-brand-red/20 mb-3" />
                  <p className="font-heading font-bold text-sm text-brand-dark">{event}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Invest in <span className="text-brand-red">African Knowledge.</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Every purchase supports the creation, structuring, and distribution of African
            entrepreneurship knowledge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partner"
              className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
            >
              Partner With Us
            </Link>
            <Link
              href="/learn"
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
            >
              Explore Learning
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
