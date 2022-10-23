import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  padding: 24px;
  background-color: white;
  box-shadow: -18px 20px 59px -7px rgba(0, 0, 0, 0.48);

  max-width: 265px;
`;
