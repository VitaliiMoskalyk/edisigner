import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, Header, MainContent, Projects } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <MainContent />,
      },
      {
        path: "projects",
        element: <Projects />,
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
      fallbackElement={<h1>fallback</h1>}
      basename="/"
    />
  );
}

export default App;
