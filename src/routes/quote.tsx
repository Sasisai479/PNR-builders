import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ContactForm } from "./contact";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote — PNR Builders" },
      { name: "description", content: "Request a free construction quote from PNR Builders. Share your project details and get a tailored estimate from our experts." },
      { property: "og:title", content: "Get a Free Quote — PNR Builders" },
      { property: "og:description", content: "Free, no-obligation quote for your construction project in Hyderabad." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

function Quote() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Free Quote" title="Get your free project estimate" subtitle="Share a few details and our team will get back with a tailored quote within 24 hours." />
      <section className="py-20 container-px mx-auto max-w-7xl grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 bg-card p-8 md:p-10 rounded-2xl border shadow-card">
          <h2 className="text-2xl font-bold text-brand-blue-dark">Project Details</h2>
          <ContactForm />
        </div>
        <aside className="lg:col-span-2 space-y-6">
          <div className="p-7 rounded-2xl bg-gradient-brand text-white shadow-elegant">
            <h3 className="text-xl font-bold">Why request a quote?</h3>
            <ul className="mt-4 space-y-3">
              {["100% free & no-obligation", "Tailored to your land & needs", "Transparent line-item costing", "Response within 24 hours"].map((p) => (
                <li key={p} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />{p}</li>
              ))}
            </ul>
          </div>
          <a href="tel:9491249349" className="flex items-center gap-3 p-5 rounded-2xl border bg-card hover:bg-muted transition">
            <Phone className="h-6 w-6 text-brand-blue" />
            <div>
              <p className="text-xs text-muted-foreground">Prefer to talk?</p>
              <p className="font-semibold text-brand-blue-dark">Call 94912 49349</p>
            </div>
          </a>
          <a href="https://wa.me/919491249349?text=Hi%20PNR%20Builders%2C%20I%27d%20like%20a%20free%20quote." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-5 rounded-2xl border bg-card hover:bg-muted transition">
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
            <div>
              <p className="text-xs text-muted-foreground">Quick chat</p>
              <p className="font-semibold text-brand-blue-dark">WhatsApp Us</p>
            </div>
          </a>
        </aside>
      </section>
    </SiteLayout>
  );
}
