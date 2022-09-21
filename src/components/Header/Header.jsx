import Svg from "../../utils/Svg/Svg";
import { Logo } from "../Logo/Logo";
import { Wrapper } from "./Header.styled";
import { useWindowWidth } from "@react-hook/window-size";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  const screenWidth = useWindowWidth();
  return (
    <Wrapper>
      <Logo title="EvgDesigner" />
      {screenWidth > 1440 ? (
        <Navigation />
      ) : (
        <Svg icon="icon-menu-right" width="48" height="42" />
      )}
    </Wrapper>
  );
};
