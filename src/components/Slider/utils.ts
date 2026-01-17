export const getSlide = (index: number, itemsCount: number) => {
  return {
    next: index === itemsCount ? 0 : index + 1,
    prev: index === 0 ? itemsCount : index - 1
  };
};
