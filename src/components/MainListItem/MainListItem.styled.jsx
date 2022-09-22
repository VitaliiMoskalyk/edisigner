import styled from "@emotion/styled";

export const ImgWrapper = styled.div`
  width: 100%;
  max-height: 538px;
  overflow: hidden;

  @media (min-width: 768px) {
    max-height: 660px;
  }
  @media (min-width: 1440px) {
    max-height: 935px;
  }
`;

export const Overlay = styled.div`
  position: relative;
`;

export const Article = styled.p`
  padding: 10px 10px 10px 40px;

  text-align: right;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;

  @media (min-width: 768px) {
    position: absolute;
    z-index: 1;
    top: 70%;
    right: 0;

    width: 603px;
    height: 317px;
    padding: 40px 40px 40px 60px;

    background: rgba(255, 252, 252, 0.6);
    backdrop-filter: blur(2px);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-size: 24px;
    line-height: 29px;
    text-align: center;

    ${(props) => props.black}&& {
      left: 0;
      padding: 60px 40px 40px 40px;
      background: rgba(1, 1, 1, 0.6);
      backdrop-filter: blur(2px);
      color: #ffffff;
    }
  }

  @media (min-width: 1440px) {
    padding: 60px 60px 60px 120px;
    ${(props) => props.black}&& {
      padding: 120px 60px 60px 60px;
    }
    width: 1143px;
    height: 446px;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
  }
`;

export const Img = styled.img``;
