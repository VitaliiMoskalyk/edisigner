import styled from "@emotion/styled";

export const Wrapper = styled.header`
  position: fixed;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
  min-width: 375px;

  @media (min-width: 768px) {
    padding: 10px 40px;
    min-width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 40px 100px;
    min-width: 1440px;
  }

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.93) 78%,
    rgba(255, 255, 255, 0.5) 99%
  );
`;
