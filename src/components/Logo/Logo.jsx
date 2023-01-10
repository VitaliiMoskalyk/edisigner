import { Title, LinkTo } from "./Logo.styled";
import { useWindowWidth } from "@react-hook/window-size";
import TitleSlicer from "../../utils/TitleSlicer/TitleSlicer";

export const Logo = ({ title }) => {
  const screenWidth = useWindowWidth();

  return (
    <LinkTo to="/">
      <Title>{TitleSlicer(title, screenWidth)}</Title>
    </LinkTo>
  );
};
