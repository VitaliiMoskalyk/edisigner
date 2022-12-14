import { Wrapper, Layout, MenuBlock } from "./Wall.styled";
import { useSpring, animated, easings } from "react-spring";
import { useWindowWidth } from "@react-hook/window-size";

export const Wall = ({ children }) => {
  const windowWidth = useWindowWidth();
  const props = useSpring({
    to: [
      { scale: 1.08, x: 20 },
      { scale: 1, x: 0 },
      { scale: 1.01, x: -10 },
      { scale: 1, x: 0 },
    ],

    from: { scale: 1, x: 0 },
    reset: false,
    loop: true,

    // delay: 1000,
    config: {
      duration: 23000,
      easing: easings.easeInQuad,
    },
  });

  return (
    <Layout>
      {windowWidth >= 768 && <MenuBlock>{children}</MenuBlock>}

      <animated.div style={props}>
        <Wrapper />
      </animated.div>
    </Layout>
  );
};
