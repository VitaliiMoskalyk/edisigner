import { Contacts } from "../../pages";
import { Wrapper, Nav, NavigateLink } from "./Navigation.styled";

export const Navigation = ({ onClose }) => {
  return (
    <Nav>
      <Wrapper>
        <li>
          <NavigateLink to="/projects" onClick={onClose}>
            Проєкти
          </NavigateLink>
        </li>
        <Contacts />
        {/* <li>
          <NavigateLink to="/contacts" onClick={onClose}>
            Зв’язок
          </NavigateLink>
        </li> */}
      </Wrapper>
    </Nav>
  );
};
