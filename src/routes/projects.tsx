import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import villa from "@/assets/project-villa.jpg";
import apartments from "@/assets/project-apartments.jpg";
import commercial from "@/assets/project-commercial.jpg";
import house from "@/assets/project-house.jpg";
import farmhouse from "@/assets/project-farmhouse.jpg";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Featured Construction Work | PNR Builders" },
      { name: "description", content: "Explore featured villas, apartments, commercial and residential projects delivered by PNR Builders across Hyderabad." },
      { property: "og:title", content: "Projects — PNR Builders" },
      { property: "og:description", content: "A showcase of premium projects built across Hyderabad." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const all = [
  { img: villa, name: "Skyline Villa", location: "Gachibowli", type: "Luxury Villa", status: "Completed" },
  { img: apartments, name: "PNR Heights", location: "Kondapur", type: "Apartment", status: "Ongoing" },
  { img: commercial, name: "PNR Corporate Park", location: "Madhapur", type: "Commercial", status: "Completed" },
  { img: house, name: "Lakeview Residence", location: "Tellapur", type: "Individual House", status: "Completed" },
  { img: farmhouse, name: "Green Acres", location: "Shankarpally", type: "Farm House", status: "Ongoing" },
  { img: villa, name: "Royal Crest Villas", location: "Manikonda", type: "Luxury Villa", status: "Upcoming" },
  { img: apartments, name: "Crystal Court", location: "Nallagandla", type: "Apartment", status: "Completed" },
  { img: commercial, name: "Tech Hub Plaza", location: "Hitech City", type: "Commercial", status: "Ongoing" },
  { img: house, name: "Heritage Home", location: "Banjara Hills", type: "Individual House", status: "Completed" },
];

const filters = ["All", "Luxury Villa", "Apartment", "Commercial", "Individual House", "Farm House"];

function Projects() {
  const [f, setF] = useState("All");
  const items = f === "All" ? all : all.filter((p) => p.type === f);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Portfolio"
        title="Projects we're proud of"
        subtitle="Each project reflects our commitment to quality, design and on-time delivery across Hyderabad."
      />
      <section className="py-16 container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {filters.map((x) => (
            <button
              key={x}
              onClick={() => setF(x)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                f === x ? "bg-gradient-brand text-white shadow-elegant" : "bg-muted text-foreground hover:bg-accent"
              }`}
            >
              {x}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <article key={i} className="group rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elegant transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} width={1280} height={896} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-accent text-brand-blue-dark font-semibold">{p.type}</span>
                  <span className={`font-semibold ${p.status === "Completed" ? "text-brand-green" : p.status === "Ongoing" ? "text-brand-blue" : "text-muted-foreground"}`}>{p.status}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-brand-blue-dark">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.location}, Hyderabad</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/quote" className="inline-flex rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-elegant">Start Your Project</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
