import { useEffect } from "react";
import { ModalContent, ModalWrapper } from "./Modal.styled";

export const Modal = ({ children, onClose, isOpen }) => {
  useEffect(() => {
    window.addEventListener("keydown", close);
    window.addEventListener("wheel", close);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("wheel", close);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    };
  });

  const close = (e) => {
    if (
      e.target === e.currentTarget ||
      e.code === "Escape" ||
      e.type === "wheel"
    )
      onClose();
  };

  return (
    isOpen && (
      <ModalWrapper onClick={close}>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    )
  );
};
