/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/types';

import {CustomTextInput} from '../../components/CustomTextInput/CustomTextInput';
import {Colors} from '../../constants/Colors';
import {
  Background,
  ForgotText,
  KeyboardAvoiding,
  LoginButton,
  LoginInfoText,
  LoginText,
  NewText,
  NotebaseIcon,
  RegisterButton,
  RegisterText,
} from './Login.styles';

type LoginProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface ILogin {
  navigation: LoginProps;
}

/**
 *
 * @param navigation: Navigation object for navigate through screens.
 * @returns a JSX Element that shows us the Login Screen.
 */
export const Login: FC<ILogin> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <KeyboardAvoiding behavior="padding">
      <Background
        source={require('../../assets/background.png')}
        resizeMode="cover">
        <NotebaseIcon
          source={require('../../assets/notebase.png')}
          resizeMode="contain"
        />
        <NewText>
          Welcome to{' '}
          <Text style={{color: '#59417D', fontFamily: 'Raleway-Semibold'}}>
            Note<Text style={{color: '#E69B69'}}>base</Text>
          </Text>
        </NewText>
        <LoginInfoText>Please login to your account</LoginInfoText>
        <View style={{marginTop: 48}}>
          <CustomTextInput
            placeholder="Username"
            value={username}
            onChange={val => setUsername(val)}
          />
          <CustomTextInput
            placeholder="Password"
            value={password}
            onChange={val => setPassword(val)}
            secureText
          />
          <ForgotText>
            <Text
              style={{
                fontSize: 14,
                color: Colors.white,
                opacity: 0.5,
                fontStyle: 'italic',
                fontFamily: 'Raleway-Regular',
              }}>
              I forgot my password
            </Text>
          </ForgotText>
        </View>
        <LoginButton onPress={() => navigation.navigate('Home')}>
          <LoginText>Login</LoginText>
        </LoginButton>
        <RegisterButton onPress={() => navigation.navigate('Register')}>
          <RegisterText>
            Don't you have an account?
            <Text
              style={{
                color: Colors.orange,
                fontFamily: 'Raleway-Semibold',
                marginLeft: 4,
              }}>
              {' '}
              Sign Up
            </Text>
          </RegisterText>
        </RegisterButton>
      </Background>
    </KeyboardAvoiding>
  );
};
