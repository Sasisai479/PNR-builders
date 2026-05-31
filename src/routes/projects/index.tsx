import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import villa from "@/assets/project-villa.jpg";

export const Route = createFileRoute("/projects/")({
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

const project = {
  name: "Sri Anantha Meadows",
  category: "Premium Gated Community",
  location: "Vikarabad, Telangana",
  tag: "Ongoing",
  coverImage: villa,
  description:
    "Premium luxury villa community featuring 175 well-planned villas, clubhouse, swimming pool, landscaped gardens, cycling track, outdoor fitness zones, and modern lifestyle amenities in a peaceful Vikarabad location.",
};

function Projects() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Portfolio"
        title="Projects we're proud of"
        subtitle="Each project reflects our commitment to quality, design and on-time delivery across Hyderabad."
      />
      <section className="py-16 container-px mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/projects/sri-anantha-meadows">
            <article className="group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-elegant transition-all duration-500 cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <motion.img
                  src={project.coverImage}
                  alt={project.name}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 rounded-full bg-accent text-brand-blue-dark text-sm font-semibold">
                {project.category}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-gradient-brand text-white text-sm font-semibold">
                {project.tag}
              </span>
            </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-dark mb-2 group-hover:text-brand-blue transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-blue font-semibold group-hover:gap-3 transition-all">
                  View Project Details
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        </motion.div>

        <div className="mt-16 text-center">
          <Link to="/quote" className="inline-flex rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-elegant hover:shadow-xl transition-all duration-300">
            Start Your Project
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
