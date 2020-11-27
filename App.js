import React from 'react';
import { View, Text, Header } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import Pro from "./src/screens/Pro";
import Test from "./src/screens/Test";
import Profilescreen from "./src/screens/Profilescreen";
import Articles from "./src/screens/Articles";
import Register from "./src/screens/Register";
import Form from "./src/screens/logintest";
import { Actions } from 'react-native-router-flux';
import TabNavigation from "./src/screens/TabNavigation";
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import  SideMenu from "./routes/SideMenu";



//import Onboarding from "./src/screen/Onboarding"
const App: () => React$Node = () => {
  return (
    <Router>
      <Drawer
        key="drawer"
        contentComponent={SideMenu}
        drawerWidth={300}
        drawerPosition="left"
      ></Drawer>
    </Router>
  )

}
export default App;
