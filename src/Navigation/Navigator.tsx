import React from 'react';
import {Platform} from 'react-native';
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

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: NavigatorScreenParams<TabParamList>;
  Upload: undefined;
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            Platform.OS === 'android'
              ? (iconName = focused ? 'md-home' : 'md-home-outline')
              : (iconName = focused ? 'ios-home' : 'ios-home-outline');
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            Platform.OS === 'android'
              ? (iconName = focused ? 'md-person' : 'md-person-outline')
              : (iconName = focused ? 'ios-person' : 'ios-person-outline');
            return <Ionicons name={iconName} size={size} color={color} />;
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
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerStyle: {backgroundColor: 'white'},
        }}
      />
      <Screen name="Upload" component={Upload} />
    </Navigator>
  );
};

//Navigation Container for App
export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
