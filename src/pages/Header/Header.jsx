import Svg from "../../utils/Svg/Svg";
import { Logo } from "../../components/Logo/Logo";
import { Wrapper } from "./Header.styled";
import { useWindowWidth } from "@react-hook/window-size";
import { Navigation } from "../../components/Navigation/Navigation";
// import { Container } from "../../components/Container/Container";
import { Outlet } from "react-router";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
// import { Contacts } from "../Contacts/Contacts";

export const Header = () => {
  const screenWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper isOpen={isOpen}>
        <Logo title="EvgDesigner" />
        {screenWidth > 768 ? (
          <Navigation />
        ) : isOpen ? (
          <Svg
            icon="icon-close"
            width="48"
            height="42"
            fill="#000"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <Svg
            icon="icon-menu-right"
            width="48"
            height="42"
            onClick={() => setIsOpen(!isOpen)}
          />
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
          {/* <Contacts /> */}
        </Modal>
      )}
      {/* <Container> */}
      <Outlet />
      {/* </Container> */}
    </>
  );
};
