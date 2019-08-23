/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';

class App extends Component {
  render() {
    return (
         <AppContainer/>
      )
  }
}

class Home extends Component {
  render() {
    return (
       <View><Text>Home screen</Text></View>
      )
  }
}

class Dashboard extends Component {
  static navigationOptions = {
    headerStyle: {
        backgroundColor: 'blue'
      }
  }

  render() {
    return (
      <ScrollView>
       <View style={{height:1000, borderWidth: 15, borderColor: 'green'}}><Text>Dashboard screen</Text></View>
       </ScrollView>
      )
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Home: Home
   },
   {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange'
      }
    }
   }
);


const AppDrawNavigator = createDrawerNavigator(
   {
    Home: Home,
    Dashboard: Dashboard
   },
   {
    unmountInactiveRoutes: true,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange'
      }
    }
   }
  );
  
const AppContainer = createAppContainer(AppDrawNavigator);

export default App;
