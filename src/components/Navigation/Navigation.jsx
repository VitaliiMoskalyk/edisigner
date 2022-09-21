import { Wrapper, Nav, NavigateLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Nav>
      <Wrapper>
        <li>
          <NavigateLink to="projects">Проєкти</NavigateLink>
        </li>
        <li>
          <NavigateLink to="contacts">Зв’язок</NavigateLink>
        </li>
      </Wrapper>
    </Nav>
  );
};
