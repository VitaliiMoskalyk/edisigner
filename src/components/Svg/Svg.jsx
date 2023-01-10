import sprite from "../../assets/sprite/sprite.svg";

const Svg = ({ width, height, icon = "", fill = "", onClick }) => {
  return (
    <svg width={width} height={height} fill={fill} onClick={onClick}>
      <use href={`${sprite}#${icon}`}></use>
    </svg>
  );
};

export default Svg;
