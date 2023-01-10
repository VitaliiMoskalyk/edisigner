import BubbleItem from "../BubbleItem/BubbleItem";
import { TitleBlock, Wrapper } from "./PictureItem.styled";

export const PictureItem = ({ src, title, onClick }) => {
  return (
    <figure>
      <picture>
        <source />
        <img
          src={src}
          // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt="design project"
          loading="lazy"
          onClick={onClick}
          width="100%"
        />
      </picture>

      {title && (
        <TitleBlock onClick={onClick}>
          <Wrapper>
            <BubbleItem focus="false">{title}</BubbleItem>
          </Wrapper>
        </TitleBlock>
      )}
    </figure>
  );
};
