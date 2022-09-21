import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router";
import { Container } from "./components/Container/Container";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Header } from "./components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Container>
          <Outlet />
          <p>
            «У хорошому дизайні функціональність завжди є первинною, незалежно
            від форм. Але вона не повинна гнобити емоції» Giorgio Saporiti «У
            хорошому дизайні функціональність завжди є первинною, незалежно від
            форм. Але вона не повинна гнобити емоції» Giorgio Saporiti «У
            хорошому дизайні функціональність завжди є первинною, незалежно від
            форм. Але вона не повинна гнобити емоції» Giorgio Saporiti «У
            хорошому дизайні функціональність завжди є первинною, незалежно від
            форм. Але вона не повинна гнобити емоції» Giorgio Saporiti «У
            хорошому дизайні функціональність завжди є первинною, незалежно від
            форм. Але вона не повинна гнобити емоції» Giorgio Saporiti «У
            хорошому дизайні функціональність завжди є первинною, незалежно від
            форм. Але вона не повинна гнобити емоції» Giorgio Saporiti
          </p>
        </Container>
      </>
    ),
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <div>main</div>,
      },
      {
        path: "projects",
        element: <div>projects</div>,
      },
      {
        path: "contacts",
        element: <div>contacts</div>,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<h1>hjsgfkjsdygfkurybvfeskuygfkuygfvkdrhbvgfes</h1>}
    />
  );
}

export default App;
