import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {Login} from '../Screens/Login/Login';
import {Register} from '../Screens/Register/Register';
import {Home} from '../Screens/Home/Home';

const MainStack = createNativeStackNavigator<RootStackParamList>();

//Main Navigator for App
const MainNavigator = () => {
  const {Navigator, Screen} = MainStack;

  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerStyle: {backgroundColor: 'white'},
        }}
      />
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
