const Icon = (props) => {
  const { name, size = 24 } = props;

  return (
    <svg width={size} height={size}>
      <use href={`#${name}`} />
    </svg>
  );
};

export default Icon;
