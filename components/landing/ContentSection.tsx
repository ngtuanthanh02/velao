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
  const stepImages = ["/images/key.png", "/images/nervous.png", "/images/octopus.png"];

  return (
    <section
      id="evolution"
      className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="relative max-w-6xl">
        <div className="pointer-events-none absolute -right-10 top-8 hidden h-56 w-56 rounded-full bg-blue-500/20 blur-3xl md:block" />
        <div className="pointer-events-none absolute -left-20 bottom-12 hidden h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl md:block" />
        <Reveal>
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-14">
          {steps.map((step, index) => {
            const src = stepImages[index] ?? stepImages[stepImages.length - 1];

            return (
              <Reveal key={step.name} delayClassName={index === 0 ? "" : "delay-100"}>
                <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
                  {/* Image (left on desktop, below on mobile) */}
                  <div className="order-2 lg:order-1 lg:col-span-4 w-full lg:flex lg:items-stretch lg:justify-center">
                    <div
                      className={`relative w-full h-full min-h-44 overflow-hidden rounded-2xl bg-black/25 shadow-[0_25px_80px_rgba(0,0,0,0.55)] ${
                        index === 2 ? "min-h-60" : ""
                      }`}
                    >
                      {index === 0 ? (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.25),transparent_55%)]" />
                          <div className="absolute -inset-6 bg-violet-500/10 blur-2xl opacity-70" />
                        </>
                      ) : index === 1 ? (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(168,85,247,0.25),transparent_58%)]" />
                          <div className="absolute -inset-6 bg-blue-500/10 blur-2xl opacity-70" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.35),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(56,189,248,0.22),transparent_58%)]" />
                          <div className="absolute -inset-6 bg-fuchsia-500/10 blur-2xl opacity-70" />
                        </>
                      )}

                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover opacity-88 saturate-125"
                        sizes="(max-width: 1024px) 90vw, 320px"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_55%)]" />

                      {index === 0 ? (
                        <div className="absolute bg-violet-500/20 -left-6 top-6 h-14 w-14 rounded-full blur-xl" />
                      ) : index === 1 ? (
                        <div className="absolute bg-blue-400/20 -right-8 bottom-8 h-24 w-24 rounded-full blur-xl" />
                      ) : (
                        <div className="absolute bg-fuchsia-500/15 -left-4 bottom-8 h-20 w-20 rounded-full blur-xl" />
                      )}
                    </div>
                  </div>

                  {/* Text (right on desktop, above on mobile) */}
                  <div className="order-1 lg:order-2 lg:col-span-8 w-full flex justify-start">
                    <article className="w-full max-w-2xl space-y-3 border-l border-white/20 pl-5">
                      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {step.name}
                      </h3>
                      <p className="text-sm font-semibold text-blue-200/90 sm:text-base">
                        {step.status}
                      </p>
                      <p className="text-base leading-relaxed font-light text-white/70 sm:text-lg">
                        {step.body}
                      </p>

                      {index === steps.length - 1 ? (
                        <ul className="mt-6 space-y-4 text-base leading-relaxed font-light text-white/75 sm:text-lg">
                          {bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400" />
                              <span className="text-white/85">
                                {(() => {
                                  const parts = bullet.split(". ");
                                  if (parts.length < 2) return bullet;
                                  const lead = parts[0];
                                  const rest = parts.slice(1).join(". ");
                                  return (
                                    <>
                                      <span className="font-semibold bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 bg-clip-text text-transparent">
                                        {lead}.
                                      </span>{" "}
                                      {rest}
                                    </>
                                  );
                                })()}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
