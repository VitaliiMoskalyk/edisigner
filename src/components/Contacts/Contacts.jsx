import Svg from "../Svg/Svg";
import { Wrapper, Link } from "./Contacts.styled";

export const Contacts = () => {
  return (
    <Wrapper>
      <li>
        <Link href="https://www.instagram.com/EVGdesigner" target="_blank">
          <Svg icon="icon-instagram" width="32" height="32" />
        </Link>
      </li>
      <li>
        <Link
          href="mailto:eugene.pigulsky@gmail.com"
          placeholder="eugene.pigulsky@gmail.com"
        >
          <Svg icon="icon-gmail" width="32" height="32" />
        </Link>
      </li>
      <li>
        <Link href="tel:+380674800295">
          <Svg icon="icon-smartphone" width="32" height="32" />
        </Link>
      </li>
    </Wrapper>
  );
};
