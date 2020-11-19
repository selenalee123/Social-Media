import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

const ITEMS = [
  {
    icName: 'ios-home',
    icNameActive: 'ios-home',
    title: 'Home',
  },
  {
    icName: 'md-person',
    icNameActive: 'ios-reader',
    title: 'Profile'
  },
  {
    icName: 'ios-cart',
    icNameActive: 'ios-notifications-sharp',
    title: 'cart'
  },
  {
    icName: 'ios-menu',
    icNameActive: 'ios-menu',
    title: 'Menu'
  },
]
export default class
  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 3
    };
  }
  onItemPress = (index) => {
    this.setState({ tabIndex: index })
  }
  renderItems = () => {
    return ITEMS.map((item, index) => {
      return (
      
        <TouchableOpacity
          
          key={index}
          onPress={() => console.log('puff')}
          style={{
            flex: 1, marginTop: 700,
            height: 60, justifyContent:
              "center", alignItems: "center",
            flexDirection: "column",
                      }}>
          <Ionicons name={item.icName} size={24} color="black"></Ionicons>
          <Text> {item.title}</Text>
        </TouchableOpacity>
       

      )
    })
  }

  render() {
    return (
      <View>

        {this.state.tabIndex === 0 && <HomeScreen />}
        {this.state.tabIndex === 0 && <Profile />}
        {this.state.tabIndex === 0 && <Cart />}
        {this.state.tabIndex === 0 && <Menu />}

        <View style={{
          flex: 1, borderWidth: 1, borderColor:
            "black", height: 50, flexDirection: "row"
        }}>
          {this.renderItems()}
        </View>
      </View>

    );
  }
}


const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "green" }}></View>)

}

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "green" }}></View>)

}
const Cart = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "green" }}></View>)

}
const Menu = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "green" }}></View>)

}