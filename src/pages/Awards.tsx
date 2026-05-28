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

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#05002d]">
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
              <h1 className="font-display text-[56px] leading-[0.95] md:text-[84px] lg:text-[110px] font-bold text-[#4ab6ff] tracking-tight mb-8 md:mb-10">
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

      {/* Awards Showcase Section */}
      <section className="relative w-full bg-[#100a44] py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Row 2 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 border-t border-white/10 pt-12">
            <div className="space-y-8 order-2 md:order-1">
              <div>
                <h3 className="text-[#4ab6ff] text-3xl md:text-4xl font-bold mb-2">
                  FILMFARE
                </h3>
                <p className="text-white/60 text-lg">BEST VFX</p>
                <p className="text-white text-xl">Web Series 2022</p>
              </div>
            </div>
            <div className="relative flex justify-center order-1 md:order-2">
              <img
                src="/assets/images/awards/filmfare-l-bollywood-awards-trophy-11563256379bolcjatcv8.png"
                alt="24 FPS Award"
                className="w-24 md:w-56 lg:w-54 h-auto object-contain"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 border-t border-white/10 pt-12">
            <div className="relative flex justify-center">
              <img
                src="/assets/images/awards/kyoorius-2.png"
                alt="24 FPS Award"
                className="w-24 md:w-26 lg:w-34 h-auto object-contain"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-[#4ab6ff] text-3xl md:text-4xl font-bold mb-2">
                  KYOORIUS
                </h3>
                <p className="text-white/60 text-lg">BEST VFX</p>
                <p className="text-white text-xl">Web Series 2022</p>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 border-t border-white/10 pt-12">
            <div className="space-y-8 order-2 md:order-1">
              <div>
                <h3 className="text-[#4ab6ff] text-3xl md:text-4xl font-bold mb-2">
                  ITA
                </h3>
                <p className="text-white/60 text-lg">BEST VFX</p>
                <p className="text-white text-xl">Web Series 2022</p>
              </div>
            </div>
            <div className="relative flex justify-center order-1 md:order-2">
              <img
                src="/assets/images/awards/ITA_Awards_Trophy.png"
                alt="24 FPS Award"
                className="w-24 md:w-26 lg:w-34 h-auto object-contain"
              />
            </div>
          </div>

          {/* Row 5 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-12">
            <div className="relative flex justify-center">
              <img
                src="/assets/images/awards/24fps_copy.png"
                alt="24 FPS Award"
                className="w-24 md:w-36 lg:w-44 h-auto object-contain"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#4ab6ff] text-3xl md:text-4xl font-bold mb-2">
                    24 FPS
                  </h3>
                  <p className="text-white/60 text-lg">BEST VFX</p>
                </div>
              </div>
              <div>
                <h3 className="text-white/80 text-2xl md:text-3xl font-bold mb-2">
                  BEST VFX
                </h3>
                <p className="text-white text-xl">Web Series 2025</p>
              </div>
              <div>
                <h3 className="text-white/80 text-2xl md:text-3xl font-bold mb-2">
                  BEST VFX
                </h3>
                <p className="text-white text-xl">Web Series 2023</p>
              </div>
              <div>
                <h3 className="text-white/80 text-2xl md:text-3xl font-bold mb-2">
                  BEST VFX
                </h3>
                <p className="text-white text-xl">Web Series 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Awards;
