/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../Navigation/types';

import {CustomTextInput} from '../../components/CustomTextInput/CustomTextInput';
import {
  Container,
  KeyboardAvoiding,
  NewText,
  NotebaseIcon,
  RegisterButton,
  RegisterInfoText,
  RegisterText,
} from './Register.styles';

type RegisterProps = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface IRegister {
  navigation: RegisterProps;
}

/**
 * @param navigation: Navigation object for navigate through screens.
 * @returns a JSX Element that shows us the Register Screen.
 */
export const Register: FC<IRegister> = ({navigation}) => {
  return (
    <KeyboardAvoiding behavior="padding">
      <Container source={require('../../assets/background.png')}>
        <NotebaseIcon source={require('../../assets/notebase.png')} />
        <NewText>
          Welcome to{' '}
          <Text style={{color: '#59417D', fontFamily: 'Raleway-Semibold'}}>
            Note<Text style={{color: '#E69B69'}}>base</Text>
          </Text>
        </NewText>
        <RegisterInfoText>
          Please fill the credentials to sign up
        </RegisterInfoText>
        <View style={{marginTop: 48, alignItems: 'center'}}>
          <CustomTextInput
            placeholder="Enter your username"
            icon="person-outline"
          />
          <CustomTextInput placeholder="Enter your mail" icon="mail-outline" />
          <CustomTextInput
            placeholder="Enter your password"
            icon="lock-closed-outline"
          />
          <CustomTextInput
            placeholder="Enter your password again"
            icon="lock-closed-outline"
          />
          <RegisterButton onPress={() => navigation.goBack()}>
            <RegisterText>Register</RegisterText>
          </RegisterButton>
        </View>
      </Container>
    </KeyboardAvoiding>
  );
};
