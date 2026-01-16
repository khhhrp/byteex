import { useMediaQuery } from "react-responsive";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { SvgSprite } from "./components/SvgSprite/SvgSprite";
import { TopBanner } from "./components/TopBanner/TopBanner";
import { getContent } from "./components/TopBanner/staticContent";

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
