import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Text>Home</Text>,
        headerRight: (
          <TouchableOpacity
            onPress={() => alert('This is a home page')}
            style={{backgroundColor:"#5b90e5",borderRadius:5,padding:5,marginRight:5}}
          >
            <Text style={{color:"#fff"}}>INFO</Text>
          </TouchableOpacity>
        ),
      };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: "#586272" }}>
                <Text>Click, image go to products</Text>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('Sanpham') }}
                >
                    <Image source={require("./image/headset-100.png")} />
                </TouchableOpacity>
            </View>
        )
    }
};
