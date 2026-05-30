import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Castle, Building2, Warehouse, Home, Trees, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Villas, Apartments & Commercial Construction | PNR Builders" },
      { name: "description", content: "Explore PNR Builders' services: luxury villas, apartments, commercial buildings, individual houses and farm houses across Hyderabad." },
      { property: "og:title", content: "Construction Services — PNR Builders" },
      { property: "og:description", content: "End-to-end construction solutions for residential and commercial projects in Hyderabad." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Castle, title: "Luxury Villas", desc: "Premium villa construction with customized designs and superior quality materials.", bullets: ["Custom architectural design", "Premium finishes", "Smart-home ready"] },
  { icon: Building2, title: "Apartments", desc: "Modern apartment projects designed for comfort and long-term investment value.", bullets: ["Vaastu-compliant layouts", "Quality common areas", "Optimized space planning"] },
  { icon: Warehouse, title: "Commercial Buildings", desc: "Commercial spaces built for growth, functionality, and long-term returns.", bullets: ["Retail, office & mixed-use", "MEP-ready spaces", "On-time handover"] },
  { icon: Home, title: "Individual Houses", desc: "Personalized dream homes tailored to client requirements and lifestyle.", bullets: ["Turnkey construction", "Design + build packages", "Transparent costing"] },
  { icon: Trees, title: "Farm Houses", desc: "Beautiful farmhouse construction blending comfort with nature.", bullets: ["Site-suited architecture", "Sustainable materials", "Landscape integration"] },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What We Build"
        title="Construction services tailored to your vision"
        subtitle="From a single bespoke villa to multi-tower apartment communities and large commercial spaces — we build it with care."
      />
      <section className="py-20 container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card p-8 rounded-2xl border shadow-card hover:shadow-elegant transition">
            <div className="flex items-start gap-5">
              <div className="h-16 w-16 rounded-xl bg-gradient-brand grid place-items-center text-white shrink-0">
                <s.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-blue-dark">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm flex gap-2"><span className="text-brand-green">●</span>{b}</li>
                  ))}
                </ul>
                <Link to="/quote" className="mt-5 inline-flex items-center gap-1 text-brand-green font-semibold">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="rounded-3xl bg-brand-blue-dark text-white p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Not sure which service fits?</h2>
          <p className="mt-3 text-white/85">Our experts will recommend the right approach for your land, budget and timeline.</p>
          <div className="mt-7 flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/919491249349?text=Hi%20PNR%20Builders%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-7 py-3.5 font-semibold">WhatsApp Us</a>
            <a href="tel:9491249349" className="rounded-full bg-brand-green hover:bg-brand-green-dark px-7 py-3.5 font-semibold transition">Call 94912 49349</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
