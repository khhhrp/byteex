export type ProductCardType = {
  icon: string;
  size: string;
  title: string;
  text: string;
  isAccent?: boolean;
};

export const productCards: ProductCardType[] = [
  {
    icon: "basket",
    size: "50",
    title: "You save.",
    text: "Browse our comfort sets and save 15% when you bundle.Browse our comfort sets and save 15% when you bundle.Browse our comfort sets and save 15% when you bundle.Browse our comfort sets and save 15% when you bundle.Browse our comfort sets and save 15% when you bundle.Browse our comfort sets and save 15% when you bundle.Browse our comfort sets and save 15% when you bundle.Browse our comfort sets and save 15% when you bundle."
  },
  {
    icon: "truck",
    size: "50",
    title: "We ship.",
    text: "We ship your items within 1-2 days of receiving your order.",
    isAccent: true
  },
  {
    icon: "sun-moon",
    size: "50",
    title: "You enjoy!",
    text: "Wear hernest around the house, out on the town, or in bed."
  }
];
