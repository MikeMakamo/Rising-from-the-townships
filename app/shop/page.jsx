import Image from 'next/image';

export const metadata = { title: 'Shop' };

const comboOffer = {
  title: 'Book + Workbook Combo',
  image: '/images/books/RFTT_Book_Mockup_8.jpg',
};

const merchandise = [
  {
    name: 'RFTT Merchandise',
    image: '/images/merchandise/RFTT_T Shirt_v3.jpg',
    details: 'T-shirts, caps, and branded movement items.',
  },
];

export default function ShopPage() {
  const featuredMerchandise = merchandise[0];
  const shopPlaceholderLink = '#';

  return (
    <>
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Shop
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Books, Workbooks <span className="text-brand-red">&amp; Merchandise</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
                Buy the RFTT book, request workbook bundles, and order branded merchandise from one
                place.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#featured-book"
                  className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-white text-xs font-bold uppercase tracking-wider hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  Book
                </a>
                <a
                  href="#combo-offer"
                  className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-white text-xs font-bold uppercase tracking-wider hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  Book + Workbook Combo
                </a>
                <a
                  href="#workbooks"
                  className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-white text-xs font-bold uppercase tracking-wider hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  Workbooks
                </a>
                <a
                  href="#merchandise"
                  className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-white text-xs font-bold uppercase tracking-wider hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  T-Shirt
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="relative w-[300px] aspect-[3/4]">
                <div className="absolute inset-0 rounded-[2rem] bg-brand-red/20 blur-3xl translate-x-4 translate-y-4" />
                <div className="relative h-full w-full drop-shadow-2xl">
                  <Image
                    src="/images/books/RFTT_front_hardcover.jpg"
                    alt="Rising from the Township front cover"
                    fill
                    className="object-contain"
                    sizes="300px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-white/5 mb-5">
                <Image
                  src="/images/books/RFTT_front_hardcover.jpg"
                  alt="RFTT flagship book"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 25vw"
                />
              </div>
              <p className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
                Quick Shop
              </p>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">Get the Book</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Start with the flagship RFTT publication.
              </p>
              <a
                href={shopPlaceholderLink}
                className="inline-flex px-5 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
              >
                Buy Book
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-white/5 mb-5">
                <Image
                  src={comboOffer.image}
                  alt={comboOffer.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 25vw"
                />
              </div>
              <p className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
                Quick Shop
              </p>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">Book + Workbook Combo</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                A stronger learning pack for programmes, classrooms, and cohorts.
              </p>
              <a
                href={shopPlaceholderLink}
                className="inline-flex px-5 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
              >
                Order Combo
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-white/5 mb-5">
                <Image
                  src="/images/workbooks/workbook-cover-1.png"
                  alt="RFTT workbooks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 25vw"
                />
              </div>
              <p className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
                Quick Shop
              </p>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">Workbooks</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Workbook-led learning tools built from entrepreneur stories.
              </p>
              <a
                href={shopPlaceholderLink}
                className="inline-flex px-5 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
              >
                Order Workbooks
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-white/5 mb-5">
                <Image
                  src={featuredMerchandise.image}
                  alt={featuredMerchandise.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 25vw"
                />
              </div>
              <p className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
                Quick Shop
              </p>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">RFTT Merchandise</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Wear the movement with branded RFTT items.
              </p>
              <a
                href={shopPlaceholderLink}
                className="inline-flex px-5 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
              >
                View Merchandise
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      </section>

    </>
  );
}
