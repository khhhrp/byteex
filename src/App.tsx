import { useMediaQuery } from "react-responsive";
import { SvgSprite } from "./components/SvgSprite/SvgSprite";
import { getContent } from "./components/TopBanner/staticContent";
import { TopBanner } from "./components/TopBanner/TopBanner";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { AboutSection } from "./components/AboutSection/AboutSection";

export const App = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  });

  const content = getContent(isMobile);

  return (
    <>
      <SvgSprite />
      <TopBanner text={content} />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
    </>
  );
};
