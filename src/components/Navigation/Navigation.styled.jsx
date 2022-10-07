import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  width: 50%;
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: space-evenly;
`;

export const NavigateLink = styled(NavLink)`
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
