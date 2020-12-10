
import React from 'react';
import { View, StyleSheet, Text, Header, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pro from "./src/screens/Pro";
import Test from "./src/screens/Test";
import Profilescreen from "./src/screens/Profilescreen";
import Articles from "./src/screens/Articles";
import Register from "./src/screens/Register";

import { Actions } from 'react-native-router-flux';
import TabNavigation from "./src/screens/TabNavigation";
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import SideMenu from './src/screens/SideMenu';
import Camera from './src/screens/Camera';
import ImagePicker from './src/screens/ImagePicker';
import DatePicker from './src/screens/DatePicker';
import PeopleSearch from './src/screens/PeopleSearch';
import BookSearch from './src/screens/BookSearch';






//import Onboarding from "./src/screen/Onboarding"
const App: () => React$Node = () => {
  return (
    <Router>
      <Stack key="root">
        <Drawer
          key="drawer"
          contentComponent={SideMenu}
          drawerWidth={300}
          drawerPosition='left'
        >
          <Scene key="Camera" component={Camera} hideNavBar />
          <Scene key="DatePicker" component={DatePicker} hideNavBar />
          <Scene key="ImagePicker" component={ImagePicker} hideNavBar />
          <Scene key="DatePicker" component={DatePicker} hideNavBar  />
          <Scene key="Articles" component={Articles} hideNavBar   />
          <Scene key="TabNavigation" component={TabNavigation} hideNavBar />
          <Scene key="Profilescreen" component={Profilescreen} hideNavBar />
          <Scene key="PeopleSearch" component={PeopleSearch} hideNavBar initial/>
          <Scene key="BookSearch" component={BookSearch} hideNavBar  />
          
        
        </Drawer>
      </Stack>
    </Router>
  );
};
export default App;


