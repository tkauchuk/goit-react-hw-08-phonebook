import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import authOperations from './redux/authentification/auth-operations';


import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Navigation from './components/Navigation';
import Homepage from './views/Homepage';
import Signup from './views/Signup';
import Login from './views/Login';
import Phonebook from './views/Phonebook';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch])

    return (
      <Fragment>
        <Navigation />

        <Switch>
          <PublicRoute path='/' exact>
            <Homepage />
          </PublicRoute>
          <PublicRoute path='/register' restricted>
            <Signup />
          </PublicRoute>
          <PublicRoute path='/login' restricted>
            <Login />
          </PublicRoute>

          <PrivateRoute path='/contacts'>
            <Phonebook />
          </PrivateRoute>
        </Switch>
      </Fragment>
    );
}

export default App;
