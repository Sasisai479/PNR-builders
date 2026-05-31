import { createFileRoute, Outlet } from "@tanstack/react-router";

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

function Projects() {
  return <Outlet />;
}
