import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowUpRight } from "lucide-react";

const collaborations = [
  {
    brand: "Global Tech Corp",
    type: "Brand Campaign",
    outcome: "200% engagement increase",
  },
  {
    brand: "Luxury Maison",
    type: "Product Launch",
    outcome: "Award-winning campaign",
  },
  { brand: "Sports League", type: "Broadcast Package", outcome: "10M+ views" },
];

const caseStudies = [
  {
    title: "Redefining Luxury",
    client: "Fashion House",
    description: "A complete brand refresh with cinematic content strategy.",
    image: "",
  },
  {
    title: "The Future of Mobility",
    client: "Auto Manufacturer",
    description: "Product reveal campaign reaching global audiences.",
    image: "",
  },
  {
    title: "Game Day Experience",
    client: "Sports Network",
    description: "Immersive broadcast graphics and motion design.",
    image: "",
  },
];

const showcaseVideos = [
  {
    title: "Campaign Video 1",
    thumbnail: "/assets/images/placeholders/campaign-1.jpg",
  },
  {
    title: "Campaign Video 2",
    thumbnail: "/assets/images/placeholders/campaign-2.jpg",
  },
];

const Brands = () => {
  return (
    <>
      <Helmet>
        <title>Brand Content | Resonance Digital</title>
        <meta
          name="description"
          content="Strategic brand content and campaigns that resonate with audiences worldwide. We create compelling visual narratives for leading brands."
        />
      </Helmet>

      <PageLayout>
        <PageHero
          subtitle="Brands & Content"
          title="Brand Storytelling"
          description="We partner with world-class brands to create content that captivates, converts, and builds lasting connections with audiences."
        />

        {/* Collaborations */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <SectionHeader label="Partnerships" title="Brand Collaborations" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="p-8 border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <span className="text-xs text-primary uppercase tracking-widest">
                  {collab.type}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  {collab.brand}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  {collab.outcome}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <SectionHeader
            label="Featured Work"
            title="Case Studies"
            description="Deep dives into our most impactful brand partnerships."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] mb-6 overflow-hidden rounded-lg relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-1000
            group-hover:scale-110
          "
                  />

                  <div
                    className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            via-black/10
            to-transparent
          "
                  />
                </div>

                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  {study.client}
                </span>

                <h3
                  className="
          mt-2
          font-display
          text-xl
          font-semibold
          text-foreground
          group-hover:text-primary
          transition-colors
          duration-300
        "
                >
                  {study.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Showcase */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <SectionHeader label="Showcase" title="Selected Work" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showcaseVideos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-lg relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-1000
            group-hover:scale-110
          "
                  />

                  <div
                    className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/20
            to-transparent
          "
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="
              w-16
              h-16
              rounded-full
              bg-white/20
              backdrop-blur-sm
              flex
              items-center
              justify-center
              transition-transform
              duration-300
              group-hover:scale-110
            "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-sm tracking-widest uppercase">
                      {video.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Logos */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-secondary/10">
          <SectionHeader
            label="Clients"
            title="Brands We've Worked With"
            align="center"
          />
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mt-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-secondary/30 flex items-center justify-center"
              >
                <span className="text-xs text-muted-foreground">Logo</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-border text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Let's create something remarkable.
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 btn-primary"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </section>
      </PageLayout>
    </>
  );
};

export default Brands;
