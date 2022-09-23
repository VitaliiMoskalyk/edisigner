import { Carousel } from "antd";
import "antd/dist/antd.min.css";
import { Article, Img } from "./Slider.styled";

const Slider = ({ data }) => (
  <Carousel
    autoplay
    effect="fade"
    easing="linear"
    touchMove="true"
    autoplaySpeed="30"
  >
    {data.map((d, id) => (
      <div key={id}>
        <Img src={d.photo} alt="my projects" />
        <Article>{d.title}</Article>
      </div>
    ))}
  </Carousel>
);

export default Slider;
