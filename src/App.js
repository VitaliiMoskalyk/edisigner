import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const About = lazy(() => import("./pages/About/About"));
const MainContent = lazy(() => import("./pages/MainContent/MainContent"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

function App() {
  const style = useSpring({
    from: { opacity: 0.3 },
    to: { opacity: 1 },
    reset: true,
    config: { duration: 400 },
  });

  return (
    <animated.div style={style}>
      <Routes path="/">
        <Route index element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />}>
          <Route path=":id" element />
        </Route>
        <Route path="*" element={<MainContent />} />
      </Routes>
    </animated.div>
  );
}

export default App;
