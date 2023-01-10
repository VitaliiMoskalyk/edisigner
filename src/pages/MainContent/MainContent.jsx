import { MainList } from "../../components/MainList/MainList";
import { Wall } from "../../components/Wall/Wall";
import { data } from "../../data/mainPageContent";
import { Container } from "../../components/Container/Container";
import { lazy } from "react";
import { NavigateLink } from "../../components/Navigation/Navigation.styled";
import { easings, useSpring, animated } from "react-spring";
import { Logo } from "../../components/Logo/Logo";

const Header = lazy(() => import("../../components/Header/Header"));
const BubbleItem = lazy(() => import("../../components/BubbleItem/BubbleItem"));

const MainContent = () => {
  const props = useSpring({
    to: [{ scale: 1 }],

    from: { scale: 2.5 },
    reset: false,

    delay: 0,
    config: {
      duration: 1000,
      easing: easings.easeInQuad,
    },
  });

  const props2 = useSpring({
    to: [{ y: 0 }],

    from: { y: 900 },
    reset: false,

    delay: 500,
    config: {
      duration: 2000,
      easing: easings.easeInQuad,
    },
  });

  // const props3 = useSpring({
  //   to: [{ y: 0 }],

  //   from: { y: 900 },
  //   reset: false,

  //   delay: 1500,
  //   config: {
  //     duration: 2000,
  //     easing: easings.easeInQuad,
  //   },
  // });

  return (
    <>
      <Wall>
        <animated.div style={props}>
          <BubbleItem focus="false">
            <Logo title="EvgDesigner" />
          </BubbleItem>
        </animated.div>
        <animated.div style={props2}>
          <BubbleItem>
            <NavigateLink to="/projects">Проєкти</NavigateLink>
          </BubbleItem>
        </animated.div>

        {/* <animated.div style={props3}>
          <BubbleItem>
            <NavigateLink to="/about">Про мене</NavigateLink>
          </BubbleItem>
        </animated.div> */}
        {/* <BubbleItem /> */}
      </Wall>

      <Header />

      <Container>
        <MainList data={data} position="chess" />
      </Container>
    </>
  );
};

export default MainContent;
