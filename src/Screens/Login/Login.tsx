/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {ActivityIndicator, Platform, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/Navigator';

import {CustomTextInput} from '../../components/CustomTextInput/CustomTextInput';
import {Colors} from '../../constants/Colors';
import {
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
import {Background} from '../../components/Background/Background';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {requestLogin} from '../../redux/actions';
import {State} from '../../Interfaces/State';

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
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {loading} = useAppSelector((state: State) => state.auth);

  //Dispatches the login function
  const login = async () => {
    dispatch(requestLogin({username, password}));
  };

  // If loading is true, indicator will show up in the screen.
  if (loading) {
    return (
      <Background style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="white" />
      </Background>
    );
  }

  return (
    <KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
            icon="person-outline"
          />
          <CustomTextInput
            placeholder="Password"
            value={password}
            onChange={val => setPassword(val)}
            icon="lock-closed-outline"
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
        <LoginButton onPress={() => login()}>
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
