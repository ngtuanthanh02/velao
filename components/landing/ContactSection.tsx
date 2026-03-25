"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/landing/Reveal";

export function ContactSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  function openModal() {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsMounted(true);
    requestAnimationFrame(() => setIsOpen(true));

    closeTimerRef.current = window.setTimeout(() => {
      closeModal();
    }, 10000);
  }

  function closeModal() {
    setIsOpen(false);
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    window.setTimeout(() => {
      setIsMounted(false);
    }, 220);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    openModal();
  }

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      className="scroll-mt-20 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="relative max-w-6xl">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

        <Reveal delayClassName="delay-150">
          <div className="relative">
            <div className="text-center space-y-3 pb-8">
              <h2 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-5xl">
                Let's build together.
              </h2>
              <p className="text-base leading-relaxed font-light text-white/70 sm:text-lg">
                Share your details and our team will reach out shortly.
              </p>
            </div>

            <div className="flex items-center justify-center">
            <form onSubmit={onSubmit} className="grid gap-6 w-full max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-[11px] tracking-[0.14em] text-white/60 uppercase">
                    FIRST NAME
                  </label>
                  <input
                    name="firstName"
                    placeholder="Alex"
                    required
                    autoComplete="given-name"
                    className="w-full rounded-md border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-blue-200/30 focus:bg-black/20"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-[11px] tracking-[0.14em] text-white/60 uppercase">
                    LAST NAME
                  </label>
                  <input
                    name="lastName"
                    placeholder="Morgan"
                    required
                    autoComplete="family-name"
                    className="w-full rounded-md border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-blue-200/30 focus:bg-black/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-[11px] tracking-[0.14em] text-white/60 uppercase">
                    EMAIL
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className="w-full rounded-md border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-blue-200/30 focus:bg-black/20"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-[11px] tracking-[0.14em] text-white/60 uppercase">
                    PHONE
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+1 555 0123"
                    required
                    autoComplete="tel"
                    className="w-full rounded-md border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-blue-200/30 focus:bg-black/20"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-[11px] tracking-[0.14em] text-white/60 uppercase">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project, timeline, and needs."
                  required
                  className="w-full resize-none rounded-md border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-blue-200/30 focus:bg-black/20"
                />
              </div>

            <div className="flex w-full items-center justify-center">
              <button
                type="submit"
                className="mt-2 text-base py-2 px-20 rounded-full cursor-pointer bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 text-black/90 font-semibold tracking-[0.06em] transition-opacity hover:opacity-90"
              >
                Submit
              </button>
            </div>
            </form>
            </div>
          </div>
        </Reveal>
      </div>

      {isMounted ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeModal}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            className={`relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#070611]/80 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.75)] backdrop-blur-md transition-all duration-220 ${
              isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.98] opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute cursor-pointer right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
            >
              ×
            </button>

            <div className="space-y-3 pt-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 shadow-[0_0_60px_rgba(147,51,234,0.35)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="black"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="text-center text-sm font-semibold tracking-[0.18em] text-white/60 uppercase">
                Message Sent
              </p>
              <p className="text-center text-2xl font-semibold text-white">
                Thank you for reaching out.
              </p>
              <p className="text-center text-sm leading-relaxed font-light text-white/70">
                Our team will review your details and get back to you shortly.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

