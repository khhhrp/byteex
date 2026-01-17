import firstImage from "../../../src/assets/images/hero01.webp";
import secondImage from "../../../src/assets/images/hero02.webp";
import thirdImage from "../../../src/assets/images/hero03.webp";

export type Item = {
  icon: string;
  size: string;
  text: string;
};

export const images: string[] = [firstImage, secondImage, thirdImage];
export const items: Item[] = [
  {
    icon: "sun-moon",
    size: "20",
    text: "Beautiful, comfortable loungewear for day or night."
  },
  {
    icon: "basket",
    size: "20",
    text: "No wasteful extras, like tags or plastic packaging."
  },
  {
    icon: "wave",
    size: "14",
    text: "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt."
  }
];
