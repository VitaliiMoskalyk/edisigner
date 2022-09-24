import { Carousel } from "antd";
import "antd/dist/antd.min.css";
import { ProjectItem } from "../ProjectItem/ProjectItem";

const Slider = ({ data }) => {
  return (
    <Carousel autoplay effect="fade" easing="linear" touchMove="true">
      {data.map((d, id) => (
        <ProjectItem data={d} key={id} />
      ))}
    </Carousel>
  );
};
export default Slider;
