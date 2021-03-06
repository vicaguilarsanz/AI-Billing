import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import Menu from './Menu';
import Camera from './Camera';
import Confirm from './Confirm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" initial hideNavBar={true} />
        <Scene key="menu" component={Menu} title="Menu" hideNavBar={true} />
        <Scene key="camera" component={Camera} title="Camera" hideNavBar={true} />
        <Scene key="confirm" component={Confirm} title="Confirm"/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;