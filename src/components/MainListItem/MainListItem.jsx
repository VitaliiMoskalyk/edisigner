import { ImgWrapper, Overlay, Article, Img } from "./MainListItem.styled";

export const MainListItem = ({ element, black = false }) => {
  const { photo, quote } = element;

  return (
    <Overlay>
      <ImgWrapper>
        <Img src={photo} alt="design" width="100%" />
      </ImgWrapper>

      <Article black={black}>{quote}</Article>
    </Overlay>
  );
};
