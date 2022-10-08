import { useEffect } from "react";
import { ModalContent, ModalWrapper } from "./Modal.styled";

export const Modal = ({ children, onClose, isOpen }) => {
  useEffect(() => {
    window.addEventListener("keydown", close);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", close);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    };
  });

  const close = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") onClose();
  };

  return (
    isOpen && (
      <ModalWrapper onClick={close}>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    )
  );
};
