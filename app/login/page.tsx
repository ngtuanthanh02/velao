import { LoginCard } from "@/components/auth/LoginCard";

export default function LoginPage() {
  return (
    <div className="relative h-screen overflow-hidden bg-[#04030b] text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-[30rem] -left-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-[72rem] right-0 h-[28rem] w-[30rem] rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_42px] opacity-20" />

      <main className="relative z-10 flex h-full items-center justify-center px-4">
        <LoginCard />
      </main>
    </div>
  );
}

