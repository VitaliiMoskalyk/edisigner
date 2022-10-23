import styled from "@emotion/styled";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;

  li {
    margin: 10px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  transform: scale(1);
  transition: transform ease-in 0.1s;

  :hover,
  :focus {
    transform: scale(1.2);
    transition: transform ease-in 0.1s;
  }
`;
