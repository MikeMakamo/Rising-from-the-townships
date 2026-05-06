import ContactPageClient from './ContactPageClient';

export default async function ContactPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const requestedEntrepreneur = resolvedSearchParams?.entrepreneur || '';
  const requestedCompany = resolvedSearchParams?.company || '';
  const requestedSubject =
    resolvedSearchParams?.subject ||
    (requestedEntrepreneur ? 'Book an Entrepreneur' : '');

  return (
    <ContactPageClient
      requestedEntrepreneur={requestedEntrepreneur}
      requestedCompany={requestedCompany}
      requestedSubject={requestedSubject}
    />
  );
}
