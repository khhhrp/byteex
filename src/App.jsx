import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import HeroSection from "./components/HeroSection/HeroSection";
// import Slider from "./components/Slider/Slider";
// import { useState } from "react";
// import { images, cards } from "./components/Slider/staticContent";

import SvgSprite from "./components/SvgSprite/SvgSprite";
import TopBanner from "./components/TopBanner/TopBanner";
import { getContent } from "./components/TopBanner/staticContent";
import { useMediaQuery } from "react-responsive";

const App = () => {
  // const [slideIndexImages, setSlideIndexImages] = useState(0);
  // const [slideIndexCards, setSlideIndexCards] = useState(0);

  // const card = cards[slideIndexCards];
  // const img = images[slideIndexImages];

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const content = getContent(isMobile);

  return (
    <>
      <SvgSprite />
      <TopBanner text={content} />
      <HeroSection />
      <BenefitsSection />
      {/* <Slider
        startIndex={1}
        onSlideChange={(index) => setSlideIndexCards(index)}
        items={cards}
      >
        <div>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </div>
      </Slider>
      <Slider
        startIndex={1}
        onSlideChange={(index) => setSlideIndexImages(index)}
        items={images}
        showPagination
      >
        <img width="100" height="100" src={img} alt="" />
      </Slider> */}
    </>
  );
};

export default App;
