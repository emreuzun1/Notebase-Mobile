import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Login} from '../Screens/Login/Login';
import {Register} from '../Screens/Register/Register';
import {Home} from '../Screens/Home/Home';
import {Profile} from '../Screens/Profile/Profile';
import {Upload} from '../Screens/Upload/Upload';
import {Colors} from '../constants/Colors';
import {navigationRef} from './RootNavigation';
import {Document} from '../Interfaces/Document';
import DocumentScreen from '../Screens/Document/Document';
import {CreateDocument} from '../Screens/CreateDocument/CreateDocument';
import {Search} from '../Screens/Search/Search';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: NavigatorScreenParams<TabParamList>;
  Search: undefined;
  Document: Document;
  Upload: undefined;
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Create: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 64,
          backgroundColor: Colors.black,
          borderTopWidth: 0,
          ...styles.shadow,
        },
        tabBarShowLabel: false,
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                size={size}
                color={focused ? Colors.purple : Colors.white}
              />
            );
          },
        }}
      />
      <Screen
        name="Create"
        component={CreateDocument}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <View
                style={[
                  styles.addButton,
                  {backgroundColor: focused ? Colors.purple : Colors.orange},
                ]}>
                <Ionicons name="add" size={size} color={Colors.black} />
              </View>
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-person' : 'ios-person'}
                size={size}
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
    </Navigator>
  );
};

//Navigation Container for App
export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

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
