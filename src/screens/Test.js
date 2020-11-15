import React from "react";
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, Image, Dimensions } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    image: "https://i.etsystatic.com/9199385/r/il/8c0757/1130840727/il_1588xN.1130840727_tb6z.jpg"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    image: "https://static.wikia.nocookie.net/fictionalcrossover/images/6/62/Doraemon_2005.jpg/revision/latest/scale-to-width-down/1000?cb=20151107162648"

  },



];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class Articles extends React.Component {
  constructor(props) {
    super(props)
  }



  renderItem = ({ item }) => {

    const itemWidth = (windowWidth - (16) - (8 * 2)) / 3
    return (

      
      <View style={{
         flexDirection:
          "row"  }}>



        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={{ height: itemWidth, width: itemWidth }} />
          <View style={{
            flex: 1, flexDirection:
              "column"
          }}>
            <Text>Title</Text>
            <Text>view more</Text>
            <View><Text>Kim kim</Text>
            </View>
          </View>
        </View>
      </View>


    )
  }


  render() {
    return (
      <View style={{ flex: 1, paddingTop: 64, alignItems: "center" }}>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 16, alignItems: "space-between" }}
          data={DATA}
          renderItem={this.renderItem}

          keyExtractor={(item) => item.id}
          numColumns={2}
        />

        <View><Text>Kim Kim</Text></View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 4,
    backgroundColor: '#f9c2ff',
    borderRadius: 10
  },
  title: {
    fontSize: 32,
  },
});
