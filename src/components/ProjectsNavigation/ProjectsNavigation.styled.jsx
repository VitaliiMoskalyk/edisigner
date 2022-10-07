import styled from "@emotion/styled";

export const Overlay = styled.div`
  text-align: right;
  font-style: italic;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;

  color: #020202;
  margin-top: 109px;
  margin-bottom: 52px;
  @media (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 60px;

    font-size: 24px;
    line-height: 29px;
  }
`;

export const Link = styled.a`
  padding: 5px 5px;

  color: inherit;
  text-decoration: underline;
  :hover,
  :focus {
    color: grey;
  }
`;
