import { Wrapper, Author, Article } from "./Quote.styled";

export const Quote = ({ quote, author }) => {
  return (
    <Wrapper>
      <Article>{quote}</Article>
      <Author>{author}</Author>
    </Wrapper>
  );
};
