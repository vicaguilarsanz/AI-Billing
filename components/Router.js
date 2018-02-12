import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import Menu from './Menu';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" initial />
        <Scene key="menu" component={Menu} title="Menu" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;