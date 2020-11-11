import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import Signin from './components/User/Signin';
import Signup from './components/User/Signup';

function App() {
  return (
        <Router>
          <div className="App">
            <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={Signin} />
          <Route exact path='/signup' component={Signup} />
            </Switch>
          </div>
        </Router>
  );
}

export default App;