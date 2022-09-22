import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;

  height: 820px;
  padding: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: right;

  @media (min-width: 768px) {
    height: 960px;

    font-size: 36px;
    line-height: 44px;
  }
  @media (min-width: 1440px) {
    height: 860px;

    font-size: 40px;
    line-height: 48px;
  }
`;

export const Author = styled.span`
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
  }
`;
