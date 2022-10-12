// import { ProjectsNavigation } from "../../components/ProjectsNavigation/ProjectsNavigation";
// import { Quote } from "../../components/Quote/Quote";
import { data2 } from "../../data/myProjects";
import "../../index.css";
import { PicturesList } from "../../components/PicturesList/PicturesList";
import { Container } from "../../components/Container/Container";

export const Projects = () => {
  return (
    <>
      {/* <Quote
        quote="«У хорошому дизайні функціональність завжди є первинною, незалежно від форм. Але вона не повинна гнобити емоції»"
        author="Giorgio Saporiti"
      /> */}
      {/* <ProjectsNavigation /> */}
      {/* <MainList data={data2} position="right" /> */}
      <Container>
        <PicturesList data={data2} />
      </Container>
    </>
  );
};
