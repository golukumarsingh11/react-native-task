import React, { Component } from 'react';
import { View,Text,TouchableOpacity,Image } from 'react-native';

export default class Product extends Component {
  static navigationOptions = ({ navigation })=> {
    return {
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{backgroundColor:"#5b90e5",borderRadius:5,padding:5,marginRight:5}}
      >
        <Text style={{color:"#fff"}}>Go Back </Text>
      </TouchableOpacity>
    ),
    title: 'SanPham',
    headerStyle: {
        backgroundColor: '#717e93',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  };
    render() {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:"#586272"}}>
            <Text>click image detail</Text>
            <TouchableOpacity
                onPress = {()=>{this.props.navigation.navigate('Details')}}
            >
                <Image source = {require("./image/product.png")}/>
            </TouchableOpacity>
            
        </View>
      )
    }
};

