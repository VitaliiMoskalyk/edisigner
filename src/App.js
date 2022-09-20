import { createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import { Container } from "./components/Container/Container";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>there will be header</h1>
        <NavLink to="projects">Go to project page</NavLink>
        <NavLink to="contacts">Go to contacts page</NavLink>
        <Outlet />
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
    <Container>
      <RouterProvider
        router={router}
        fallbackElement={<h1>hjsgfkjsdygfkurybvfeskuygfkuygfvkdrhbvgfes</h1>}
      />
    </Container>
  );
}

export default App;
