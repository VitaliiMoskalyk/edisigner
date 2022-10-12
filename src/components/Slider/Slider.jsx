import { Carousel } from "antd";
import "antd/dist/antd.min.css";
import { PictureItem } from "../PictureItem/PictureItem";

const Slider = ({ data }) => {
  return (
    <Carousel autoplay effect="fade" easing="linear" touchMove="true">
      {data.map((d, id) => (
        <PictureItem data={d} key={id} />
      ))}
    </Carousel>
  );
};
export default Slider;
