import { Outlet } from "react-router";
import { Container } from "./components/Container/Container";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Container>
          <h1>there will be header</h1>
        </Container>
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
  return <RouterProvider router={router} />;
}

export default App;
