import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/pnr-logo.png";

export function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white/90 mt-24">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white inline-block rounded-lg p-3">
            <img src={logo} alt="PNR Builders" width={150} height={60} className="h-12 w-auto" loading="lazy" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            Quality constructions with realistic timelines at affordable prices — We Assure.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-green transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About Us" },
              { to: "/services", l: "Services" },
              { to: "/projects", l: "Projects" },
              { to: "/contact", l: "Contact" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="hover:text-brand-green transition">{i.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Luxury Villas</li>
            <li>Apartments</li>
            <li>Commercial Buildings</li>
            <li>Individual Houses</li>
            <li>Farm Houses</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><Phone className="h-4 w-4 text-brand-green shrink-0 mt-0.5" /><a href="tel:9491249349" className="hover:text-brand-green">94912 49349</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-brand-green shrink-0 mt-0.5" /><a href="mailto:pnrbuilders@gmail.com" className="hover:text-brand-green">pnrbuilders@gmail.com</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-brand-green shrink-0 mt-0.5" /><span className="text-white/80">PNR One, 1st Floor, Dwarakanagar, Raidurg, Hyderabad, Telangana - 500104</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} PNR Builders. All rights reserved.</p>
          <p>pnrbuilders.in</p>
        </div>
      </div>
    </footer>
  );
}
