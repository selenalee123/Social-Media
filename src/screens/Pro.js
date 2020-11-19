import React from "react";
import { Icon,ImageBackground, StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";

const getPro = require("../../assets/imgs/bg.png");
const Invision = require("../../assets/imgs/invision-white-slim.png");
const NowLogo = require("../../assets/imgs/now-logo.png");
const CreativeTim = require("../../assets/imgs/creative-tim-white-slim2.png");
const ios = require("../../assets/imgs/ios.png");
const android = require("../../assets/imgs/android.png");

export default class Pro extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return ( 
      
      <View style={styles.container}>
        
        <ImageBackground source={getPro} style={styles.image}>
          <View style={styles.container2}>
            <Text style={styles.text1}>Code by</Text>
            <Image source={CreativeTim} style={styles.contenContainer}  ></Image>
          </View>

          <View style={styles.container3}>
          </View>
          <Text style={styles.text}>NOW UI </Text>
          <View>
            <Text style={styles.text}>KIT</Text>
          </View>

          <View style={styles.containertwo}>
            <View style={styles.container4}>
              <Image source={ios} style={styles.contenContainer1}  ></Image>
            </View>
            <View style={styles.container6}>
              <Image source={android} style={styles.contenContainer1}  ></Image>
            </View>
          </View>


          

          <View style={styles.container5}>
            <View style={{
              width: 300, height: 40,
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50, marginRight: 30,
              marginRight: 20,
            }} >
              <Text style={styles.text2}>Get Start </Text>
            </View>
          </View>



        </ImageBackground>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    flex: 1, zIndex: 1
  },

  container2: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  container3: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  container4: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.6,

  },

  container5: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250


  },

  containertwo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 20
  },

  text: {
    color: "white",
    fontSize: 80,
    fontWeight: "bold",
    textAlign: 'center',
    fontFamily: "Mosse Bold"

  },
  contenContainer3: {
    flex: 0.1,
    flexDirection: "row",


  },

  contenContainer1: {

    height: 38, width: 140


  },

  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  },


  text2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  contenContainer: {
    flex: 0.3,
    resizeMode: "center",
    width: 91, height: 28
  }
})






































































































       
