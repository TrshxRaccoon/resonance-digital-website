import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedColorText from "@/components/AnimatedColorText";

const AWARDS = [
  {
    id: "fps",
    name: "24 FPS",
    img: "/assets/images/awards/24fps_copy.png",
    alt: "24 FPS Award",
    flip: false,
    items: [
      { label: "BEST VFX", sub: "Web Series 2025" },
      { label: "BEST VFX", sub: "Web Series 2024" },
      { label: "BEST VFX", sub: "Web Series 2023" },
    ],
  },
  {
    id: "filmfare",
    name: "FILMFARE",
    img: "/assets/images/awards/filmfare-l-bollywood-awards-trophy-11563256379bolcjatcv8.png",
    alt: "Filmfare Award",
    flip: true,
    items: [{ label: "BEST VFX", sub: "Web Series 2022" }],
  },
  {
    id: "kyoorius",
    name: "KYOORIUS",
    img: "/assets/images/awards/kyoorius-2.png",
    alt: "Kyoorius Award",
    flip: false,
    items: [{ label: "BEST VFX", sub: "Web Series 2022" }],
  },
  {
    id: "ita",
    name: "ITA",
    img: "/assets/images/awards/ITA_Awards_Trophy.png",
    alt: "ITA Award",
    flip: true,
    items: [{ label: "BEST VFX", sub: "Web Series 2022" }],
  },
];

const AwardCard = ({ award }: { award: (typeof AWARDS)[number] }) => {
  const trophy = (
    // LINE 46 — trophy container width. Change w-[160px] to make trophies wider/narrower.
    <div className="relative w-[160px] flex-shrink-0 flex items-center justify-center">
      <div
        className="
          absolute
          w-[180px]
          h-[180px]
          rounded-full
          bg-[#4ab6ff]/20
          blur-[60px]
        "
      />

      <img
        src={award.img}
        alt={award.alt}
        className="
          relative z-10
          w-full
          h-[30vh]
          object-contain
          transition-transform
          duration-500
          hover:scale-105
        "
      />
    </div>
  );

  const connector = (
    // LINE 58 — connector spacing. Change mx-6 to push trophy/label apart or together.
    <div className="flex items-center flex-shrink-0 self-center mx-6">
      {/* LINE 60 — line length each side of the dot. Change w-8 on both divs. */}
      <div className="w-8 h-[2px] bg-[#4ab6ff]" />
      {/* LINE 62 — dot size. Change w-4 h-4 to resize the circle. */}
      <div className="w-4 h-4 rounded-full border-2 border-[#4ab6ff] bg-[#100a44] flex-shrink-0" />
      <div className="w-8 h-[2px] bg-[#4ab6ff]" />
    </div>
  );

  const label = (
    // LINE 67 — label box padding. Change px-8 py-8 for more/less internal space.
    <div className="flex-1 border border-[#4ab6ff]/30 bg-[#0b0845]/80
                    rounded-2xl px-8 py-8 self-stretch flex flex-col justify-center">
      {/* LINE 70 — award name font size. Change text-4xl to scale the name. */}
      <p className="text-[#4ab6ff] font-extrabold text-4xl tracking-widest leading-none mb-5">
        {award.name}
      </p>
      {/* LINE 73 — gap between award entries. Change gap-4 for more/less spacing. */}
      <div className="flex flex-col gap-4">
        {award.items.map((it, i) => (
          <div key={i} className={i > 0 ? "pt-4 border-t border-white/10" : ""}>
            {/* LINE 76 — entry label font size. Change text-xl to resize BEST VFX text. */}
            <p className="text-white font-bold text-xl leading-tight">
              {it.label}
            </p>
            {it.sub && (
              // LINE 80 — entry sub font size. Change text-lg to resize "Web Series 20XX".
              <p className="text-white/60 text-lg leading-tight">
                {it.sub}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex items-center w-full h-full">
      {award.flip ? (
        <>{label}{connector}{trophy}</>
      ) : (
        <>{trophy}{connector}{label}</>
      )}
    </div>
  );
};

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
<section className="relative w-full bg-black flex flex-col items-center justify-center">
  <div className="w-full px-6 md:px-12 lg:px-20 pt-16 pb-8">
    <h2 className="font-display text-[30px] leading-[0.95] md:text-[40px] lg:text-[65px] font-bold text-theme-primaryText tracking-tight text-left">
      Awards Showcase
    </h2>
  </div>
  <img
    src="/assets/images/awards/awardshowcase.png"
    alt="Awards Showcase"
    className="w-auto max-w-full h-auto max-h-[80vh] block object-contain mx-auto"
  />
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