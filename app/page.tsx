import { CTASection } from "@/components/landing/CTASection";
import { ContentSection } from "@/components/landing/ContentSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { EcosystemSection } from "@/components/landing/EcosystemSection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ShowcaseSection } from "@/components/landing/ShowcaseSection";

const landingContent = {
  brand: "Velao",
  hero: {
    title: "Authority, at the speed of silicon.",
    subtitle: "Standard AI is a guess. Velao is a fact.",
    description:
      'We use the physical security hardware already in your device to verify every digital act. No more "Software Permissions." No more "Bot Identity." Just hard physics.',
  },
  problem: {
    eyebrow: "THE PROBLEM",
    title: "You are a guest on your own device.",
    description:
      `Identity and capital are currently managed by "soft" permissions. Platforms can spoof your face, hallucinate your choices, and siphon your revenue because they own the environment you work in.
The platform owns the code. They shouldn't own your intent.`
  },
  evolution: {
    title: "THE EVOLUTION OF CERTAINTY",
    steps: [
      {
        name: "Step 1: Inception.",
        status: "Status: Patented | Senior Priority Jan 16, 2026",
        body: `We established the global standard for linking human intent to physical hardware. By binding acts of
will to a non-exportable silicon root at the microsecond of capture, we provide the only technical
standard for Informed Consent.`,
      },
      {
        name: "Step 2: Command.",
        status: "Status: Patented | Feb 2026",
        body: `We extended that protection to the automated workforce. We provide the physical interlock that ensures
no digital action occurs without a direct pulse from your silicon. We move the agent from a risk to a
Fiduciary.`,
      },
      {
        name: "Step 3: Finality.",
        status: "Status: Phase III | Restricted Access",
        body: `Now, we are establishing the environment for global scale. Phase III introduces a synchronous
operating state that eliminates the structural lag and waste of the old internet.`,
      },
    ],
    bullets: [
      `Integrity by Default. Verification occurs at the point of action, making the machine physically
incapable of deviating from your intent.`,
      `Zero-Waste Performance. We have removed the middleman from the machine. No more
delays; just direct, instant execution.`,
      `Actuarial Certainty. The first technical standard that makes digital acts Insurable in the real
world`,
    ],
  },
  ecosystem: {
    title: "THE ECOSYSTEM",
    subtitle: "A new economy for professional labor.",
    description:
      `We provide the foundation for a global network where every digital contribution is recognized,
protected, and rewarded.`,
    points: [
      `Authenticated Value. We turn unverified data into permanent property.`,
      `Institutional Standing. We provide the building code that satisfies the highest standards of law
and finance.`,
      `Sovereign Growth. A collaborative environment designed to outlast platforms, returning the
margin to the originators.`,
    ],
  },
  workstation: {
    title: "THE WORKSTATION",
    subtitle: "One cockpit for your total circle.",
    audiences: "CREATORS | PROFESSIONALS | FAMILIES",
    description:
      `The workstation where you finally own your day. We’ve collapsed the friction of the old internet into a
single, hardware-locked operating environment.`,
  },
  footer: {
    brand: "VELAO",
    location: "los Angles | Kharkiv",
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
      <main className="relative z-10 pt-20">
        <HeroSection
          title={landingContent.hero.title}
          subtitle={landingContent.hero.subtitle}
          description={landingContent.hero.description}
        />
        <ShowcaseSection imageSrc="/images/octopus.png" imageAlt="" />
        <FeatureSection
          eyebrow={landingContent.problem.eyebrow}
          title={landingContent.problem.title}
          description={landingContent.problem.description}
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
