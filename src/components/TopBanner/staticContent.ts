type Content = {
  mobile: string;
  desktop: string;
};

export const content: Content = {
  mobile: "FREE SHIPPING on orders > $200",
  desktop:
    "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | easy 45 day return window."
};

export const getContent = (isMobile: boolean): string => {
  return isMobile ? content.mobile : content.desktop;
};
