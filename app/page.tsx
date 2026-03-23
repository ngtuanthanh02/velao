import { CTASection } from "@/components/landing/CTASection";
import { ContentSection } from "@/components/landing/ContentSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { EcosystemSection } from "@/components/landing/EcosystemSection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";

const landingContent = {
  brand: "Velao",
  hero: {
    title: "Identity, anchored in silicon.",
    subtitle: "Standard AI is a guess. Velao is a fact.",
    description:
      "We utilize the physical security already in your device to notarize every act of intent. We move from software permissions to hardware finality.",
    ctaLabel: "REQUEST ACCESS TO THE SPECIFICATION",
  },
  problem: {
    eyebrow: "THE PROBLEM",
    title: "You are a guest on your own device.",
    description:
      `Right now your identity and your capital are managed by soft permissions. Platforms can spoof your face and siphon your revenue because they own the environment you work in.
The platform owns the code. They should not own your intent.`,
  },
  interlock: {
    eyebrow: "THE INTERLOCK",
    title: "The physics of the handshake.",
    description:
      `The progress made with IronClaw is a landmark in technical integrity. It provides the secure ground where world class intelligence becomes private and verifiable.
We provide the final interlock. We utilize the physics of the handshake to anchor that world class environment to the human root. By connecting their secure ground to the silicon already in your pocket, we ensure that machine labor remains physically subordinate to your command.`,
  },
  evolution: {
    title: "THE EVOLUTION",
    steps: [
      {
        name: "2026: AUTHORIZED ATTENTION IS ALL YOU NEED.",
        status: "2026: AUTHORIZED ATTENTION IS ALL YOU NEED.",
        body: `In 2017 Illia Polosukhin gave machines a mind. The architecture of attention changed the world and provided the foundation for everything we see today.`,
      },
      {
        name: "IronClaw provides the ground. It is the industrial space where intelligence becomes private and verifiable.",
        status: "IronClaw provides the ground. It is the industrial space where intelligence becomes private and verifiable.",
        body: `We provide the key. We anchor the mind and the ground to the physical authority of the human root. This ensures every act of the machine is a verified expression of your will.`,
      },
      {
        name: "",
        status: "",
        body: `Mind. Foundational intelligence.
Ground. The IronClaw environment.
Key. Your physical device.`,
      },
    ],
    bullets: [],
  },
  ecosystem: {
    title: "THE ECONOMY",
    subtitle: "The many hands of authority.",
    description:
      `We have moved AI from chat to labor. Our environment allows the most advanced intelligence on earth to work as a verified fiduciary for the human subject.`,
    points: [
      `Integrity by Default. We verify the action at the source. The machine becomes physically incapable of deviating from your intent.`,
      `Zero-Waste Performance. We have removed the middleman from the machine. No more delays. Just direct and instant execution.`,
      `A Fair Marketplace. A new model for the professional class where every act of labor is recognized and rewarded by the ledger.`,
    ],
  },
  workstation: {
    title: "THE LEGAL ANCHOR",
    subtitle: "Senior Priority | Est. Jan 16, 2026",
    audiences: "The platform owns the bits. You own the inception.",
    description:
      "We hold the senior patent for hardware-isolated testimonial notarization. We provide the only technical standard that satisfies the legal requirement for informed consent.",
  },
  footer: {
    brand: "VELAO",
    location: "Los Angeles | Kharkiv",
  },
};

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
        <FeatureSection
          eyebrow={landingContent.problem.eyebrow}
          title={landingContent.problem.title}
          description={landingContent.problem.description}
          reverse
        />
        <FeatureSection
          eyebrow={landingContent.interlock.eyebrow}
          title={landingContent.interlock.title}
          description={landingContent.interlock.description}
          imageSrc="/images/lockgradient.png"
        />
        <ContentSection
          title={landingContent.evolution.title}
          steps={landingContent.evolution.steps}
          bullets={landingContent.evolution.bullets}
        />
        <EcosystemSection
          title={landingContent.ecosystem.title}
          subtitle={landingContent.ecosystem.subtitle}
          description={landingContent.ecosystem.description}
          points={landingContent.ecosystem.points}
        />
        <CTASection
          title={landingContent.workstation.title}
          subtitle={landingContent.workstation.subtitle}
          audiences={landingContent.workstation.audiences}
          description={landingContent.workstation.description}
        />

        <ContactSection />
      </main>
      <Footer
        brand={landingContent.footer.brand}
        location={landingContent.footer.location}
      />
    </div>
  );
}
