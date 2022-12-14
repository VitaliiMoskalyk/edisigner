import styled from "@emotion/styled";

export const Position = styled.div`
  position: relative;
  margin: 100px 0;
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;

  /* height: 250px; */

  overflow: hidden;

  ${(props) => props.left}&& {
    justify-content: flex-start;
  }
  ${(props) => props.right}&& {
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    /* height: 320px; */
  }
  @media (min-width: 1440px) {
    /* height: 580px; */
  }
`;

export const Img = styled.img`
  width: 400px;

  @media (min-width: 768px) {
    width: 734px;
  }
  @media (min-width: 1440px) {
    width: 940px;
  }
`;

export const Article = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  margin-top: 15px;
  padding: 10px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    margin-top: 20px;
  }
`;

export const Discription = styled.p`
  padding: 10px 5px 10px 10px;

  text-align: center;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  max-width: 80%;

  position: absolute;
  z-index: 1;
  top: 80%;

  ${(props) => props.left}&& {
    right: 0;
    background: rgba(1, 1, 1, 0.6);
    backdrop-filter: blur(2px);
    color: #ffffff;
  }
  ${(props) => props.right}&& {
    left: 0;
    background: rgba(255, 252, 252, 0.6);
    backdrop-filter: blur(2px);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 768px) {
    max-width: 560px;
    padding: 20px 10px 20px 20px;

    font-size: 24px;
    line-height: 29px;
    text-align: center;
  }

  @media (min-width: 1440px) {
    padding: 40px 40px 40px 80px;
    max-width: 843px;

    ${(props) => props.left}&& {
      padding: 40px 80px 40px 40px;
    }

    font-size: 36px;
    line-height: 40px;
    text-align: center;
  }
`;
