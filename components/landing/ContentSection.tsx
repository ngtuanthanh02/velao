import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";

type Step = {
  name: string;
  status: string;
  body: string;
};

type ContentSectionProps = {
  title: string;
  steps: Step[];
  bullets: string[];
};

export function ContentSection({ title, steps, bullets }: ContentSectionProps) {
  const stepImages = ["/images/key.png", "/images/key2.png", "/images/world.png"];
  const step1VideoSrc = "/videos/KarolVideo.mov";
  const step1VideoPoster = "/images/girl.png";

  return (
    <section
      id="evolution"
      className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="max-w-6xl">
        <Reveal>
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-10 space-y-10">
          {steps.map((step, index) => {
            const media = stepImages[index] ?? stepImages[stepImages.length - 1];
            const isStep1 = index === 0;
            const isStep3 = index === 2;
            const isImageRight = index === 1;

            return (
              <Reveal key={step.name} delayClassName={index === 0 ? "delay-100" : "delay-150"}>
                <div className="grid items-center gap-6 lg:grid-cols-12">
                  <div className={`lg:col-span-4 ${isImageRight ? "lg:order-2" : "lg:order-1"}`}>
                    {isStep1 ? (
                      <div className="relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-[1.4rem] border border-white/15 bg-black/40">
                        <video
                          className="h-full w-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          poster={step1VideoPoster}
                        >
                          <source src={step1VideoSrc} type="video/mp4" />
                        </video>
                        <div className="pointer-events-none absolute inset-0 bg-black/40" />
                      </div>
                    ) : (
                      <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-2xl border border-white/12">
                        <Image
                          src={media}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 90vw, 380px"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-black/40" />
                      </div>
                    )}
                  </div>

                  <article className={`space-y-2 lg:col-span-8 ${isImageRight ? "lg:order-1" : "lg:order-2"}`}>
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {step.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-200/90 sm:text-base">
                      {step.status}
                    </p>
                    <p className="text-base leading-relaxed font-light text-white/75 sm:text-lg">
                      {step.body}
                    </p>

                    {isStep3 ? (
                      <ul className="mt-4 space-y-3 text-base leading-relaxed font-light text-white/80 sm:text-lg">
                        {bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
