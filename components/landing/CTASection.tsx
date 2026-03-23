import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";

type CTASectionProps = {
  title: string;
  subtitle: string;
  audiences: string;
  description: string;
};

export function CTASection({
  title,
  subtitle,
  audiences,
  description,
}: CTASectionProps) {
  return (
    <section
      id="workstation"
      className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="relative grid max-w-6xl gap-8 lg:grid-cols-12 lg:items-start">
        <div className="pointer-events-none absolute -left-8 top-10 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="space-y-6 lg:col-span-7 lg:col-start-6 lg:row-start-1">
          <Reveal>
            <h2 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delayClassName="delay-100">
            <p className="text-2xl font-semibold text-white sm:text-3xl">{subtitle}</p>
          </Reveal>
          <Reveal delayClassName="delay-150">
            <p className="max-w-4xl text-base leading-relaxed font-light text-white/70 sm:text-lg">
              {description}
            </p>
          </Reveal>
          <Reveal delayClassName="delay-200">
            <p className="inline-flex text-sm font-normal tracking-[0.18em] text-blue-100/90 uppercase sm:text-base">
              {audiences}
            </p>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5 lg:col-start-1 lg:row-start-1 w-full">
          <div className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-black/20 shadow-[0_35px_140px_rgba(0,0,0,0.65)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(168,85,247,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.25),transparent_58%)]" />
            <div className="absolute -inset-10 bg-blue-500/10 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute inset-0">
              <Image
                src="/images/octopus.png"
                alt=""
                fill
                aria-hidden="true"
                className="object-cover opacity-40 blur-xl scale-110"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
            </div>
            <Image
              src="/images/octopus.png"
              alt=""
              fill
              className="object-cover opacity-95 saturate-125 transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 80vw, 360px"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06050f] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06),transparent_25%,transparent_75%,rgba(255,255,255,0.04))] opacity-70 mix-blend-overlay" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
