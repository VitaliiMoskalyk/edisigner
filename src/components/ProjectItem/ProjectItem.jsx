import {
  Article,
  Img,
  Overlay,
  Discription,
  Position,
} from "./ProjectItem.styled";

export const ProjectItem = ({ data, left, right }) => {
  return (
    <Position>
      <div>
        <Overlay left={left} right={right}>
          <Img src={data.photo} alt="my projects" />
          <Discription left={left} right={right}>
            {data.quote}
          </Discription>
        </Overlay>
      </div>
    </Position>
  );
};
