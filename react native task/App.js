import React, {Component} from 'react';
import { View,Text } from 'react-native';
import AppNavigator from './RemoteMonitor';


export default class App extends Component {
    constructor(props){
        super(props);
        console.log("hello construstor");
    }
    componentWillMount(){
        console.log("hello will mount");
    }
    componentDidMount(){
        console.log("hello did mount");
    }
    render() {
        console.log("hello render");
      return (

          <AppNavigator />
      )
    }
}
