import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";

type ShowcaseSectionProps = {
  imageSrc: string;
  imageAlt: string;
};

export function ShowcaseSection({ imageSrc, imageAlt }: ShowcaseSectionProps) {
  return (
    <section
      id="showcase"
      className="mx-auto w-full max-w-7xl px-6 pb-2 pt-6 sm:pt-0 sm:pb-0 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <Reveal>
        <div className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(42,111,255,0.32),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(20,63,190,0.24),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(56,126,255,0.2),transparent_42%)] blur-2xl" />

          <div className="relative">
              <div className="absolute -left-10 top-8 hidden h-[74%] w-[38%] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_22px_55px_rgba(0,0,0,0.45)] md:block">
                <Image
                  src="/images/key.png"
                  alt=""
                  fill
                  className="object-cover opacity-70"
                  sizes="320px"
                />
              </div>

              <div className="absolute -right-8 bottom-10 hidden h-[68%] w-[34%] overflow-hidden rounded-3xl border border-blue-200/25 bg-white/5 shadow-[0_22px_55px_rgba(0,0,0,0.45)] md:block">
                <Image
                  src="/images/nervous.png"
                  alt=""
                  fill
                  className="object-cover opacity-75"
                  sizes="300px"
                />
              </div>

              <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_rgba(0,0,0,0.55)]">
                <div className="relative aspect-video">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 92vw, 960px"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>
              </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
