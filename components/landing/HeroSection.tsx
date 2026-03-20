import { Reveal } from "@/components/landing/Reveal";
import Image from "next/image";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

export function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  const titleParts = title.split("speed");

  return (
    <section
      id="hero"
      className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-20 sm:pt-24 lg:px-16 lg:py-24 lg:pt-28"
    >
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <Reveal>
            <h1 className="max-w-4xl text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {titleParts[0]}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 bg-clip-text text-transparent">
                speed
              </span>
              {titleParts[1] ?? ""}
            </h1>
          </Reveal>
          <Reveal delayClassName="delay-100">
            <p className="text-xl leading-relaxed font-semibold text-white sm:text-2xl">
              {subtitle}
            </p>
          </Reveal>
          <Reveal delayClassName="delay-200">
            <p className="max-w-[600px] text-base leading-relaxed font-light text-white/70 sm:text-base">
              {description}
            </p>
          </Reveal>

          <Reveal delayClassName="delay-250">
            <a
              href="#contact"
              className="inline-flex h-8 items-center justify-center rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 px-8 text-sm font-semibold tracking-[0.08em] text-black/90 transition-opacity hover:opacity-90"
            >
              Inquire
            </a>
          </Reveal>
        </div>

        <Reveal delayClassName="delay-200" className="hidden lg:block lg:col-span-5">
          <div className="relative mx-auto h-[320px] w-full max-w-[520px] sm:h-[420px]">
            <div className="absolute inset-0 rounded-[2rem]" />
            <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
              <Image
                src="/images/3d.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 2000px) 100vh, 800px"
              />
            </div>
            <div className="absolute bottom-6 left-1/2 h-8 w-44 -translate-x-1/2 rounded-full bg-violet-500/35 blur-2xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
