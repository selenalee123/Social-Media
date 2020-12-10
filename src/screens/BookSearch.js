import { toJS } from 'mobx'
import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity, ToastAndroid, AppRegistry, Image, ActivityIndicator } from 'react-native'

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],

        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
                onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
                <Image style={{ width: 80, height: 80 }}
                    source={{ uri: item.image }} />
                <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
                    <Text style={{ fontSize: 18, color: 'red', marginBottom: 15 }}>
                        {item.book_title}
                    </Text>

                    <Text style={{ fontSize: 16, color: 'green' }}>
                        {item.author}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderSeparator = () => {
        return (
            <View
                style={{ height: 1, width: '100%', backgroundColor: 'pink' }}>

            </View>
        )
    }


    componentDidMount() {
        const url = "https://www.json-generator.com/api/json/get/ccLAsEcOSq?index=1";
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.book_array,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            this.state.isloading ?
                <View >
                    <ActivityIndicator size="large" color="#3300" />
                </View>
                :
                <View syle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Text>Hello</Text>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={this.renderSeparator}
                    />

                </View>
        );
    }
}
