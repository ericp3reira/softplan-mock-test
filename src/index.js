import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
      <Route path="/assessor" render={() => <App type='assessor' />} />
      <Route path="/juiz" render={() => <App type='juiz' />} />
      <Redirect from="/" to="/assessor" />
      <Route component={NoMatch} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
