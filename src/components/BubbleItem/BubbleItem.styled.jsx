import styled from "@emotion/styled";

export const BubbleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-bottom: 150px;
  cursor: pointer;
`;

export const FirstBubble = styled.div`
  position: absolute;

  width: 50px;
  height: 50px;
  border-radius: 60%;
  background-color: #fff;
  opacity: 0.5;

  filter: blur(1px);
`;

export const SecondBubble = styled.div`
  position: absolute;

  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;

  filter: blur(2px);
`;

export const ThirdBubble = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  padding: 10px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.6;
  transition: opacity 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: border-radius 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  ${(props) => props.focus}&& {
    :hover,
    :focus {
      width: 50vmax;
      border-radius: 80px 10px 10px 80px;

      opacity: 0.8;

      transition: opacity 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      transition: width 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
`;

export const NavigateLink = styled.div`
  color: inherit;
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
  line-height: 39px;
  :hover,
  :focus {
    color: grey;
  }
`;
