import cx from "classnames";

const PaginationButton = (props) => {
  const { onClick, isActive, src } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cx("styles.sliderButton", {
        ["active"]: isActive,
      })}
    >
      <img width="100" height="100" src={src} alt="" />
      {isActive && <span>+</span>}
    </button>
  );
};

export default PaginationButton;
