export type Card = {
  icon: string;
  size: string;
  title: string;
  text: string;
};

export const cardsStatic: Card[] = [
  {
    icon: "cloud",
    size: "26",
    title: "Ethically sourced.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat."
  },
  {
    icon: "sun-moon",
    size: "26",
    title: "Responsibly made.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat."
  },
  {
    icon: "leaf",
    size: "26",
    title: "Made for living in.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat."
  },
  {
    icon: "wave",
    size: "22",
    title: "Unimaginably comfortable.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat."
  }
];
