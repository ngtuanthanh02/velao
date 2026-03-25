import { ContactSection } from "@/components/landing/ContactSection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";

const landingContent = {
  brand: "Velao",
  hero: {
    title: "Identity, anchored in silicon.",
    subtitle: "Standard AI is a guess. We are the proof.",
    description:
      "We use the security chip in your pocket to notarize human intent. No more wondering what is real.",
    ctaLabel: "REQUEST ACCESS TO THE SPECIFICATION",
  },
  footer: {
    brand: "VELAO",
    location: "Los Angeles | Kharkiv",
  },
};

type FeatureBlock = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description: string[];
  audiences?: string;
  imageSrc?: string;
  videoSrc?: string;
  videoPoster?: string;
};

const featureSections: FeatureBlock[] = [
  {
    id: "tenant-problem",
    // eyebrow: "The tenant problem.",
    title: "The tenant problem",
    description: [
      "You are a guest on your own device. Your identity and your capital are managed by soft permissions. Platforms own the environment, so they think they own you.",
      "The platform owns the bits. You should own the intent.",
    ],
    imageSrc: "/images/homegradient.png",
  },
  {
    id: "interlock",
    // eyebrow: "THE INTERLOCK",
    title: "The physics of the handshake.",
    description: [
      "The progress made with IronClaw is a landmark in technical integrity. It provides the secure ground where intelligence becomes private and verifiable.",
      "We provide the key. We use the physics of a hardware handshake to link that ground to the human root. We ensure the machine stays subordinate to the person.",
    ],
    imageSrc: "/images/handshake.png",
  },
  {
    id: "end-of-the-ghost",
    title: "The end of the ghost.",
    description: [
      "The web is full of anonymous replicas without a source. We provide the standard for neural integrity.",
      "By notarizing your face and your voice at the sensor, we create a safe harbor for your identity. If your phone didn't sign it, the world knows it isn't you.",
    ],
    videoSrc: "/videos/KarolVideo.mov",
    videoPoster: "/images/girl.png",
  },
  {
    id: "authorized-attention",
    title: "2026: Authorized Attention is all you need.",
    description: [
      "In 2017, Illia Polosukhin gave machines a mind. Today, IronClaw gives that mind a body.",
      "We provide the authority of the human root.",
      "Mind. Foundational intelligence.",
      "Ground. The IronClaw environment.",
      "Key. Your physical device.",
    ],
    imageSrc: "/images/lockgradient2.png",
  },
  {
    id: "law",
    title: "The Law | Est. Jan 16, 2026",
    description: [
      "We hold the senior patent for hardware isolated testimonial notarization. We provide the only technical standard that satisfies the legal requirement for informed consent.",
      "The platform owns the bits. You own the inception.",
    ],
    imageSrc: "/images/octopus-gradient.png",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#04030b] text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-[30rem] -left-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-[72rem] right-0 h-[28rem] w-[30rem] rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_42px] opacity-20" />
      <Header brand={landingContent.brand} />
      <main className="relative z-10 flex flex-col gap-8 pt-20 sm:gap-10 lg:gap-12">
        <HeroSection
          title={landingContent.hero.title}
          subtitle={landingContent.hero.subtitle}
          description={landingContent.hero.description}
          ctaLabel={landingContent.hero.ctaLabel}
        />
        {featureSections.map((section, index) => (
          <FeatureSection
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
            subtitle={section.subtitle}
            description={section.description}
            audiences={section.audiences}
            imageSrc={section.imageSrc}
            videoSrc={section.videoSrc}
            videoPoster={section.videoPoster}
            reverse={index % 2 === 0}
          />
        ))}

        <ContactSection />
      </main>
      <Footer
        brand={landingContent.footer.brand}
        location={landingContent.footer.location}
      />
    </div>
  );
}
