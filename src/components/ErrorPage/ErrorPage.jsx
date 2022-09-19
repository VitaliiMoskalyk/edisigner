import { useRouteError, NavLink } from "react-router-dom";
import { Container } from "../Container/Container";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <NavLink to="/">Go to main page</NavLink>

        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Container>
  );
}
