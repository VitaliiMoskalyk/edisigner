import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contacts, ErrorPage, MainContent, Projects } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      // element: <ErrorPage />,
      errorElement: <ErrorPage />,

      children: [
        {
          index: true,
          element: <MainContent />,
        },
        {
          path: "/projects",
          element: <Projects />,
          children: [{ path: ":id", element: null }],
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
      ],
    },
  ],
  { basename: "/edisigner" }
);

function App() {
  return <RouterProvider router={router} fallbackElement={<h1>fallback</h1>} />;
}

export default App;
