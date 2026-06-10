import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedColorText from "@/components/AnimatedColorText";

const Awards = () => {
  return (
    <>
      <Helmet>
        <title>Awards & Achievements | Resonance Digital</title>
        <meta
          name="description"
          content="Resonance Digital's awards and achievements in VFX, creative technology, and digital innovation."
        />
      </Helmet>

      <Header />

      {/* Hero Section — unchanged */}
      <section className="relative w-full min-h-screen overflow-hidden bg-theme-primaryBg1">
        {/* Background Texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(74,182,255,0.15) 0%, transparent 35%), radial-gradient(circle at 80% 30%, rgba(74,182,255,0.12) 0%, transparent 30%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.05) 0%, transparent 35%)",
          }}
        />

        {/* Header spacing */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent z-10" />

        <div className="relative z-20 max-w-[1600px] mx-auto min-h-screen px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-20 flex flex-col justify-between">
          {/* Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-16 flex-1">
            {/* Left Side */}
            <div className="max-w-[720px]">
              <h1 className="font-display text-[56px] leading-[0.95] md:text-[84px] lg:text-[110px] font-bold text-theme-primaryText tracking-tight mb-8 md:mb-10">
                Awards &<br />
                Achievements
              </h1>

              <div className="max-w-[620px] text-base md:text-xl leading-relaxed">
                <AnimatedColorText
                  whiteText="A leading digital Creative Technology Company, which We"
                  blueText="provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[640px] lg:max-w-[720px]">
                <img
                  src="/assets/images/awards/Awards-01.png"
                  alt="Awards"
                  className="w-full h-auto object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Awards Showcase Image */}
      <section className="relative w-full bg-theme-secondaryBg1 flex flex-col items-center justify-center">
        <div className="w-full px-6 md:px-12 lg:px-20 pt-16 pb-8">
          <h2 className="font-display text-[56px] leading-[0.95] md:text-[84px] lg:text-[110px] font-bold text-theme-primaryText tracking-tight text-center">
            Awards Showcase
          </h2>
        </div>

        <picture>
          <source
            media="(max-width: 768px), (max-aspect-ratio: 4/5)"
            srcSet="/assets/images/awards/awardshowcase-mobile.png"
          />
          <img
            src="/assets/images/awards/awardshowcase.png"
            alt="Awards Showcase"
            className="w-full h-auto block"
          />
        </picture>
      </section>

      {/* 
      Awards Showcase — full viewport height 
      */}
      {/*
      <section className="relative w-full min-h-screen bg-[#100a44] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 15% 30%, rgba(74,182,255,0.07) 0%, transparent 50%), radial-gradient(ellipse at 85% 70%, rgba(74,182,255,0.07) 0%, transparent 50%)",
          }}
        />

        <div className="relative w-full px-10 flex flex-col justify-center gap-0">

          <div className="grid grid-cols-2 h-[42vh]">
            <div className="flex items-center pr-6">
              <AwardCard award={AWARDS[0]} />
            </div>
            <div className="flex items-center pl-6">
              <AwardCard award={AWARDS[1]} />
            </div>
          </div>

          <div className="my-4 h-px bg-gradient-to-r from-transparent via-[#4ab6ff]/25 to-transparent" />

          <div className="grid grid-cols-2 h-[42vh]">
            <div className="flex items-center pr-6">
              <AwardCard award={AWARDS[2]} />
            </div>
            <div className="flex items-center pl-6">
              <AwardCard award={AWARDS[3]} />
            </div>
          </div>

        </div>
      </section>
      */}

      <Footer theme="dark"/>
    </>
  );
};

export default Awards;