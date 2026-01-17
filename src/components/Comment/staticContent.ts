import avatarImage from "../../../src/assets/images/avatar.webp";

export const img: string = avatarImage;

type Content = {
  mobile: {
    name: string;
    text: string;
  };
  desktop: {
    name: string;
    text: string;
  };
};

export const content: Content = {
  mobile: {
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo."
  },
  desktop: {
    name: "Amy P.",
    text: "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them. "
  }
};

export const getContent = (isMobile: boolean): Content["mobile"] => {
  return isMobile ? content.mobile : content.desktop;
};

export const starsArr: null[] = new Array(5).fill(null);
