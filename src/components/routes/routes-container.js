import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import InvestmentsPage from '../../pages/investments';

export default function RoutesContainer() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <InvestmentsPage />
        </Route>
      </Switch>
    </Router>
  );
}
