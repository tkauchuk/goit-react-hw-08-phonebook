import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Homepage from './views/Homepage';
import Signup from './views/Signup';
import Login from './views/Login';
import Phonebook from './views/Phonebook';


function App() {
    return (
      <Fragment>
        <Navigation />

        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/register'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/contacts'>
            <Phonebook />
          </Route>
        </Switch>
      </Fragment>
    );
}

export default App;
