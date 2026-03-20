"use client";

import { FormEvent } from "react";
import Link from "next/link";

import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";

export function LoginCard() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="relative w-full max-w-[420px] rounded-3xl border border-white/10 bg-[#070611]/70 p-5 shadow-[0_40px_140px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-8">
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-28 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

      <Reveal className="relative space-y-6">
        <Link
          href="/"
          className="flex items-center justify-center gap-3"
          aria-label="Velao home"
        >
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 shadow-[0_0_50px_rgba(147,51,234,0.25)]">
            <div className="relative h-7 w-7">
              <Image
                src="/octopus-logo.svg"
                alt=""
                fill
                className="object-contain invert"
                priority
              />
            </div>
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] text-white/95">
            Velao
          </span>
        </Link>

        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Welcome back.
          </h1>
          <p className="text-sm font-light leading-relaxed text-white/65">
            Please enter your details to sign in.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-xs font-semibold tracking-[0.14em] text-white/60 uppercase">
              user name
            </label>
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"
              >
                <path
                  d="M20 21v-1.2c0-1.5-1.1-2.8-2.6-3.1A16.2 16.2 0 0 0 12 16a16.2 16.2 0 0 0-5.4.7C5.1 17 4 18.3 4 19.8V21"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12a4.4 4.4 0 1 0 0-8.8A4.4 4.4 0 0 0 12 12Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
              <input
                name="userName"
                autoComplete="username"
                className="w-full rounded-2xl border border-white/12 bg-black/30 px-4 py-3 pl-11 text-sm text-white outline-none transition-colors focus:border-blue-200/30 focus:bg-black/20 focus:ring-1 focus:ring-blue-300/20"
                type="text"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold tracking-[0.14em] text-white/60 uppercase">
              password
            </label>
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"
              >
                <path
                  d="M7.5 11V7.8C7.5 5.1 9.7 3 12.4 3h-.8C14.3 3 16.5 5.1 16.5 7.8V11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M7 11h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M12 15.2v2.6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <input
                name="password"
                autoComplete="current-password"
                className="w-full rounded-2xl border border-white/12 bg-black/30 px-4 py-3 pl-11 text-sm text-white outline-none transition-colors focus:border-blue-200/30 focus:bg-black/20 focus:ring-1 focus:ring-blue-300/20"
                type="password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="relative h-12 w-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 font-semibold tracking-[0.06em] text-black/90 transition-opacity hover:opacity-95"
          >
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.35)_40%,transparent_70%)] opacity-60" />
            <span className="relative">login</span>
          </button>
        </form>
      </Reveal>
    </div>
  );
}

