import styled from "@emotion/styled";

export const Wrapper = styled.header`
  position: fixed;
  top: -1px;
  left: 0%;
  z-index: 3;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;

  color: inherit;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.93) 78%,
    rgba(255, 255, 255, 0.5) 99%
  );

  @media (min-width: 768px) {
    position: sticky;
    top: -1px;
    padding: 30px 0;
  }
`;
