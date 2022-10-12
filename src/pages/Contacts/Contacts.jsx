import Svg from "../../utils/Svg/Svg";
import { Wrapper, Link } from "./Contacts.styled";
// import { useWindowWidth } from "@react-hook/window-size";
// import { Popover } from "antd";

export const Contacts = () => {
  // const useWidth = useWindowWidth();

  return (
    <Wrapper>
      <li>
        <Link href="https://www.instagram.com/EVGdesigner" target="_blank">
          <Svg icon="icon-instagram" width="32" height="32" />
          {/* {useWidth <= 1440 && <Article>дивись фото</Article>} */}
        </Link>
      </li>
      <li>
        <Link
          href="mailto:eugene.pigulsky@gmail.com"
          placeholder="eugene.pigulsky@gmail.com"
        >
          <Svg icon="icon-gmail" width="32" height="32" />
          {/* {useWidth <= 1440 && <Article>напиши лист</Article>} */}
        </Link>
      </li>
      <li>
        <Link href="tel:+380674800295">
          <Svg icon="icon-smartphone" width="32" height="32" />
          {/* {useWidth <= 1440 && <Article>дзвони</Article>} */}
        </Link>
      </li>
      {/* <li>
        <Link href="tg://resolve?domain=MVitalikM">
          <Svg icon="icon-telegram" width="48" height="48" />
          {useWidth <= 1440 && <Article>пиши</Article>}
        </Link>
      </li>
      <li>
        <Link>
          <Popover content="я тут - Україна, Одеса">
            <Svg icon="icon-location" width="48" height="48" />
          </Popover>

          {useWidth <= 1440 && <Article>я тут - Україна, Одеса</Article>}
        </Link>
      </li> */}
    </Wrapper>
  );
};
