import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";

type FeatureSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function FeatureSection({
  eyebrow,
  title,
  description,
}: FeatureSectionProps) {
  return (
    <section
      id="problem"
      className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="relative grid max-w-6xl gap-8 lg:grid-cols-12 lg:items-start">
        <div className="pointer-events-none absolute -left-16 top-6 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="space-y-6 lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-200/85 uppercase">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delayClassName="delay-100">
            <h2 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delayClassName="delay-200">
            <p className="max-w-4xl whitespace-pre-line text-base leading-relaxed font-light text-white/70 sm:text-lg">
              {description}
            </p>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-5 w-full">
          <div className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-black/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_70%_75%,rgba(56,189,248,0.28),transparent_55%)] opacity-80" />
            <div className="absolute -inset-8 bg-violet-500/15 blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-100" />

            <div className="absolute inset-0">
              <Image
                src="/images/myphone.png"
                alt=""
                fill
                aria-hidden="true"
                className="object-cover opacity-40 blur-xl scale-110"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
            </div>

            <div className="absolute inset-0">
              <Image
                src="/images/myphone.png"
                alt=""
                fill
                className="object-cover opacity-90 saturate-125"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06050f] via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08),transparent_18%,transparent_82%,rgba(255,255,255,0.06))] opacity-50 mix-blend-overlay" />
            </div>

            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 transition-[box-shadow,transform] duration-500 group-hover:shadow-[0_0_0_1px_rgba(99,102,241,0.35),0_20px_80px_rgba(0,0,0,0.6)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
