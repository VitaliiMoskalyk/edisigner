import BubbleItem from "../BubbleItem/BubbleItem";
import { Container } from "../Container/Container";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <Container>
      <LoaderWrapper>
        <BubbleItem>Loading...</BubbleItem>
      </LoaderWrapper>
    </Container>
  );
};

export default Loader;
