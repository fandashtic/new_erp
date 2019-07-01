import React from "react";
import PropTypes from "prop-types";
import { Route, Switch,Redirect  } from "react-router-dom";
import ProductPage from "components/pages/Product/ProductPage";
import './App.scss';

import 'assets/common.css';

const NoMatch = ({ location }) => ( <Redirect to='/dashboard' /> );

const App = ({ location }) => (
    <div className="main-body">
      <Switch>
        <Route location={location} path="/dashboard" exact component={ProductPage} />
        <Route location={location} path="/dashboard/Product" exact component={ProductPage} />
         <Route component={NoMatch} />
      </Switch>
    </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;