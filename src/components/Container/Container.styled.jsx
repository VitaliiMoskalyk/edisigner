import styled from "@emotion/styled";

export const Section = styled.section`
  background-color: #fff;
  height: fit-content;
`;

export const Box = styled.div`
  padding: 42px 25px;
  min-width: 375px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding: 59px 40px;
    min-width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 119px 100px;
    min-width: 1440px;
  }
`;
