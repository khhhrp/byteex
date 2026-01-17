import { memo } from "react";

type Props = {
  name: string;
  size?: string;
};

export const Icon = memo((props: Props) => {
  const { name, size = "24" } = props;

  return (
    <svg width={size} height={size}>
      <use href={`#${name}`} />
    </svg>
  );
});
