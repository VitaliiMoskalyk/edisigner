import { Title, Upper, LinkTo } from "./Logo.styled";
import { useWindowWidth } from "@react-hook/window-size";

export const Logo = ({ title }) => {
  const screenWidth = useWindowWidth();

  let full = title
    .split("")
    .map((e, i) => (e === e.toUpperCase() ? <Upper key={i}>{e}</Upper> : e));
  let upper = title
    .split("")
    .map((e, i) => e === e.toUpperCase() && <Upper key={i}>{e}</Upper>);

  return (
    <LinkTo to="/">
      <Title>{screenWidth >= 768 ? full : upper[0] ? upper : title[0]}</Title>
    </LinkTo>
  );
};
