
import React  from 'react';
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
import  SideMenu from './src/screens/SideMenu';




//import Onboarding from "./src/screen/Onboarding"
const App: () => React$Node = () => {
  return(
      <TabNavigation/>
   )
}
export default App;

const SideMenu1 = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{height: 250, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 90, height: 90, borderRadius: 45, backgroundColor: 'blue'}}/>
      </View>
      {
        ['Home', 'My posts', 'My orders', 'History', 'Notification', 'Settings'].map((item, index) => {
          return (
            <View key={index} style={{height: 40, backgroundColor: 'grey', marginTop: 0.5, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16}}>
              <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: 'blue'}}/>
              <Text style={{fontSize: 16, color: 'black', marginLeft: 12}}>{item}</Text>
            </View>
          )
        })
      }
    </View>
  )
}
