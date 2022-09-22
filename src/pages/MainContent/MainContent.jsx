import { MainList } from "../../components/MainList/MainList";
import { Quote } from "../../components/Quote/Quote";
import { data } from "../../data/mainPageContent";

export const MainContent = () => {
  return (
    <>
      <Quote
        quote="«У хорошому дизайні функціональність завжди є первинною, незалежно від форм. Але вона не повинна гнобити емоції»"
        author="Giorgio Saporiti"
      />
      <MainList data={data} />
    </>
  );
};
