import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-brand text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)" }} />
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28 relative">
        {eyebrow && <p className="uppercase tracking-[0.3em] text-xs text-white/80 mb-4">{eyebrow}</p>}
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-up">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-white/85 text-lg leading-relaxed animate-fade-up">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
