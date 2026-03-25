import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";

type FeatureSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description: string[];
  audiences?: string;
  reverse?: boolean;
  /** Dùng khi không phát video */
  imageSrc?: string;
  /** Khi có: hiển thị video tự phát, không controls (không tua) */
  videoSrc?: string;
  videoPoster?: string;
};

export function FeatureSection({
  id,
  eyebrow,
  title,
  subtitle,
  description,
  audiences,
  reverse = false,
  imageSrc = "/images/myphone.png",
  videoSrc,
  videoPoster,
}: FeatureSectionProps) {
  const isVideo = Boolean(videoSrc);

  return (
    <section
      id={id}
      className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-16"
    >
      <div className="relative grid max-w-6xl items-center gap-8 lg:grid-cols-12">
        <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
          {eyebrow && (
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-200/85 uppercase mb-4">
                {eyebrow}
              </p>
            </Reveal>
          )}
          <Reveal delayClassName="delay-100">
            <h2 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-5xl mb-4">
              {title}
            </h2>
          </Reveal>
          {subtitle ? (
            <Reveal delayClassName="delay-150">
              <p className="text-2xl font-semibold text-white sm:text-3xl">{subtitle}</p>
            </Reveal>
          ) : null}
          <Reveal delayClassName="delay-200">
            <div className="flex max-w-4xl flex-col gap-4 text-base leading-relaxed font-light text-white/70 sm:text-lg">
              {description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          {audiences ? (
            <Reveal delayClassName="delay-250">
              <p className="inline-flex text-sm font-normal tracking-[0.18em] text-blue-100/90 uppercase sm:text-base mt-8">
                {audiences}
              </p>
            </Reveal>
          ) : null}
        </div>
        <Reveal className={`lg:col-span-5 w-full ${reverse ? "lg:order-1" : "lg:order-2"}`}>
          {isVideo ? (
            <div className="group relative mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[1.4rem]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={videoPoster}
                disablePictureInPicture
                tabIndex={-1}
                aria-hidden={true}
              >
                <source src={videoSrc} type="video/quicktime" />
                <source src={videoSrc} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] ring-1 ring-white/10 transition-[box-shadow] duration-500 group-hover:shadow-[0_0_0_1px_rgba(99,102,241,0.35),0_20px_80px_rgba(0,0,0,0.6)]" />
            </div>
          ) : (
            <div className="group relative aspect-square w-full overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <Image
                  src={imageSrc}
                  alt="physics of the handshake"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 360px"
                />
              </div>

              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 transition-[box-shadow,transform] duration-500 group-hover:shadow-[0_0_0_1px_rgba(99,102,241,0.35),0_20px_80px_rgba(0,0,0,0.6)]" />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
