import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import FixedHero from "@/components/FixedHero";

const showcaseImages = [
  "/assets/images/motionPictures/AyodhyaSS3.jpg",
  "/assets/images/motionPictures/CHHSS2.jpg",
  "/assets/images/motionPictures/UHC2.png",
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
        backgroundImage="/assets/images/motionPictures/motionpicturesBg.jpg"
        title="Motion Pictures"
        description={
          <AnimatedColorText
            whiteText="A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are search"
            blueText="able, alongside other online promotion solutions in Coventry. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
          />
        }
      />

      {/* Motion Picture Showcase */}
      <section className="w-full bg-theme-primaryBg2 py-20">
        <div className="px-6 md:px-12 lg:px-20">
          <h2 className="font-display text-3xl md:text-4xl font-normal text-theme-secondaryText mb-12">
            Motion Picture <span className="text-theme-primaryText">|</span>{" "}
            <span className="font-bold text-theme-secondaryText">Showcase</span>
          </h2>
        </div>

        <div className="space-y-0">
          {showcaseImages.map((image, index) => (
            <div
              key={image}
              className={`w-full ${index % 2 === 0 ? "bg-theme-primaryBg2" : "bg-theme-secondaryBg2"} py-12 md:py-16 px-0`}
            >
              <div className="w-full flex justify-center">
                <img
                  src={image}
                  alt={`Motion Pictures Showcase ${index + 1}`}
                  className="block w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer theme="light" />
    </>
  );
};

export default MotionPictures;