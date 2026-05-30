import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import team from "@/assets/about-team.jpg";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PNR Builders — Construction Company in Hyderabad" },
      { name: "description", content: "Learn about PNR Builders — a Hyderabad-based construction company delivering quality villas, apartments and commercial projects with transparency and on-time delivery." },
      { property: "og:title", content: "About PNR Builders" },
      { property: "og:description", content: "Crafting trust, one project at a time. Discover our story, vision and team." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Crafting trust, one project at a time."
        subtitle="Hyderabad-based construction experts delivering excellence across luxury villas, apartments, commercial buildings, individual houses and farm houses."
      />

      <section className="py-20 container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <img src={team} alt="PNR Builders team" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-elegant w-full" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Our Story</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            PNR Builders is committed to delivering quality construction projects with realistic timelines and affordable pricing. Our focus is on excellence, transparency, customer satisfaction, and long-term value.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With a decade of expertise serving Hyderabad and the surrounding areas, we have built a reputation for craftsmanship, on-time delivery, and uncompromising quality standards.
          </p>
          <ul className="mt-6 space-y-3">
            {["Quality materials sourced from trusted partners", "Experienced engineers and on-site supervisors", "Transparent costing with no hidden charges", "End-to-end project management"].map((p) => (
              <li key={p} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 shrink-0" /><span>{p}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, t: "Mission", d: "Deliver lasting value through ethical, quality construction tailored to every client's vision." },
            { icon: Eye, t: "Vision", d: "To be Hyderabad's most trusted builder for premium residential and commercial projects." },
            { icon: Award, t: "Values", d: "Integrity, craftsmanship, transparency, and a relentless focus on client satisfaction." },
          ].map((b) => (
            <div key={b.t} className="bg-card p-8 rounded-2xl border shadow-card">
              <div className="h-14 w-14 rounded-xl bg-gradient-brand grid place-items-center text-white">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-brand-blue-dark">{b.t}</h3>
              <p className="mt-2 text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 container-px mx-auto max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Ready to start your project?</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Talk to our team for a free consultation and project estimate.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-elegant">Contact Us</Link>
      </section>
    </SiteLayout>
  );
}
