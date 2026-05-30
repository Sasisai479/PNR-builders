import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/pnr-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/95 backdrop-blur shadow-card"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="PNR Builders" width={140} height={56} className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-brand-green" }}
              className="text-sm font-medium text-foreground/80 hover:text-brand-blue transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:9491249349"
            className="flex items-center gap-2 text-sm font-semibold text-brand-blue-dark"
          >
            <Phone className="h-4 w-4" /> 94912 49349
          </a>
          <Link
            to="/quote"
            className="rounded-full bg-gradient-brand text-white px-5 py-2.5 text-sm font-semibold shadow-elegant hover:opacity-95 transition"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-brand-green bg-accent" }}
                className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-brand text-white px-5 py-3 text-center text-sm font-semibold"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:9491249349"
              className="mt-1 flex items-center justify-center gap-2 rounded-full border border-brand-blue/30 px-5 py-3 text-sm font-semibold text-brand-blue-dark"
            >
              <Phone className="h-4 w-4" /> Call 94912 49349
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
