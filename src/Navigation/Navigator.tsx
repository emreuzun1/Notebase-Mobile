import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Login from '../Screens/Login/Login';
import Register from '../Screens/Register/Register';
import Home from '../Screens/Home/Home';
import {Profile} from '../Screens/Profile/Profile';
import {Upload} from '../Screens/Upload/Upload';
import {Colors} from '../constants/Colors';
import {navigationRef} from './RootNavigation';
import {Document} from '../Interfaces/Document';
import DocumentScreen from '../Screens/Document/Document';
import {Search} from '../Screens/Search/Search';
import {Settings} from '../Screens/Settings/Settings';
import {Viewer} from '../Screens/Viewer/Viewer';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: NavigatorScreenParams<TabParamList>;
  Search: undefined;
  Document: Document;
  Upload: undefined;
  Settings: undefined;
  Viewer: Document;
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Upload: undefined;
};

const Tab = createMaterialBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator
      initialRouteName="Home"
      shifting
      backBehavior="history"
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{
        height: 64,
        backgroundColor: Colors.black,
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                size={24}
                color={focused ? Colors.purple : Colors.white}
              />
            );
          },
        }}
      />
      <Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.addButton,
                  {backgroundColor: focused ? Colors.purple : Colors.orange},
                ]}>
                <Ionicons name="add" size={24} color={Colors.black} />
              </View>
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-person' : 'ios-person'}
                size={24}
                color={focused ? Colors.purple : Colors.white}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

const MainStack = createNativeStackNavigator<RootStackParamList>();

//Main Navigator for App
const MainNavigator = () => {
  const {Navigator, Screen} = MainStack;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Home" component={TabNavigator} />
      <Screen name="Document" component={DocumentScreen} />
      <Screen name="Upload" component={Upload} />
      <Screen name="Search" component={Search} />
      <Screen name="Settings" component={Settings} />
      <Screen name="Viewer" component={Viewer} />
    </Navigator>
  );
};

//Navigation Container for App
export function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.purple,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  addButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
