import Image from 'next/image';
import InquiryModalTrigger from '../components/InquiryModalTrigger';

export const metadata = {
  title: 'Community',
};

const communityHighlights = [
  {
    title: 'Workshops & Masterclasses',
    blurb: 'Spaces where strategy, lived experience and entrepreneurship learning meet in the same room.',
    image: '/images/community/community-workshop-wide.jpg',
    alt: 'Participants gathered for an RFTT workshop session.',
  },
  {
    title: 'Youth Reachouts',
    blurb: 'Book activations, youth sessions and real moments where entrepreneurship lands with the next generation.',
    image: '/images/community/community-book-giveaway.jpg',
    alt: 'Young people holding Rising from the Township books at a community outreach.',
  },
  {
    title: 'Ecosystem Conversations',
    blurb: 'Founders, educators, institutions and collaborators building the future of African entrepreneurship together.',
    image: '/images/community/community-conversation.jpg',
    alt: 'RFTT participants standing together after an ecosystem conversation.',
  },
];

const galleryMoments = [
  {
    title: 'A community in one room',
    image: '/images/community/community-group.jpg',
    alt: 'Large RFTT group photo after a session.',
    wrapperClass: 'md:col-span-2',
    heightClass: 'min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]',
  },
  {
    title: 'Dialogue in session',
    image: '/images/community/community-dialogue-room.jpg',
    alt: 'Dr Zwane facilitating dialogue in a lecture room.',
    wrapperClass: '',
    heightClass: 'min-h-[320px] lg:min-h-[520px]',
  },
  {
    title: 'Speaker moments',
    image: '/images/community/community-dr-zwane-stage.jpg',
    alt: 'Dr Zwane presenting at an RFTT community session.',
    wrapperClass: '',
    heightClass: 'min-h-[320px]',
  },
  {
    title: 'Books in young hands',
    image: '/images/community/community-book-giveaway.jpg',
    alt: 'Community members holding Rising from the Township books.',
    wrapperClass: '',
    heightClass: 'min-h-[320px]',
  },
  {
    title: 'Shared sessions, shared learning',
    image: '/images/community/community-speaker-moment.jpg',
    alt: 'A speaker addressing the RFTT community during a session.',
    wrapperClass: '',
    heightClass: 'min-h-[320px]',
  },
  {
    title: 'YLED youth activation',
    image: '/images/community/community-yled-group.jpg',
    alt: 'A youth group gathered at a Rising from the Township and YLED activation.',
    wrapperClass: 'md:col-span-2',
    heightClass: 'min-h-[320px] sm:min-h-[420px]',
  },
];

const communityArchivePhotos = [
  {
    image: '/images/community/community-yamkela-feature.jpg',
    alt: 'Community portrait moment from a Rising from the Township activation.',
  },
  {
    image: '/images/community/community-zibusiso-feature.jpg',
    alt: 'Community portrait moment featuring a Rising from the Township participant.',
  },
  {
    image: '/images/community/community-panel-collaborators.jpg',
    alt: 'Community collaborators gathered at an RFTT event.',
  },
  {
    image: '/images/community/community-book-closeup.jpg',
    alt: 'Rising from the Township books displayed at an RFTT session.',
  },
  {
    image: '/images/community/community-campus-small.jpg',
    alt: 'Smaller campus community moment captured at an RFTT initiative.',
  },
  {
    image: '/images/community/community-campus-portrait.jpg',
    alt: 'Campus portrait from an RFTT community activation.',
  },
  {
    image: '/images/community/community-nwu-talk.jpg',
    alt: 'Speaker moment from a North-West University RFTT session.',
  },
  {
    image: '/images/community/community-encounter-session.jpg',
    alt: 'Encounter session moment from a Rising from the Township workshop.',
  },
  {
    image: '/images/community/community-published-cases.jpg',
    alt: 'Dr Zwane speaking in front of published case study slides.',
  },
  {
    image: '/images/community/community-heic-01.jpg',
    alt: 'Additional community photo from a Rising from the Township initiative.',
  },
  {
    image: '/images/community/community-heic-02.jpg',
    alt: 'Additional community photo captured during an RFTT event.',
  },
  {
    image: '/images/community/community-heic-03.jpg',
    alt: 'Additional community moment from a Rising from the Township outreach.',
  },
  {
    image: '/images/community/community-whatsapp-01.jpg',
    alt: 'Community photo shared from a Rising from the Township activation.',
  },
  {
    image: '/images/community/community-whatsapp-02.jpg',
    alt: 'Additional workshop community photo from Rising from the Township.',
  },
  {
    image: '/images/community/community-whatsapp-03.jpg',
    alt: 'Additional outreach moment from the RFTT community.',
  },
  {
    image: '/images/community/community-whatsapp-04.jpg',
    alt: 'Additional participant moment from a Rising from the Township event.',
  },
  {
    image: '/images/community/community-whatsapp-05.jpg',
    alt: 'Additional candid community moment from an RFTT initiative.',
  },
];

const communityTouchpoints = [
  'YLED',
  'GIBS',
  'NWU',
  'Youth activations',
  'Township outreach',
  'Book conversations',
  'Campus sessions',
];

export default function CommunityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,31,36,0.25),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              Community In Action
            </p>
            <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Rising from the Township is not just a platform. It is a{' '}
              <span className="text-brand-red">community you can see.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Workshops, youth activations, book conversations, campus encounters and ecosystem
              moments that show how RFTT lives beyond the page.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Workshops', 'Youth Reachouts', 'Book Giveaways', 'Community Dialogue'].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/85"
                  >
                    {label}
                  </span>
                )
              )}
            </div>
            <div className="mt-10">
              <InquiryModalTrigger
                label="Join the Community"
                subject="Community Enquiry"
                recipient="info"
                modalTitle="Join the RFTT Community"
                modalDescription="Tell us how you would like to participate in the RFTT community as an entrepreneur, educator, institution, or supporter."
                defaultMessage="I would like to join the RFTT community and learn more about upcoming programmes, workshops, activations, and collaboration opportunities."
                className="inline-flex items-center rounded-full bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark"
              />
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 shadow-2xl">
              <Image
                src="/images/community/community-group.jpg"
                alt="Group photo from an RFTT community session."
                width={1800}
                height={1200}
                className="h-full min-h-[340px] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 56vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-light">
                  Shared Space
                </p>
                <p className="mt-2 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                  Entrepreneurs, students, educators and collaborators gathered around one
                  conversation.
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Book giveaway moments',
                  image: '/images/community/community-book-giveaway.jpg',
                  alt: 'People holding Rising from the Township books during an outreach.',
                },
                {
                  title: 'Live ecosystem conversations',
                  image: '/images/community/community-conversation.jpg',
                  alt: 'RFTT ecosystem collaborators together at a community event.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1400}
                    height={1400}
                    className="h-56 w-full object-cover"
                    sizes="(max-width: 640px) 100vw, 28vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              What This Community Looks Like
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
              Not a concept. Real rooms, real people, real reach.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {communityHighlights.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_45px_rgba(17,24,39,0.08)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1800}
                  height={1200}
                  className="h-64 w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-brand-dark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray-mid">{item.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Gallery
              </p>
              <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
                The RFTT community across workshops, outreach and campus moments
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-brand-gray-mid sm:text-base">
              A visual snapshot of the people, energy and shared learning spaces that continue to
              grow the RFTT movement.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryMoments.map((item) => (
              <article
                key={item.title}
                className={`group overflow-hidden rounded-[28px] bg-brand-dark/95 ${item.wrapperClass}`}
              >
                <div className={`relative ${item.heightClass}`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="font-heading text-xl font-bold text-white">{item.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-brand-dark py-14">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-brand-red">
            Community Touchpoints
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {communityTouchpoints.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75 sm:text-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
              More Community Moments
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
              The rest of the story lives in the people, the rooms and the reach.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {communityArchivePhotos.map((item, index) => (
              <div
                key={item.image}
                className={`group relative overflow-hidden rounded-[22px] bg-brand-dark shadow-lg ${
                  index % 7 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Want to build with the RFTT community?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/72">
            Whether you are hosting a workshop, opening a youth space, building a dialogue, or
            creating an institutional activation, there is room to do it together.
          </p>
          <div className="mt-10">
            <InquiryModalTrigger
              label="Start a Community Conversation"
              subject="Community Enquiry"
              recipient="info"
              modalTitle="Start a Community Conversation"
              modalDescription="Share the kind of community activation, outreach, session, or collaboration you want to explore with RFTT."
              defaultMessage="I would like to explore a community-centred collaboration or activation with Rising from the Township."
              className="inline-flex items-center rounded-full bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark"
            />
          </div>
        </div>
      </section>
    </>
  );
}
