import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PNR Builders — Hyderabad Construction Experts" },
      { name: "description", content: "Get in touch with PNR Builders for a free consultation. Call 94912 49349 or visit our office in Dwarakanagar, Raidurg, Hyderabad." },
      { property: "og:title", content: "Contact PNR Builders" },
      { property: "og:description", content: "Reach our team for a free consultation and project estimate." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact Us" title="Let's build something great" subtitle="Talk to our team for a free consultation, site visit, or project estimate." />

      <section className="py-20 container-px mx-auto max-w-7xl grid lg:grid-cols-3 gap-6">
        {[
          { icon: Phone, t: "Phone", v: "94912 49349", href: "tel:9491249349" },
          { icon: Mail, t: "Email", v: "pnrbuilders@gmail.com", href: "mailto:pnrbuilders@gmail.com" },
          { icon: MessageCircle, t: "WhatsApp", v: "Chat with us", href: "https://wa.me/919491249349" },
        ].map((c) => (
          <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group p-7 rounded-2xl border bg-card shadow-card hover:shadow-elegant transition">
            <div className="h-14 w-14 rounded-xl bg-gradient-brand grid place-items-center text-white group-hover:scale-110 transition">
              <c.icon className="h-7 w-7" />
            </div>
            <p className="mt-5 text-sm uppercase tracking-wider text-muted-foreground">{c.t}</p>
            <p className="mt-1 text-lg font-semibold text-brand-blue-dark">{c.v}</p>
          </a>
        ))}
      </section>

      <section className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 pb-20">
        <div className="bg-card p-8 rounded-2xl border shadow-card">
          <h2 className="text-2xl font-bold text-brand-blue-dark">Send us a message</h2>
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="p-7 rounded-2xl bg-brand-blue-dark text-white">
            <div className="flex gap-3">
              <MapPin className="h-6 w-6 text-brand-green shrink-0" />
              <div>
                <p className="font-semibold text-lg">Office Address</p>
                <p className="text-white/85 mt-1">PNR One, 1st Floor, Dwarakanagar, Raidurg, Hyderabad, Telangana - 500104</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border shadow-card">
            <iframe
              title="PNR Builders location"
              src="https://www.google.com/maps?q=Raidurg+Hyderabad+Telangana&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          toast.success("Thanks! Our team will contact you within 24 hours.");
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" required />
        <Field label="Phone Number" name="phone" type="tel" required />
      </div>
      <Field label="Email Address" name="email" type="email" required />
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Project Type</label>
          <select name="type" required className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue">
            <option value="">Select…</option>
            <option>Luxury Villa</option>
            <option>Apartment</option>
            <option>Commercial Building</option>
            <option>Individual House</option>
            <option>Farm House</option>
          </select>
        </div>
        <Field label="Location" name="location" required />
      </div>
      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea name="message" rows={4} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-gradient-brand text-white py-3.5 font-semibold shadow-elegant hover:opacity-95 transition disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get Free Quote"}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
      />
    </div>
  );
}
