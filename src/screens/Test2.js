import  SideMenu from './SideMenu';

import Articles from "./Articles";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: SideMenu,
    Auth: Articles
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;