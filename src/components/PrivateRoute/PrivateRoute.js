import { useSelector } from 'react-redux';
import authSelectors from '../../redux/authentification/auth-selectors';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({children, ...rest}) {
  const isLoggedIn = useSelector(authSelectors.getIsUserLoggedIn);
  return (
    <Route {...rest}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
export default PrivateRoute;