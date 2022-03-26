/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Platform, Text} from 'react-native';
import {Formik} from 'formik';

import {RootStackParamList} from '../../Navigation/Navigator';

import {CustomTextInput} from '../../components/CustomTextInput/CustomTextInput';
import {
  Form,
  KeyboardAvoiding,
  NewText,
  NotebaseIcon,
  RegisterButton,
  RegisterInfoText,
  RegisterText,
} from './Register.styles';
import {
  emailValidator,
  passwordValidator,
  usernameValidator,
} from '../../utils/Regex';
import {register} from '../../lib/api';
import {Background} from '../../components/Background/Background';

type RegisterProps = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface IRegister {
  navigation: RegisterProps;
}

interface FormValues {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
  school: string;
}

/**
 * @param navigation: Navigation object for navigate through screens.
 * @returns a JSX Element that shows us the Register Screen.
 */
export const Register: FC<IRegister> = ({navigation}) => {
  const initialValues: FormValues = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    school: '',
  };

  // Register Function to dispatch values.
  const registerF = async (values: FormValues) => {
    await register({
      email: values.email,
      username: values.username,
      password: values.password,
    }).then(res => {
      if (res.status === 200) {
        navigation.goBack();
      }
    });
  };

  return (
    <KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
        <Formik
          initialValues={initialValues}
          onSubmit={values => registerF(values)}>
          {({handleChange, handleSubmit, values}) => (
            <Form>
              <CustomTextInput
                placeholder="Enter your username"
                icon="person-outline"
                onChange={handleChange('username')}
                value={values.username}
                validator={usernameValidator}
              />
              <CustomTextInput
                placeholder="Enter your mail"
                icon="mail-outline"
                validator={emailValidator}
                onChange={handleChange('email')}
                value={values.email}
              />
              <CustomTextInput
                placeholder="Enter your password"
                validator={passwordValidator}
                icon="lock-closed-outline"
                onChange={handleChange('password')}
                value={values.password}
              />
              <CustomTextInput
                placeholder="Enter your password again"
                icon="lock-closed-outline"
                validator={passwordValidator}
                onChange={handleChange('confirmPassword')}
                value={values.confirmPassword}
              />
              <CustomTextInput
                placeholder="Enter your school"
                icon="school-outline"
                onChange={handleChange('school')}
                value={values.school}
              />
              <RegisterButton onPress={handleSubmit}>
                <RegisterText>Register</RegisterText>
              </RegisterButton>
            </Form>
          )}
        </Formik>
      </Background>
    </KeyboardAvoiding>
  );
};
