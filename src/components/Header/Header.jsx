import Svg from "../Svg/Svg";
import { Logo } from "../../components/Logo/Logo";
import { Wrapper } from "./Header.styled";
import { useWindowWidth } from "@react-hook/window-size";
import { Navigation } from "../../components/Navigation/Navigation";
import { Outlet } from "react-router";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { useSpring, animated } from "react-spring";
import { Parallax } from "react-scroll-parallax";

const Header = () => {
  const screenWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState();

  const props = useSpring({
    to: { rotateZ: 0 },
    from: { rotateZ: 360 },
    reset: true,
    delay: 0,
  });
  // const props2 = useSpring({
  //   to: { rotateY: 0 },
  //   from: { rotateY: 360 },
  //   reset: true,
  //   delay: 17000,
  //   loop: { reverse: true },
  //   config: {
  //     duration: 1000,
  //     easing: easings.easeInSine,
  //   },
  // });
  return (
    <>
      <Wrapper isOpen={isOpen}>
        <animated.div style={{ display: "flex" }}>
          <Parallax translateX={[50, 0]}>
            <Logo title="Evg Designer "></Logo>
          </Parallax>
        </animated.div>
        {screenWidth >= 768 ? (
          <Navigation />
        ) : isOpen ? (
          <animated.div style={props}>
            <Svg
              icon="icon-close"
              width="48"
              height="42"
              fill="#000"
              onClick={() => setIsOpen(!isOpen)}
            />
          </animated.div>
        ) : (
          <animated.div style={props}>
            <Svg
              icon="icon-menu-right"
              width="48"
              height="42"
              onClick={() => setIsOpen(!isOpen)}
            />
          </animated.div>
        )}
      </Wrapper>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Navigation
            onClose={() => {
              setIsOpen(false);
            }}
          />
        </Modal>
      )}

      <Outlet />
    </>
  );
};

export default Header;
