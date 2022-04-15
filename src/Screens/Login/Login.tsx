/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
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
import {AuthenticationContext} from '../../services/AuthenticationContext';

type LoginProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface ILogin {
  navigation: LoginProps | any | undefined;
}

/**
 *
 * @param navigation: Navigation object for navigate through screens.
 * @returns a JSX Element that shows us the Login Screen.
 */
const Login = (props: ILogin) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {student, loading, onLogin} = useContext(AuthenticationContext);
  // If loading is true, indicator will show up in the screen.

  /* useEffect(() => {
    if (student) {
      props.navigation.navigate('Home');
    }
  }, [props.navigation, student]); */

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
        <NewText testID="welcomeText">
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
        <LoginButton
          onPress={() => onLogin({username, password})}
          testID="loginButton">
          <LoginText>Login</LoginText>
        </LoginButton>
        <RegisterButton
          onPress={() => props.navigation.navigate('Register')}
          testID="registerButton">
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

export default Login;
