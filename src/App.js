import { lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";
const MainContent = lazy(() => import("./pages/MainContent/MainContent"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

function App() {
  const location = useLocation();

  useEffect(() => {}, [location]);

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
        <Route path="/projects" element={<Projects />}>
          <Route path=":id" element />
        </Route>
        <Route path="*" element={<MainContent />} />
      </Routes>
    </animated.div>
  );
}

export default App;
