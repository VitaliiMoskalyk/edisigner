import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LinkTo = styled(Link)`
  color: inherit;
  :focus,
  :hover {
    color: grey;
  }
`;

export const Title = styled.span`
  font-family: "Gloria Hallelujah", cursive;
  margin: 0;
  letter-spacing: normal;
  font-weight: 300;
  font-size: 24px;
  color: inherit;
`;
