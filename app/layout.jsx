import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: {
    default: 'Rising from the Township (RFTT) | Where Lived Experience Becomes Structured Knowledge',
    template: '%s | RFTT',
  },
  description:
    'RFTT transforms African entrepreneurial journeys into strategy, systems, and scalable learning frameworks for institutions, corporates, and government.',
  keywords: [
    'African entrepreneurship case studies',
    'township business workbooks',
    'youth entrepreneurship South Africa',
    'entrepreneurship education',
    'township enterprise development',
    'Dr Steven Zwane',
    'RFTT',
  ],
  openGraph: {
    title: 'Rising from the Township (RFTT)',
    description:
      'Where Lived Experience Becomes Structured Knowledge. Transforming African entrepreneurial journeys into strategy, systems, and scalable learning frameworks.',
    siteName: 'RFTT',
    locale: 'en_ZA',
    type: 'website',
  },
  icons: {
    icon: '/images/rftt-logo.png',
    shortcut: '/images/rftt-logo.png',
    apple: '/images/rftt-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
