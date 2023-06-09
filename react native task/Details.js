import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class DetPrails extends Component {
    static navigationOptions = {
        title: 'SanPhamChitiet',
        headerStyle: {
            backgroundColor: '#717e93',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      };
    render() {
        
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: "#586272" }}>
            <Text>click image go to home</Text>
                <TouchableOpacity
                    onPress={() => { navigate('Home') }}
                >
                    <Image source={require("./image/details.png")} />
                </TouchableOpacity>
            </View>
        )
    }
};


