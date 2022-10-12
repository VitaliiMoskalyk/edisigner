import { PictureItem } from "../PictureItem/PictureItem";
import { Wrapper } from "./PicturesList.styled";

export const PicturesList = ({ data }) => {
  return (
    <Wrapper>
      {data.map((el, id) => (
        <PictureItem data={el} key={id} />
      ))}
    </Wrapper>
  );
};
