import styled from "@emotion/styled";

export const Section = styled.div`
  background-color: transparent;
  height: fit-content;
`;

export const Box = styled.div`
  padding: 0 25px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding: 0 40px;
    min-width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 0 100px;
    min-width: 1440px;
  }
`;
