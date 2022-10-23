import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    height: auto;
  }
`;

export const NavigateLink = styled(Link)`
  color: inherit;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 39px;
  :hover,
  :focus {
    color: grey;
  }
`;
