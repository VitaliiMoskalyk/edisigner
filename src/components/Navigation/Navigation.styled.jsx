import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  width: 50%;
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavigateLink = styled(NavLink)`
  color: inherit;

  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
`;
