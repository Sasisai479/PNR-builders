import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import hero from "@/assets/hero-construction.jpg";
import villa from "@/assets/project-villa.jpg";
import apartments from "@/assets/project-apartments.jpg";
import commercial from "@/assets/project-commercial.jpg";
import house from "@/assets/project-house.jpg";
import farmhouse from "@/assets/project-farmhouse.jpg";
import team from "@/assets/about-team.jpg";
import {
  ArrowRight, Building2, Home, Trees, Warehouse, Castle, ShieldCheck,
  Wallet, Clock, Users, Eye, HeartHandshake, PencilRuler, ClipboardCheck,
  Phone, MessageSquareQuote, Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PNR Builders — Premium Construction in Hyderabad" },
      { name: "description", content: "PNR Builders delivers luxury villas, apartments, commercial buildings, individual houses and farm houses across Hyderabad with quality, transparency and on-time delivery." },
      { property: "og:title", content: "PNR Builders — Building Dreams Into Reality" },
      { property: "og:description", content: "Premium construction solutions across Hyderabad — quality materials, realistic timelines, affordable pricing." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const WA = "https://wa.me/919491249349?text=Hi%20PNR%20Builders%2C%20I%27d%20like%20a%20free%20consultation.";

const services = [
  { icon: Castle, title: "Luxury Villas", desc: "Premium villa construction with customized designs and superior quality." },
  { icon: Building2, title: "Apartments", desc: "Modern apartment projects designed for comfort and investment value." },
  { icon: Warehouse, title: "Commercial Buildings", desc: "Spaces built for growth, functionality, and long-term returns." },
  { icon: Home, title: "Individual Houses", desc: "Personalized dream homes tailored to every client's requirements." },
  { icon: Trees, title: "Farm Houses", desc: "Beautiful farmhouse construction blending comfort with nature." },
];

const reasons = [
  { icon: ShieldCheck, t: "Quality Construction" },
  { icon: Wallet, t: "Affordable Pricing" },
  { icon: Clock, t: "Realistic Timelines" },
  { icon: Users, t: "Experienced Engineers" },
  { icon: Eye, t: "Transparent Process" },
  { icon: HeartHandshake, t: "Client-Centric Approach" },
  { icon: PencilRuler, t: "Modern Designs" },
  { icon: ClipboardCheck, t: "End-to-End Management" },
];

const process = [
  "Consultation", "Planning & Design", "Cost Estimation",
  "Construction", "Quality Inspection", "Project Handover",
];

const projects = [
  { img: villa, name: "Sri Anantha Meadows", location: "Vikarabad, Telangana", type: "Premium Gated Community", status: "Ongoing" },
];

const stats = [
  { v: 100, suffix: "+", l: "Projects Completed" },
  { v: 500, suffix: "+", l: "Happy Clients" },
  { v: 10, suffix: "+", l: "Years Experience" },
  { v: 100, suffix: "%", l: "Quality Commitment" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Villa Owner, Gachibowli", quote: "PNR Builders delivered our dream villa exactly on time and within budget. Quality of finish is exceptional." },
  { name: "Anitha Reddy", role: "Apartment Buyer", quote: "Transparent process from day one. The team's professionalism gave us complete peace of mind." },
  { name: "Vikram Shetty", role: "Commercial Client", quote: "Best construction partner in Hyderabad. They understood our vision and executed flawlessly." },
];

function useCountUp(target: number, run: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return v;
}

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-brand-blue-dark text-white py-20">
      <div className="container-px mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatItem key={s.l} run={run} v={s.v} suffix={s.suffix} l={s.l} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ run, v, suffix, l }: { run: boolean; v: number; suffix: string; l: string }) {
  const n = useCountUp(v, run);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-6xl font-display font-bold text-brand-green">{n}{suffix}</div>
      <p className="mt-2 text-sm md:text-base text-white/80">{l}</p>
    </div>
  );
}

function HomePage() {
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={hero} alt="Construction site at dusk" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-px mx-auto max-w-7xl py-24 text-white">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-brand-green animate-fade-up">PNR Builders · Hyderabad</p>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl animate-fade-up">
            Building Dreams <br /> Into <span className="text-brand-green">Reality</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90 animate-fade-up">
            Premium construction solutions for Luxury Villas, Apartments, Commercial Buildings, Individual Houses, and Farm Houses across Hyderabad.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-green hover:bg-brand-green-dark text-white px-7 py-3.5 font-semibold transition shadow-elegant">
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/40 hover:bg-white/10 text-white px-7 py-3.5 font-semibold transition backdrop-blur-sm">
              View Projects
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {["Years of Expertise", "Quality Materials", "On-Time Delivery", "Experienced Team"].map((t) => (
              <div key={t} className="border-l-2 border-brand-green pl-4">
                <p className="text-xs uppercase tracking-wider text-white/70">Promise</p>
                <p className="mt-1 font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={team} alt="PNR Builders engineering team" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-elegant w-full h-auto" />
          <div className="absolute -bottom-6 -right-6 bg-gradient-brand text-white p-6 rounded-2xl shadow-elegant hidden md:block">
            <p className="text-4xl font-display font-bold">10+</p>
            <p className="text-sm">Years of Excellence</p>
          </div>
        </div>
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-brand-green font-semibold">About PNR Builders</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand-blue-dark">Crafting trust, one project at a time.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            PNR Builders is committed to delivering quality construction projects with realistic timelines and affordable pricing. Our focus is on excellence, transparency, customer satisfaction, and long-term value.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {["Years of Expertise", "Quality Materials", "On-Time Delivery", "Experienced Team"].map((t) => (
              <div key={t} className="flex items-center gap-3 p-4 rounded-xl bg-muted">
                <div className="h-2.5 w-2.5 rounded-full bg-brand-green" />
                <span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all">
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-muted py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-xs text-brand-green font-semibold">Our Services</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand-blue-dark">What we build</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-card p-7 rounded-2xl border hover:border-brand-green hover:shadow-elegant transition">
                <div className="h-14 w-14 rounded-xl bg-gradient-brand text-white grid place-items-center group-hover:scale-110 transition">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-blue-dark">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-brand-green font-semibold text-sm">
                  Explore <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-xs text-brand-green font-semibold">Why Choose Us</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand-blue-dark">Built on trust. Backed by results.</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div key={r.t} className="p-6 rounded-2xl border bg-card hover:bg-brand-blue hover:text-white transition group">
              <r.icon className="h-8 w-8 text-brand-green group-hover:text-white" />
              <p className="mt-4 font-semibold">{r.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-blue-dark text-white py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-xs text-brand-green font-semibold">Our Process</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">From concept to keys</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <div key={p} className="relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-green transition">
                <span className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-gradient-brand grid place-items-center font-bold">{i + 1}</span>
                <p className="mt-3 text-xl font-display font-semibold">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 container-px mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-brand-green font-semibold">Featured Projects</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand-blue-dark">Recent work</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-brand-blue font-semibold">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link to="/projects/sri-anantha-meadows" key={p.name} className="group rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elegant transition block">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} width={1280} height={896} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-accent text-brand-blue-dark font-semibold">{p.type}</span>
                  <span className={`font-semibold ${p.status === "Completed" ? "text-brand-green" : p.status === "Ongoing" ? "text-brand-blue" : "text-muted-foreground"}`}>{p.status}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-brand-blue-dark">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.location}</p>
                <div className="mt-4 flex items-center gap-2 text-brand-blue font-semibold group-hover:gap-3 transition-all">
                  View Project Details
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <StatsSection />

      {/* TESTIMONIALS */}
      <section className="py-24 container-px mx-auto max-w-5xl">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-brand-green font-semibold">Testimonials</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand-blue-dark">What clients say</h2>
        </div>
        <div className="mt-14 relative bg-card border rounded-3xl p-10 md:p-14 shadow-card">
          <MessageSquareQuote className="h-12 w-12 text-brand-green/30 absolute top-6 left-6" />
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-brand-green text-brand-green" />)}
            </div>
            <p className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed">
              "{testimonials[tIdx].quote}"
            </p>
            <div className="mt-8">
              <p className="font-bold text-brand-blue-dark">{testimonials[tIdx].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[tIdx].role}</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)} aria-label={`testimonial ${i+1}`} className={`h-2 rounded-full transition-all ${i === tIdx ? "w-8 bg-brand-green" : "w-2 bg-border"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand text-white p-10 md:p-16 text-center shadow-elegant">
          <h2 className="text-3xl md:text-5xl font-bold">Let's Build Your Dream Project</h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg">Get a free consultation and estimate from our construction experts.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="tel:9491249349" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-dark px-7 py-3.5 font-semibold hover:bg-white/90 transition">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <Link to="/quote" className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white px-7 py-3.5 font-semibold hover:bg-white/10 transition">
              Request Quote
            </Link>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
