'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

const recipientMap = {
  info: 'info@risingfromthetownship.co.za',
  bookings: 'rathu@risingfromthetownship.co.za',
};

export default function InquiryModalTrigger({
  label,
  className = '',
  modalTitle,
  modalDescription,
  subject = 'General Enquiry',
  recipient = 'info',
  defaultMessage = '',
  contextLabel,
  contextValue,
  submitLabel = 'Open Email Draft',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const initialForm = useMemo(
    () => ({
      name: '',
      email: '',
      phone: '',
      organisation: '',
      message: defaultMessage,
    }),
    [defaultMessage]
  );

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    setForm(initialForm);
    setSubmitted(false);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [initialForm, isOpen]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const recipientEmail = recipientMap[recipient] || recipient;
    const emailSubject = contextValue ? `${subject}: ${contextValue}` : subject;
    const emailBody = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Organisation: ${form.organisation || 'Not provided'}`,
      `Enquiry Type: ${subject}`,
      contextLabel && contextValue ? `${contextLabel}: ${contextValue}` : null,
      '',
      'Message:',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    setSubmitted(true);
  }

  const modal = isOpen ? (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
      aria-labelledby="inquiry-modal-title"
      onClick={() => setIsOpen(false)}
    >
      <div className="absolute inset-0 bg-brand-dark/75 backdrop-blur-sm" />

      <div
        className="relative z-[101] w-full max-w-2xl rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b border-gray-100 px-6 py-5 sm:px-8">
          <div>
            <p className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] mb-2">
              Quick Enquiry
            </p>
            <h2
              id="inquiry-modal-title"
              className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark"
            >
              {modalTitle || label}
            </h2>
            {modalDescription ? (
              <p className="text-brand-gray-mid text-sm sm:text-base leading-relaxed mt-3 max-w-xl">
                {modalDescription}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-brand-dark hover:bg-brand-cream transition-colors"
            aria-label="Close enquiry modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider">
              {subject}
            </span>
            {contextLabel && contextValue ? (
              <span className="px-4 py-2 rounded-full bg-brand-cream text-brand-dark text-xs font-bold uppercase tracking-wider">
                {contextLabel}: {contextValue}
              </span>
            ) : null}
          </div>

          {submitted ? (
            <div className="rounded-[1.5rem] border border-brand-red/10 bg-brand-red/5 p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-red/10 mb-5">
                <svg className="w-7 h-7 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-dark mb-3">
                Your email draft should open now
              </h3>
              <p className="text-brand-gray-mid leading-relaxed mb-6">
                We prefilled your enquiry in your default email app so you can review it and send it right away.
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-bold text-brand-dark mb-1.5">
                  Name <span className="text-brand-red">*</span>
                </label>
                <input
                  id="modal-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-cream/50 text-brand-dark placeholder-brand-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-bold text-brand-dark mb-1.5">
                    Email <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-cream/50 text-brand-dark placeholder-brand-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-sm font-bold text-brand-dark mb-1.5">
                    Phone
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-cream/50 text-brand-dark placeholder-brand-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors text-sm"
                    placeholder="+27 ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-organisation" className="block text-sm font-bold text-brand-dark mb-1.5">
                  Organisation
                </label>
                <input
                  id="modal-organisation"
                  name="organisation"
                  type="text"
                  value={form.organisation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-cream/50 text-brand-dark placeholder-brand-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors text-sm"
                  placeholder="School, company, institution or platform"
                />
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-sm font-bold text-brand-dark mb-1.5">
                  Message <span className="text-brand-red">*</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-cream/50 text-brand-dark placeholder-brand-gray-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors text-sm resize-none"
                  placeholder="Tell us what you need and who this is for..."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-brand-gray-mid text-xs leading-relaxed max-w-md">
                  When you submit, we will open your default email app with this enquiry prefilled so you can send it immediately.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-colors text-sm uppercase tracking-wider"
                >
                  {submitLabel}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {label}
      </button>
      {isMounted ? createPortal(modal, document.body) : null}
    </>
  );
}
