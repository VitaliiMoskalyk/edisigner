// import { Carousel } from "antd";
import "antd/dist/antd.min.css";
import { PictureItem } from "../PictureItem/PictureItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const collection = [];
  data.flatMap((d) => collection.push(...d.collection));

  return (
    <Carousel
      responsive={responsive}
      autoPlay
      autoPlaySpeed={6000}
      rewind={true}
      rewindWithAnimation
      arrows={false}
      customTransition="all s ease-out"
      swipeable
    >
      {collection
        .sort(() => Math.random() - 0.5)
        .map((d, id) => (
          <PictureItem src={d} key={id} />
        ))}
    </Carousel>
  );
};
export default Slider;
