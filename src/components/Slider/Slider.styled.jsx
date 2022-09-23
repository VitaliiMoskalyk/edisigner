import styled from "@emotion/styled";

export const Img = styled.img`
  height: 380px;

  @media (min-width: 768px) {
    height: 625px;
  }
  @media (min-width: 1440px) {
    height: 680px;
  }
`;

export const Article = styled.p`
  padding: 10px;
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  margin-top: 15px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    margin-top: 20px;
  }
`;
