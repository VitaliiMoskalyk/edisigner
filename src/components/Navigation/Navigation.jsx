import { Wrapper, Nav, NavigateLink } from "./Navigation.styled";
import { Contacts } from "../Contacts/Contacts";

export const Navigation = ({ onClose }) => {
  return (
    <Nav>
      <Wrapper>
        <li>
          <NavigateLink to="/projects" onClick={onClose}>
            Проєкти
          </NavigateLink>
        </li>
        {/* <li>
          <NavigateLink to="/about" onClick={onClose}>
            Про мене
          </NavigateLink>
        </li> */}
        <li>
          <Contacts />
        </li>
      </Wrapper>
    </Nav>
  );
};
