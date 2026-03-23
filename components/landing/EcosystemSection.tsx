import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";

type EcosystemSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
};

export function EcosystemSection({
  title,
  subtitle,
  description,
  points,
}: EcosystemSectionProps) {
  return (
    <section
      id="ecosystem"
      className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="relative grid max-w-6xl gap-8 lg:grid-cols-12 lg:items-start">
        <div className="pointer-events-none absolute right-8 top-6 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="space-y-6 lg:col-span-7">
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
            <ul className="space-y-4 text-base leading-relaxed font-light text-white/75 sm:text-lg">
              {points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-blue-200/90" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-5 w-full">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-black/20 shadow-[0_30px_120px_rgba(0,0,0,0.62)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(56,189,248,0.25),transparent_55%)]" />
            <div className="absolute -inset-10 bg-violet-500/10 blur-3xl opacity-70" />

            <div className="absolute inset-0">
              <Image
                src="/images/lock.png"
                alt=""
                fill
                aria-hidden="true"
                className="object-cover opacity-35 blur-xl scale-110"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
            </div>

            <div className="absolute inset-0">
              <Image
                src="/images/lock.png"
                alt=""
                fill
                className="object-cover opacity-95 saturate-125"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06050f] via-black/10 to-transparent" />
              <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_10%,black_40%,black_80%)] bg-gradient-to-tr from-violet-400/20 via-transparent to-blue-400/10" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
