

import MotionWrapper from "./MotionWrapper";
import Button from "./Button";
import AnimatedSphere from "./AnimatedSphere";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section 
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center px-4 md:px-6 text-center overflow-hidden bg-white"
    >
      {/* Vanta.js Topology Background */}

      {/* Animated Sphere - Only on Home page, no background image */}
      <AnimatedSphere />
      
      {/* HEADINGS */}
      <div className="mb-6 md:mb-8 relative z-10">
        <MotionWrapper staggerDelay={0}>
          <h1 className="mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-hero font-medium tracking-[0.02em] text-black leading-tight">
            {t('hero.title1')}
          </h1>
        </MotionWrapper>

        <MotionWrapper staggerDelay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-hero font-medium tracking-[0.02em] text-black leading-tight">
            {t('hero.title2')}
          </h1>
        </MotionWrapper>
      </div>

      {/* SUBTEXT */}
      <MotionWrapper className="mt-4 md:mt-6 relative z-10 px-4" staggerDelay={0.4}>
        <p className="max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed">
          {t('hero.subtitle')}
        </p>
      </MotionWrapper>

      {/* BUTTONS */}
      <MotionWrapper className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4 relative z-10 justify-center items-center px-4" staggerDelay={0.6}>
        <Button to="#services" variant="primary">
          {t('hero.exploreServices')}
        </Button>
        <Button to="#contact" variant="secondary">
          {t('hero.getInTouch')}
        </Button>
      </MotionWrapper>
    </section>
  );
}
