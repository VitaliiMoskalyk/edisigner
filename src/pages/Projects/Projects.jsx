import { MainList } from "../../components/MainList/MainList";
import { ProjectsNavigation } from "../../components/ProjectsNavigation/ProjectsNavigation";
// import { Quote } from "../../components/Quote/Quote";
import { data2 } from "../../data/myProjects";

export const Projects = () => {
  return (
    <>
      {/* <Quote
        quote="«У хорошому дизайні функціональність завжди є первинною, незалежно від форм. Але вона не повинна гнобити емоції»"
        author="Giorgio Saporiti"
      /> */}
      <ProjectsNavigation />
      <MainList data={data2} position="right" />
    </>
  );
};
