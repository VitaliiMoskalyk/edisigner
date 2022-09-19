import styled from "@emotion/styled";

export const Section = styled.section`
  background-color: #fff;
  height: fit-content;
  /* width: 414px;
  margin-right: auto;
  margin-left: auto; */
`;

export const Box = styled.div`
  padding: 0 25px;
  width: 375px;

  @media (min-width: 768px) {
    padding: 10px 40px;
    width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 40px 100px;
    width: 1440px;
  }

  margin-left: auto;
  margin-right: auto;
`;
