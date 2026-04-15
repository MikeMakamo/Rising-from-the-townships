import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  entrepreneurs,
  getBookingHref,
  getEntrepreneurBySlug,
  getInitials,
} from '../data';

export const dynamicParams = false;

export function generateStaticParams() {
  return entrepreneurs.map((entrepreneur) => ({
    slug: entrepreneur.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entrepreneur = getEntrepreneurBySlug(slug);

  if (!entrepreneur) {
    return {};
  }

  return {
    title: `${entrepreneur.name} Entrepreneur Profile`,
    description: entrepreneur.summary,
    openGraph: {
      title: `${entrepreneur.name} | Featured Entrepreneur`,
      description: entrepreneur.summary,
    },
  };
}

function ExternalLinkButton({ href, children }) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-brand-dark/15 text-brand-dark text-sm font-bold hover:bg-brand-dark hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

export default async function EntrepreneurProfilePage({ params }) {
  const { slug } = await params;
  const entrepreneur = getEntrepreneurBySlug(slug);

  if (!entrepreneur) {
    notFound();
  }

  const relatedEntrepreneurs = entrepreneurs
    .filter((profile) => profile.slug !== entrepreneur.slug)
    .slice(0, 3);

  return (
    <>
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/entrepreneurs"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white transition-colors mb-10"
          >
            <span aria-hidden="true">&larr;</span>
            Back to entrepreneurs
          </Link>

          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_420px] gap-10 lg:gap-14 items-end">
            <div className="max-w-3xl">
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Featured Entrepreneur
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {entrepreneur.name}
              </h1>
              <p className="text-brand-red text-lg sm:text-xl font-bold mb-6">
                {entrepreneur.title}, {entrepreneur.company}
              </p>
              <p className="text-xl text-gray-200 leading-relaxed mb-5">
                {entrepreneur.summary}
              </p>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                This profile is part of the RFTT entrepreneur archive, where lived
                entrepreneurial journeys are translated into structured insight for
                institutions, educators, and ecosystem partners.
              </p>
            </div>

            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-cream/5 border border-white/10">
              {entrepreneur.image ? (
                <Image
                  src={entrepreneur.image}
                  alt={entrepreneur.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-dark">
                  <span className="font-heading text-7xl font-bold text-brand-red/40">
                    {entrepreneur.initials || getInitials(entrepreneur.name)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1.2fr)_380px] gap-10 lg:gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-gray-100">
                <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                  Mini Bio
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
                  Entrepreneur Details
                </h2>
                <p className="text-brand-gray-mid text-base sm:text-lg leading-relaxed">
                  {entrepreneur.bio}
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-gray-100">
                <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                  Connect
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
                  Profile Links
                </h2>
                <div className="flex flex-wrap gap-3">
                  <ExternalLinkButton href={entrepreneur.linkedIn}>
                    View LinkedIn
                  </ExternalLinkButton>
                  <ExternalLinkButton href={entrepreneur.website}>
                    Visit Website
                  </ExternalLinkButton>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="bg-brand-dark rounded-[2rem] p-8 sm:p-10 text-white shadow-2xl">
                <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-4">
                  Booking Request
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">
                  Invite {entrepreneur.name}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Use this profile to brief your team, then send a booking request with
                  {` ${entrepreneur.name} `}already selected in the contact form.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-sm text-gray-300">
                    Suitable for keynotes, moderated conversations, classroom sessions,
                    founder talks, strategy workshops, and panel discussions.
                  </p>
                  <p className="text-sm text-gray-400">
                    Our team will confirm availability, format, and engagement fit once
                    the request is received.
                  </p>
                </div>
                <Link
                  href={getBookingHref(entrepreneur)}
                  className="block w-full text-center px-6 py-4 rounded-full bg-brand-red text-white font-bold hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider mb-4"
                >
                  Request Booking
                </Link>
                <a
                  href="mailto:rathu@risingfromthetownship.co.za"
                  className="block w-full text-center px-6 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors text-sm uppercase tracking-wider mb-3"
                >
                  Email Bookings
                </a>
                <a
                  href="https://wa.me/27710481898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-brand-red font-bold text-sm uppercase tracking-[0.2em] mb-3">
                More Profiles
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark">
                Continue Exploring Entrepreneurs
              </h2>
            </div>
            <Link
              href="/entrepreneurs"
              className="text-brand-red font-bold text-sm uppercase tracking-wider hover:text-brand-red-dark transition-colors"
            >
              View all profiles
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedEntrepreneurs.map((profile) => (
              <Link
                key={profile.slug}
                href={`/entrepreneurs/${profile.slug}`}
                className="group rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-sm card-hover"
              >
                <div className="relative aspect-[4/5] bg-brand-dark">
                  {profile.image ? (
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-heading text-6xl font-bold text-brand-red/40">
                        {profile.initials || getInitials(profile.name)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-brand-dark text-lg mb-1">{profile.name}</h3>
                  <p className="text-brand-red text-sm font-bold mb-3">
                    {profile.title}, {profile.company}
                  </p>
                  <p className="text-brand-gray-mid text-sm leading-relaxed">
                    {profile.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
