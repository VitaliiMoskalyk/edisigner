import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LinkTo = styled(Link)`
  color: inherit;

  :focus,
  :hover {
    color: grey;
  }
`;

export const Title = styled.h1`
  font-family: "Gloria Hallelujah", cursive;
  margin: 0;
  padding: 2px;
  font-weight: 300;
  font-size: 35px;
  font-style: italic;
  line-height: 42px;
  color: inherit;
`;

export const Upper = styled.span`
  font-weight: 900;
`;
