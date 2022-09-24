import { Overlay, Link } from "./ProjectsNavigation.styled";

export const ProjectsNavigation = () => {
  return (
    <Overlay>
      <Link href="#">Завершені проєкти</Link>
      <Link href="#">Активні проєкти</Link>
    </Overlay>
  );
};
