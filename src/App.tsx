import { useMediaQuery } from "react-responsive";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { FaqSection } from "./components/FaqSection/FaqSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { InfoBanner } from "./components/InfoBanner/InfoBanner";
import { SvgSprite } from "./components/SvgSprite/SvgSprite";
import { getContent } from "./components/TopBanner/staticContent";
import { TopBanner } from "./components/TopBanner/TopBanner";

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
      <FaqSection />
      <InfoBanner />
    </>
  );
};
