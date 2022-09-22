import { Wrapper, Author } from "./Quote.styled";

export const Quote = ({ quote, author }) => {
  return (
    <Wrapper>
      <p>{quote}</p>
      <Author>{author}</Author>
    </Wrapper>
  );
};
