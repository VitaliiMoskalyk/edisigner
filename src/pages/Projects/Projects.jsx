import { data2 } from "../../data/myProjects";
import "../../index.css";
import { PicturesList } from "../../components/PicturesList/PicturesList";
import { Container } from "../../components/Container/Container";

import { lazy, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import Svg from "../../components/Svg/Svg";
import { useWindowWidth } from "@react-hook/window-size";
const Header = lazy(() => import("../../components/Header/Header"));

const Projects = () => {
  const useWidth = useWindowWidth();
  const [arr, setArr] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/projects");
  }, []);
  return (
    <>
      <Header />
      <Container>
        {location.pathname !== "/projects" && arr != null && (
          <>
            {useWidth <= 768 && (
              <div style={{ marginTop: 60 }}>
                <Svg
                  icon="icon-back"
                  width="48"
                  height="42"
                  fill="#000"
                  onClick={() => navigate("/projects")}
                />
              </div>
            )}
            <PicturesList data={arr} f={setArr} />
          </>
        )}

        {location.pathname === "/projects" && (
          <PicturesList data={data2} f={setArr} title />
        )}
      </Container>
    </>
  );
};

export default Projects;
