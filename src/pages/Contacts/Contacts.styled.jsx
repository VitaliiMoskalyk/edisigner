import styled from "@emotion/styled";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;

  flex-direction: column;
  margin-top: 150px;

  @media (min-width: 1440px) {
    flex-direction: row;
    /* position: fixed;
    right: 0;
    bottom: 0;
    z-index: 2; */
    /* transform: translateX(-50%); */
    margin: 0;

    background: linear-gradient(
      360deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.73) 78%,
      rgba(255, 255, 255, 0.3) 99%
    );
  }

  li {
    margin-bottom: 50px;
    @media (min-width: 1440px) {
      margin: 0 0 0 25px;
    }
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;

  font-style: italic;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;

  color: #000000;
  :hover,
  :focus {
    fill: grey;
  }
`;

export const Article = styled.div`
  display: inline-block;
  margin-left: 32px;
`;
