import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;

  /* top: 0; */
  left: 0;

  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.4);
  /* overflow-y: auto; */
  z-index: 2;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  width: 100%;
  max-width: 365px;

  padding: 24px;
  background-color: black;
  color: white;
`;
