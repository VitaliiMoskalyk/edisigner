import { MainList } from "../../components/MainList/MainList";
import { ProjectsNavigation } from "../../components/ProjectsNavigation/ProjectsNavigation";
import { Quote } from "../../components/Quote/Quote";
import Slider from "../../components/Slider/Slider";
import { data } from "../../data/mainPageContent";
import { data2 } from "../../data/myProjects";
import { useWindowWidth } from "@react-hook/window-size";
import { Contacts } from "../Contacts/Contacts";

export const MainContent = () => {
  const useWidth = useWindowWidth();
  return (
    <>
      <Quote
        quote="«У хорошому дизайні функціональність завжди є первинною, незалежно від форм. Але вона не повинна гнобити емоції»"
        author="Giorgio Saporiti"
      />
      <MainList data={data} position="chess" />

      <ProjectsNavigation />
      {useWidth < 1440 ? (
        <Slider data={data2} />
      ) : (
        <MainList data={data2} position="right" />
      )}
      {useWidth >= 768 && <Contacts />}
    </>
  );
};
