import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";

type FeatureSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  reverse?: boolean;
  imageSrc?: string;
};

export function FeatureSection({
  eyebrow,
  title,
  description,
  reverse = false,
  imageSrc = "/images/myphone.png",
}: FeatureSectionProps) {
  return (
    <section
      id="problem"
      className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="relative grid max-w-6xl gap-8 lg:grid-cols-12 lg:items-start">
        <div className="pointer-events-none absolute -left-16 top-6 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
        <div className={`space-y-6 lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
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
        <Reveal className={`lg:col-span-5 w-full ${reverse ? "lg:order-1" : "lg:order-2"}`}>
          <div className="group relative aspect-square w-full overflow-hidden rounded-3xl">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_70%_75%,rgba(56,189,248,0.28),transparent_55%)] opacity-80" /> */}
            {/* <div className="absolute -inset-8 bg-violet-500/15 blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-100" /> */}

            <div className="absolute inset-0">
              <Image
                src={imageSrc}
                alt="your device"
                fill
                aria-hidden="true"
                className="object-cover opacity-40 blur-xl scale-110"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
            </div>

            <div className="absolute inset-0">
              <Image
                src={imageSrc}
                alt="physics of the handshake"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.22),rgba(0,0,0,0.08))]"
                style={{
                  WebkitMaskImage: `url(${imageSrc})`,
                  maskImage: `url(${imageSrc})`,
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06050f] via-black/25 to-transparent"
                style={{
                  WebkitMaskImage: `url(${imageSrc})`,
                  maskImage: `url(${imageSrc})`,
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              />
            </div>

            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 transition-[box-shadow,transform] duration-500 group-hover:shadow-[0_0_0_1px_rgba(99,102,241,0.35),0_20px_80px_rgba(0,0,0,0.6)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
