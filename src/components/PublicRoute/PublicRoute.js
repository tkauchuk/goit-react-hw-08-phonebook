import { useSelector } from 'react-redux';
import authSelectors from '../../redux/authentification/auth-selectors';
import { Redirect, Route } from 'react-router-dom';

function PublicRoute({children, restricted = false, ...rest}) {
  const isLoggedIn = useSelector(authSelectors.getIsUserLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...rest}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}

export default PublicRoute;