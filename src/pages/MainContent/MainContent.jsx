import { MainList } from "../../components/MainList/MainList";
import { Quote } from "../../components/Quote/Quote";
import Slider from "../../components/Slider/Slider";
import { data } from "../../data/mainPageContent";
import { data2 } from "../../data/myProjects";

export const MainContent = () => {
  return (
    <>
      <Quote
        quote="«У хорошому дизайні функціональність завжди є первинною, незалежно від форм. Але вона не повинна гнобити емоції»"
        author="Giorgio Saporiti"
      />
      <MainList data={data} />
      <Slider data={data2} />
    </>
  );
};
