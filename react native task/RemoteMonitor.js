
import Product from './Product';
import Details from './Details';
import Home from './Home';

import { createStackNavigator, createAppContainer } from 'react-navigation';
// link tham khao https://reactnavigation.org/docs/en/getting-started.html

const AppNavigator = createStackNavigator(
    {
      Sanpham: { screen: Product ,
      //   navigationOptions:{
      //   title: 'Product',
      //   header: null,
      // },
      },
      Home: { screen: Home ,
        navigationOptions : {
          title: 'Home',
          headerStyle: {
              backgroundColor: '#717e93',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }
      },
      Details: { screen: Details ,
        //   navigationOptions:{
        //   title: 'Product',
        //   header: null,
        // },
      },
    },
    {
      initialRouteName: 'Home',
    }
);
export default createAppContainer(AppNavigator);

