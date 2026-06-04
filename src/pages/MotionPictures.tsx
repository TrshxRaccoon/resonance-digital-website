import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import FixedHero from "@/components/FixedHero";

const showreels = [
  {
    title: "Master Showreel",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    title: "Commercial Showreel",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    title: "Documentary Showreel",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
];

const MotionPictures = () => {
  return (
    <>
      <Helmet>
        <title>Motion Pictures | Resonance Digital</title>
        <meta
          name="description"
          content="Motion picture creative and production services by Resonance Digital."
        />
      </Helmet>

      <Header />

      <FixedHero
        backgroundImage="/assets/images/motionPictures/motionpicturesbg.jpeg"
        title="Motion Pictures"
        description={
          <AnimatedColorText
            whiteText="A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are search"
            blueText="able, alongside other online promotion solutions in Coventry. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
          />
        }
      />

      {/* Motion Picture Showcase */}
      <section className="w-full bg-[#080032] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-normal text-white mb-12">
          Motion Picture <span className="text-gray-400">|</span>{" "}
          <span className="font-bold text-white">Showcase</span>
        </h2>

          <div className="space-y-20">
            {showreels.map((showreel) => (
              <div key={showreel.title} className="w-full">
                <h3 className="text-[#f2eee2] text-xl md:text-2xl font-gotham-bold mb-6">
                  {showreel.title}
                </h3>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                  <iframe
                    src={showreel.embedUrl}
                    title={showreel.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer theme="dark" />
    </>
  );
};

export default MotionPictures;