/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/types';

import {CustomTextInput} from '../../components/CustomTextInput/CustomTextInput';
import {Colors} from '../../constants/Colors';
import {
  ForgotText,
  KeyboardAvoiding,
  LoginButton,
  LoginText,
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
      <NotebaseIcon
        source={require('../../assets/notebase.png')}
        resizeMode="contain"
      />
      <CustomTextInput
        label="USERNAME"
        value={username}
        onChange={val => setUsername(val)}
      />
      <CustomTextInput
        label="PASSWORD"
        value={password}
        onChange={val => setPassword(val)}
        secureText
      />
      <ForgotText>
        <Text
          style={{
            fontSize: 14,
            color: Colors.purple,
            fontStyle: 'italic',
          }}>
          Forgot password?
        </Text>
      </ForgotText>
      <LoginButton onPress={() => navigation.navigate('Home')}>
        <LoginText>LOGIN</LoginText>
      </LoginButton>
      <RegisterButton onPress={() => navigation.navigate('Register')}>
        <RegisterText>
          New to Notebase?
          <Text
            style={{color: Colors.purple, fontWeight: '700', marginLeft: 4}}>
            {' '}
            Register
          </Text>
        </RegisterText>
      </RegisterButton>
    </KeyboardAvoiding>
  );
};
