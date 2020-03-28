import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Routes from './components/routing/Routes';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
