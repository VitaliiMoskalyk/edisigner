import { Wrapper, Text, Author } from "./Quote.styled";

export const Quote = ({ quote, author }) => {
  return (
    <Wrapper>
      <Text>{quote}</Text>
      <Author>{author}</Author>
    </Wrapper>
  );
};
