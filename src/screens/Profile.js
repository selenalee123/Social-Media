import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image,Button,TouchableOpacity} from "react-native";

const getPro = require("./assets/imgs/bg.png");
const background5=require("./assets/imgs/bg5.png");
const profile=require("./assets/imgs/profile-img.jpg"); 
const Invision = require("./assets/imgs/invision-white-slim.png");
const NowLogo = require("./assets/imgs/now-logo.png");
const CreativeTim = require("./assets/imgs/creative-tim-white-slim2.png");



export default class Profile extends React.Component{
    constructor(props){
        super(props)
    }
render (){
    return(
        <View>
        </View>    
       )
    }
}

<View style={styles.container}>
    <ImageBackground source={background5} style={styles.image}>
  <Image source={profile} style={styles.contenContainer}  ></Image>
<Text style={styles.text1}>Ryan Scheinder</Text> 

 <View style={styles.container3}>
      
    </View> 
    <Text style={styles.text}>Photographer</Text> 
    <View styles={styles.container4}>

    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <Text >Friends</Text> 

      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text style={styles.text}>Comments</Text> 
      
    </View>
       
        <Text style={styles.text}>Bookmarks</Text> 
    </View>
 
    



    

   
    <View style={{width: 300, height: 50, 
      backgroundColor: 'orange', 
      justifyContent: 'center', 
       alignItems: 'center',
       borderRadius:50,paddingLeft:30, 
       paddingRight:20
       }} >
      <Text style = {styles.text2}>Get Start </Text> 
</View>  
    
        </ImageBackground>                        
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    

  },
  container2: {
    flex: 0.1,
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center"
  },
    container3: {
      flex: 0.1,
      flexDirection: "row",
      justifyContent: "center", 
      alignItems: "center"
  },


  container4: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center"
  },
  image: {
        resizeMode: "cover",
    justifyContent: "center",
    flex: 1, zIndex: 1
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    fontFamily: "Mosse Bold"
 
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
    textAlign: 'center'
  }, 
  contenContainer:{
    flex: 0.3,
    resizeMode:"center",
    width:91, height: 28

    
   

 },
             
  
         

  },



  
);

export default App;
