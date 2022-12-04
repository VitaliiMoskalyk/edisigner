import {
  BubbleWrapper,
  FirstBubble,
  SecondBubble,
  ThirdBubble,
} from "./BubbleItem.styled";
import { useSpring, animated, easings } from "react-spring";

const BubbleItem = ({ children }) => {
  const props = useSpring({
    to: [
      { x: 60, y: 35, scale: 1.5 },
      { x: 45, y: 0, scale: 1 },
    ],

    from: { x: 45, y: 0, scale: 1 },
    reset: true,
    loop: true,

    delay: 1000,
    config: {
      duration: 8000,
      easing: easings.easeInQuad,
    },
  });
  const props2 = useSpring({
    to: [
      { x: 50, y: 55, scale: 1.3 },
      { x: 45, y: 45, scale: 1 },
    ],

    from: { x: 45, y: 45, scale: 1 },
    reset: true,
    loop: true,

    delay: 500,
    config: {
      duration: 6000,
      easing: easings.easeInQuad,
    },
  });

  const props3 = useSpring({
    to: [
      { x: 0, y: 0, scale: 1 },
      { x: 0, y: 0, scale: 1 },
    ],

    from: { x: 0, y: 0, scale: 1 },
    reset: true,
    loop: true,

    delay: 800,
    config: {
      duration: 10000,
      easing: easings.easeInQuad,
    },
  });
  return (
    <BubbleWrapper>
      <animated.div style={props}>
        <FirstBubble />
      </animated.div>
      <animated.div style={props2}>
        <SecondBubble />
      </animated.div>
      <animated.div style={props3}>
        <ThirdBubble>
          <div>{children}</div>
        </ThirdBubble>
      </animated.div>
    </BubbleWrapper>
  );
};

export default BubbleItem;
