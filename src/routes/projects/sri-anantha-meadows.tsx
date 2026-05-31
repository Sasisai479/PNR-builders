import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Home,
  MapPin,
  Building2,
  Users,
  Layers,
  Maximize2,
  CalendarClock,
  ShieldCheck,
  Trees,
  Waves,
  BookOpen,
  MessageSquare,
  Utensils,
  Bike,
  HeartPulse,
  Gamepad2,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";
import villa from "@/assets/project-villa.jpg";
import apartments from "@/assets/project-apartments.jpg";
import commercial from "@/assets/project-commercial.jpg";
import house from "@/assets/project-house.jpg";

export const Route = createFileRoute("/projects/sri-anantha-meadows")({
  head: () => ({
    meta: [
      {
        title:
          "Sri Anantha Meadows | Luxury Villa Community in Vikarabad | PNR Builders",
      },
      {
        name: "description",
        content:
          "Explore Sri Anantha Meadows, a premium luxury villa community in Vikarabad by PNR Builders featuring modern amenities, spacious villas, landscaped gardens, clubhouse, swimming pool, and excellent connectivity.",
      },
      {
        property: "og:title",
        content: "Sri Anantha Meadows | PNR Builders",
      },
      {
        property: "og:description",
        content:
          "Premium luxury villa community in Vikarabad with modern amenities and excellent connectivity.",
      },
      { property: "og:url", content: "/projects/sri-anantha-meadows" },
    ],
    links: [
      { rel: "canonical", href: "/projects/sri-anantha-meadows" },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const projectOverview = [
    { label: "Project Type", value: "Luxury Villa Community", icon: Home },
    { label: "Location", value: "Vikarabad, Telangana", icon: MapPin },
    { label: "Developer", value: "PNR Builders", icon: Building2 },
    { label: "Total Villas", value: "175", icon: Users },
    { label: "Villa Configuration", value: "G+1 Luxury Villas", icon: Layers },
    { label: "Plot Size", value: "175 Sq. Yards", icon: Maximize2 },
    { label: "Built-up Area", value: "2,327 Sq.ft", icon: Maximize2 },
    { label: "Status", value: "Ongoing", icon: CalendarClock },
  ];

  const projectHighlights = [
    "Premium Gated Community",
    "Grand Entrance Arch",
    "20,000+ Sq.ft Clubhouse",
    "Landscaped Parks & Gardens",
    "Swimming Pool",
    "Children's Play Area",
    "Cycling Track",
    "Outdoor Fitness Area",
    "Indoor Games Room",
    "Library",
    "Conference Room",
    "Banquet Hall",
    "Restaurant",
    "Wide Internal Roads",
    "Vastu Compliant Layout",
    "24/7 Security",
  ];

  const lifestyleAmenities = [
    "Clubhouse",
    "Swimming Pool",
    "Indoor Games Room",
    "Library",
    "Conference Hall",
    "Banquet Hall",
    "Restaurant",
  ];

  const outdoorAmenities = [
    "Children's Play Area",
    "Cycling Track",
    "Jogging Path",
    "Party Lawn",
    "Landscaped Gardens",
    "Outdoor Fitness Zone",
    "Sitting Areas",
  ];

  const locationAdvantages = [
    "Easy access to Vikarabad Town",
    "Near Educational Institutions",
    "Near Hospitals and Healthcare Facilities",
    "Excellent Road Connectivity",
    "Peaceful Natural Environment",
    "High Future Appreciation Potential",
  ];

  const villaSpecs = [
    {
      category: "Structure",
      items: ["RCC Framed Structure", "Red Brick Masonry Walls"],
    },
    {
      category: "Flooring",
      items: ["Premium Vitrified Tiles", "Anti-Skid Bathroom Tiles"],
    },
    {
      category: "Doors & Windows",
      items: ["Teak Wood Main Door", "Premium Internal Doors", "uPVC Windows"],
    },
    {
      category: "Kitchen",
      items: ["Granite Platform", "Stainless Steel Sink", "RO Provision"],
    },
    {
      category: "Electrical",
      items: ["Concealed Copper Wiring", "Modular Switches", "AC Points in Bedrooms", "3 Phase Power Supply"],
    },
  ];

  const galleryImages = [
    { title: "Villa Exterior 1", image: villa },
    { title: "Villa Exterior 2", image: house },
    { title: "Clubhouse", image: commercial },
    { title: "Swimming Pool", image: villa },
    { title: "Landscaped Gardens", image: apartments },
    { title: "Entrance Arch", image: villa },
    { title: "Children's Play Area", image: apartments },
    { title: "Community View", image: villa },
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={villa}
          alt="Sri Anantha Meadows"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 container-px mx-auto max-w-7xl h-full flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold border border-white/30">
                Luxury Villa Community
              </span>
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold border border-white/30">
                Premium Gated Community
              </span>
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold border border-white/30">
                Vastu Compliant
              </span>
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold border border-white/30">
                Ongoing
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Sri Anantha Meadows
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Nature's Hidden Paradise in Vikarabad
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote">
                <Button className="bg-gradient-brand hover:opacity-90 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-elegant">
                  Get Free Quote
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-6 rounded-full text-lg font-semibold border border-white/30"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-20 container-px mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-6 text-center">
            About Project
          </h2>
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sri Anantha Meadows is a premium luxury villa community by PNR Builders located in Vikarabad. Designed to offer a perfect blend of nature and modern living, the project features spacious villas, landscaped open spaces, premium amenities, and excellent connectivity. The community is thoughtfully planned for families seeking a peaceful lifestyle while staying connected to major city conveniences.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 bg-muted">
        <div className="container-px mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-12 text-center"
          >
            Project Overview
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {projectOverview.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                  </div>
                  <p className="text-xl font-bold text-brand-blue-dark">{item.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 container-px mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-12 text-center"
        >
          Key Highlights
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {projectHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-brand-green" />
                <p className="font-semibold text-brand-blue-dark">{highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-muted">
        <div className="container-px mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-12 text-center"
          >
            Amenities
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lifestyle Amenities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-card"
            >
              <h3 className="text-xl font-bold text-brand-blue-dark mb-6 flex items-center gap-2">
                <Home className="w-6 h-6 text-brand-green" />
                Lifestyle Amenities
              </h3>
              <ul className="space-y-3">
                {lifestyleAmenities.map((amenity, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Outdoor Amenities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-card"
            >
              <h3 className="text-xl font-bold text-brand-blue-dark mb-6 flex items-center gap-2">
                <Trees className="w-6 h-6 text-brand-green" />
                Outdoor Amenities
              </h3>
              <ul className="space-y-3">
                {outdoorAmenities.map((amenity, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-20 container-px mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-12 text-center"
        >
          Location Advantages
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl p-8 shadow-card">
            <ul className="space-y-4">
              {locationAdvantages.map((advantage, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-brand-blue-dark">
                    {advantage}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-3xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15236.3!2d77.87!3d17.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2s8WCC%2BQF%2C%20Vikarabad%2C%20Telangana%20501102%2C%20India!5e0!3m2!1sen!2sin!4v1717088400000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
              className="min-h-[400px] w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Villa Specifications */}
      <section className="py-20 bg-muted">
        <div className="container-px mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-12 text-center"
          >
            Villa Specifications
          </motion.h2>
          <div className="bg-card rounded-3xl p-6 md:p-10 shadow-card">
            <Accordion type="single" collapsible className="w-full">
              {villaSpecs.map((spec, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-lg font-semibold text-brand-blue-dark py-4">
                    {spec.category}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-muted-foreground pl-4">
                      {spec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Villa Layout */}
      <section className="py-20 container-px mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-12 text-center"
        >
          Villa Details
        </motion.h2>
        <Tabs defaultValue="east" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="east">East Facing Villa</TabsTrigger>
            <TabsTrigger value="west">West Facing Villa</TabsTrigger>
          </TabsList>
          <TabsContent value="east">
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-blue-dark mb-4">
                    East Facing Villa
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green font-semibold">
                        Plot Area:
                      </span>
                      175 Sq. Yards
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green font-semibold">
                        Ground Floor:
                      </span>
                      1047.37 Sq.ft
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green font-semibold">
                        First Floor:
                      </span>
                      1047.37 Sq.ft
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green font-semibold">
                        Head Room:
                      </span>
                      232.37 Sq.ft
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green font-semibold">
                        Total Built-up Area:
                      </span>
                      2327.11 Sq.ft
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-2xl flex items-center justify-center min-h-[300px] overflow-hidden">
                  <img
                    src={house}
                    alt="East Facing Villa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="west">
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-blue-dark mb-4">
                    West Facing Villa
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green font-semibold">
                        Plot Area:
                      </span>
                      175 Sq. Yards
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green font-semibold">
                        Ground Floor:
                      </span>
                      1047.37 Sq.ft
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green font-semibold">
                        First Floor:
                      </span>
                      1047.37 Sq.ft
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green font-semibold">
                        Head Room:
                      </span>
                      232.37 Sq.ft
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green font-semibold">
                        Total Built-up Area:
                      </span>
                      2327.11 Sq.ft
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-2xl flex items-center justify-center min-h-[300px] overflow-hidden">
                  <img
                    src={villa}
                    alt="West Facing Villa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted">
        <div className="container-px mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-12 text-center"
          >
            Gallery
          </motion.h2>
          <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, idx) => {
              const heights = [
                "h-48",
                "h-64",
                "h-56",
                "h-72",
                "h-60",
                "h-80",
                "h-52",
                "h-68",
              ];
              const heightClass = heights[idx % heights.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="break-inside-avoid rounded-2xl overflow-hidden shadow-card group"
                >
                  <div className={`${heightClass} relative overflow-hidden`}>
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-semibold">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 container-px mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-16 text-center shadow-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg mb-8">
              Discover luxury living at Sri Anantha Meadows. Contact PNR Builders today to schedule a site visit and explore available villa options.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:9491249349" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-blue-dark px-8 py-6 font-semibold hover:bg-white/90 transition shadow-elegant">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link to="/quote" className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white px-8 py-6 font-semibold hover:bg-white/10 transition">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
