"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

type HeaderProps = {
  brand: string;
};

/** Khớp `id` trên trang chủ: Hero + các FeatureSection + Contact */
const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "TENANT", href: "#tenant-problem" },
  { label: "INTERLOCK", href: "#interlock" },
  { label: "GHOST", href: "#end-of-the-ghost" },
  { label: "ATTENTION", href: "#authorized-attention" },
  { label: "LAW", href: "#law" },
  { label: "CONTACT", href: "#contact" },
] as const;

export function Header({ brand }: HeaderProps) {
  const scrollToSection = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[80px] border-b border-white/10 bg-[#070611]/70 backdrop-blur-xl">
      <div className="mx-auto h-full w-full max-w-7xl px-6 py-0 sm:px-10 sm:py-0 lg:px-16 lg:py-0">
        <div className="flex h-full min-w-0 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <div className="rounded-full border border-blue-200/30 bg-blue-300/5 p-1.5">
              <Image
                src="/octopus-logo.svg"
                alt="Velao logo"
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
                priority
              />
            </div>
            {brand ? (
              <span className="text-sm font-semibold tracking-[0.2em] text-white/95 uppercase sm:text-sm">
                {brand}
              </span>
            ) : null}
          </Link>

          <nav className="hidden min-w-0 flex-wrap items-center justify-end gap-x-6 gap-y-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={scrollToSection(item.href)}
                className="text-[11px] tracking-[0.12em] text-white/70 uppercase transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Link
            href="/login"
            className="rounded-full cursor-pointer border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.12em] text-white/90 uppercase transition-colors hover:border-white/40 hover:bg-white/10"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
