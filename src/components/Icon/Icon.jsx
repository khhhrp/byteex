import { memo } from "react";

export const Icon = memo((props) => {
  const { name, size = 24 } = props;

  return (
    <svg width={size} height={size}>
      <use href={`#${name}`} />
    </svg>
  );
});
