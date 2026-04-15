import Link from 'next/link';
import Image from 'next/image';
import InquiryModalTrigger from './InquiryModalTrigger';

export default function Footer() {
  return (
    <footer>
      {/* Newsletter Section - Red background */}
      <div className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3">
              Join our community and receive stories<br />
              that inspire purpose and progress.
            </h3>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-5 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white text-sm"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-brand-red font-bold rounded-full hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer - White background */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
              <Image
                src="/images/rftt-logo.png"
                alt="Rising from the Township"
                width={140}
                height={90}
                className="h-14 w-auto mb-4"
              />
              <p className="text-sm text-brand-gray-mid leading-relaxed">
                Celebrating determination, resilience, and success. Building stronger communities through inspiration and opportunity.
              </p>
            </div>

            {/* Nav columns */}
            {[
              {
                title: 'Explore',
                links: [
                  { href: '/about', label: 'About' },
                  { href: '/entrepreneurs', label: 'Entrepreneurs' },
                  { href: '/community', label: 'Community' },
                  { href: '/speakers', label: 'Speaking' },
                ],
              },
              {
                title: 'Shop',
                links: [
                  { href: '/shop', label: 'Books' },
                  { href: '/shop', label: 'Workbooks' },
                  { href: '/shop', label: 'Case Studies' },
                  { href: '/shop', label: 'Merchandise' },
                ],
              },
              {
                title: 'Learn',
                links: [
                  { href: '/learn', label: 'Articles' },
                  { href: '/learn', label: 'Podcasts' },
                  { href: '/courses', label: 'Courses' },
                  { href: '/partner', label: 'Partner With Us' },
                ],
              },
              {
                title: 'Contact',
                links: [
                  { kind: 'modal', label: 'Get In Touch' },
                  { href: 'tel:0100231815', label: '010 023 1815' },
                  { href: 'https://wa.me/27710481898', label: 'WhatsApp' },
                  { href: 'mailto:info@risingfromthetownship.co.za', label: 'Email Us' },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-sm uppercase tracking-wider text-brand-gray mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.kind === 'modal' ? (
                        <InquiryModalTrigger
                          label={link.label}
                          subject="General Enquiry"
                          recipient="info"
                          modalTitle="Start a Conversation with RFTT"
                          modalDescription="Share your enquiry here and we will route it to the right team."
                          defaultMessage="I would like to get in touch with RFTT."
                          className="text-sm text-brand-gray-mid hover:text-brand-red transition-colors"
                        />
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-brand-gray-mid hover:text-brand-red transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-gray-light">
              &copy; 2026 RISING FROM THE TOWNSHIP
            </p>
            <p className="text-xs text-brand-gray-light">
              PRIVACY POLICY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
