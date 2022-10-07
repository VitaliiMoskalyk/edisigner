import Svg from "../../utils/Svg/Svg";
import { Wrapper, Link, Article } from "./Contacts.styled";
import { useWindowWidth } from "@react-hook/window-size";

export const Contacts = () => {
  const useWidth = useWindowWidth();

  return (
    <Wrapper>
      <li>
        <Link>
          <Svg icon="icon-instagram" width="48" height="48" />
          {useWidth <= 768 && <Article>дивись фото</Article>}
        </Link>
      </li>
      <li>
        <Link
          href="mailto:eugene.pigulsky@gmail.com"
          placeholder="eugene.pigulsky@gmail.com"
        >
          <Svg icon="icon-gmail" width="48" height="48" />
          {useWidth <= 768 && <Article>напиши лист</Article>}
        </Link>
      </li>
      <li>
        <Link href="tel:+380674800295">
          <Svg icon="icon-smartphone" width="48" height="48" />
          {useWidth <= 768 && <Article>дзвони</Article>}
        </Link>
      </li>
      <li>
        <Link href="t-do.ru/+380674800295">
          <Svg icon="icon-telegram" width="48" height="48" />
          {useWidth <= 768 && <Article>пиши</Article>}
        </Link>
      </li>
      <li>
        <Link>
          <Svg icon="icon-location" width="48" height="48" />
          {useWidth <= 768 && <Article>я тут - Україна, Одеса</Article>}
        </Link>
      </li>
    </Wrapper>
  );
};
