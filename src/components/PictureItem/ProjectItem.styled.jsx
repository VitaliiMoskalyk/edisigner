import styled from "@emotion/styled";
import { Image } from "antd";

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;

  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: right;

  @media (min-width: 768px) {
    margin: 15px;
    font-size: 20px;
    line-height: 29px;
  }

  @media (min-width: 1440px) {
    margin: 20px;
    font-size: 24px;
    line-height: 48px;
  } ;
`;
export const Photo = styled(Image)`
  width: 420px;
  height: 350px;

  @media (min-width: 768px) {
    max-width: 450px;
  }

  @media (min-width: 1440px) {
    max-width: 640px;
  } ;
`;

export const MainImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;
