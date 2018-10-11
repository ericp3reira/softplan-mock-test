import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" render={() => <App type='assessor' />} />
      <Route component={NoMatch} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
