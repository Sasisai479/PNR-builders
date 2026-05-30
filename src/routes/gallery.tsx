import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import villa from "@/assets/project-villa.jpg";
import apartments from "@/assets/project-apartments.jpg";
import commercial from "@/assets/project-commercial.jpg";
import house from "@/assets/project-house.jpg";
import farmhouse from "@/assets/project-farmhouse.jpg";
import team from "@/assets/about-team.jpg";
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — PNR Builders Construction Photos" },
      { name: "description", content: "Browse our photo gallery of completed villas, apartments and commercial construction across Hyderabad." },
      { property: "og:title", content: "Gallery — PNR Builders" },
      { property: "og:description", content: "A visual showcase of our craftsmanship." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const images = [villa, apartments, commercial, house, farmhouse, team, villa, apartments, commercial, house, farmhouse, team];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="A glimpse into our craftsmanship" subtitle="Snapshots from our completed and ongoing projects across Hyderabad." />
      <section className="py-16 container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(img)}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img src={img} alt={`Project ${i + 1}`} width={1280} height={896} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-60 transition" />
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 bg-black/90 z-[60] grid place-items-center p-4" onClick={() => setOpen(null)}>
          <button onClick={() => setOpen(null)} className="absolute top-6 right-6 text-white" aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <img src={open} alt="Project" className="max-h-full max-w-full rounded-lg" />
        </div>
      )}
    </SiteLayout>
  );
}
