import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  width: fit-content;

  font-weight: 300;
  font-size: 35px;
  font-style: italic;
  line-height: 42px;
  color: inherit;
`;

export const Upper = styled.span`
  font-weight: 900;
`;

export const LinkTo = styled(Link)`
  color: inherit;
`;
