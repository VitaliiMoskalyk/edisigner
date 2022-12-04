import { MainList } from "../../components/MainList/MainList";
// import { ProjectsNavigation } from "../../components/ProjectsNavigation/ProjectsNavigation";
import { Wall } from "../../components/Wall/Wall";
// import Slider from "../../components/Slider/Slider";
import { data } from "../../data/mainPageContent";
// import { data2 } from "../../data/myProjects";
// import { useWindowWidth } from "@react-hook/window-size";
// import { Contacts } from "../Contacts/Contacts";
// import { PicturesList } from "../../components/PicturesList/PicturesList";
import { Container } from "../../components/Container/Container";
import { lazy } from "react";
import BubbleItem from "../../components/BubbleItem/BubbleItem";
import { NavigateLink } from "../../components/Navigation/Navigation.styled";
const Header = lazy(() => import("../Header/Header"));

const MainContent = () => {
  // const useWidth = useWindowWidth();
  return (
    <>
      <Wall>
        <BubbleItem>
          <NavigateLink to="/projects">Проєкти</NavigateLink>
        </BubbleItem>
        <BubbleItem />
        <BubbleItem />
      </Wall>
      <Header />
      <Container>
        <MainList data={data} position="chess" />
      </Container>
    </>
  );
};

export default MainContent;
