const content = {
  mobile: "FREE SHIPPING on orders > $200",
  desktop:
    "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | easy 45 day return window.",
};

export const getContent = (isMobile) => {
  return isMobile ? content.mobile : content.desktop;
};
