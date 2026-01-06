const Icon = (props) => {
  const { name, size = 24, className = "" } = props;

  return (
    <svg width={size} height={size} className={className}>
      <use href={`#${name}`} />
    </svg>
  );
};

export default Icon;
