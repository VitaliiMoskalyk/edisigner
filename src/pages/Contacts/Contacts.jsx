import Svg from "../../utils/Svg/Svg";
import { Wrapper } from "./Contacts.styled";

export const Contacts = () => {
  return (
    <Wrapper>
      <Svg icon="icon-instagram" width="58" height="58" />
      <Svg icon="icon-gmail" width="58" height="58" />
      <Svg icon="icon-smartphone" width="58" height="58" />
      <Svg icon="icon-telegram" width="58" height="58" />
      <Svg icon="icon-location" width="58" height="58" />
    </Wrapper>
  );
};
