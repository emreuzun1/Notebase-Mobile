/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Platform, Text, View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {RootStackParamList} from '../../Navigation/Navigator';

import {CustomTextInput} from '../../components/CustomTextInput/CustomTextInput';
import {
  Dropdown,
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
import {Faculties} from '../../constants/Faculty';
import {Colors} from '../../constants/Colors';
import {RegisterValues} from '../../Interfaces/Student';

type RegisterProps = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface IRegister {
  navigation: RegisterProps | any;
}

/**
 * @param navigation: Navigation object for navigate through screens.
 * @returns a JSX Element that shows us the Register Screen.
 */
const Register = (props: IRegister) => {
  const [isFocus, setIsFocus] = useState(false);
  const initialValues: RegisterValues = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    department: '',
    faculty: '',
    university: '',
  };

  // Register Function to dispatch values.
  const registerF = async (values: RegisterValues) => {
    await register(values).then(res => {
      if (res.status === 200) {
        props.navigation.goBack();
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
          {({handleChange, handleSubmit, values, setFieldValue}) => (
            <Form
              contentContainerStyle={{
                alignItems: 'center',
                paddingLeft: 12,
                paddingRight: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '100%',
                }}>
                <CustomTextInput
                  containerStyle={{width: '45%'}}
                  placeholder="First Name"
                  icon="text"
                  value={values.first_name}
                  onChange={handleChange('first_name')}
                />
                <CustomTextInput
                  containerStyle={{width: '45%'}}
                  placeholder="Last Name"
                  icon="text"
                  value={values.last_name}
                  onChange={handleChange('last_name')}
                />
              </View>
              <CustomTextInput
                placeholder="Username"
                icon="person-outline"
                onChange={handleChange('username')}
                value={values.username}
                validator={usernameValidator}
              />
              <CustomTextInput
                placeholder="Mail"
                icon="mail-outline"
                validator={emailValidator}
                onChange={handleChange('email')}
                value={values.email}
              />
              <CustomTextInput
                placeholder="Password"
                validator={passwordValidator}
                icon="lock-closed-outline"
                onChange={handleChange('password')}
                value={values.password}
                secureText
              />
              <CustomTextInput
                secureText
                placeholder="Confirm Password"
                icon="lock-closed-outline"
                validator={passwordValidator}
                onChange={handleChange('confirmPassword')}
                value={values.confirmPassword}
              />
              <CustomTextInput
                placeholder="University"
                icon="school-outline"
                onChange={handleChange('university')}
                value={values.university}
              />
              <Dropdown
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={[
                  styles.selectedTextStyle,
                  isFocus && {color: Colors.black},
                ]}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={Faculties}
                search
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select faculty' : '...'}
                searchPlaceholder="Search..."
                value="faculty"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item: any) => {
                  setFieldValue('faculty', item);
                  setIsFocus(false);
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    testID="dropdown"
                    color={Colors.white}
                    name="menu-fold"
                    size={24}
                  />
                )}
              />
              <CustomTextInput
                placeholder="Department"
                icon="school-outline"
                onChange={handleChange('department')}
                value={values.department}
              />
              <RegisterButton onPress={handleSubmit} testID="registerButton">
                <RegisterText>Register</RegisterText>
              </RegisterButton>
            </Form>
          )}
        </Formik>
      </Background>
    </KeyboardAvoiding>
  );
};

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Raleway',
    marginLeft: 8,
  },
  selectedTextStyle: {
    fontSize: 18,
    color: Colors.white,
    marginLeft: 8,
    fontFamily: 'Raleway',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Register;
