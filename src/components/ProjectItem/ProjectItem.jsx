import { Parallax } from "react-scroll-parallax";
import { Img, Overlay, Discription, Position } from "./ProjectItem.styled";

export const ProjectItem = ({ data, left, right }) => {
  return (
    <Position>
      <div>
        <Overlay left={left} right={right}>
          <Parallax speed={20} scale={[1.2, 1]}>
            <Img src={data.photo} alt="my projects" />
          </Parallax>

          <Discription left={left} right={right}>
            {data.quote}
          </Discription>
        </Overlay>
      </div>
    </Position>
  );
};
