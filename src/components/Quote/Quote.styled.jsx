import styled from "@emotion/styled";
import pict from "./mainContent.jpg";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: 90vh;

  padding: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: right;

  color: #fff;

  background-image: url(${pict});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  /* transition: background-position ease-in 30s; */

  :hover,
  :focus {
    /* background-position: bottom; */

    /* transition: background-position ease-in 30s; */
  }

  @media (min-width: 768px) {
    /* height: 960px; */
    /* height: 85vh; */

    font-size: 36px;
    line-height: 44px;
  }
  @media (min-width: 1440px) {
    /* height: 860px; */

    font-size: 40px;
    line-height: 48px;
  }
`;

export const Article = styled.p`
  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: text-shadow ease-in 2s;
  :hover,
  :focus {
    text-shadow: 0px 40px 40px rgba(0, 0, 0, 0.9);
    transition: text-shadow ease-in 2s;
  } */

  @media (min-width: 1440px) {
    max-width: 75%;
    padding: 40px;
  }
`;

export const Author = styled.span`
  font-family: "Gloria Hallelujah", cursive;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  margin-top: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    margin-top: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 29px;
    margin-top: 30px;
    padding: 40px;
  }
`;
