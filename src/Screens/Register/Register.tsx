import React from 'react';
import {CustomTextInput} from '../../components/CustomTextInput/CustomTextInput';
import {
  KeyboardAvoiding,
  NotebaseIcon,
  RegisterButton,
  RegisterText,
} from './Register.styles';

export const Register = () => {
  return (
    <KeyboardAvoiding behavior="padding">
      <NotebaseIcon source={require('../../assets/notebase.png')} />
      <CustomTextInput label="USERNAME" />
      <CustomTextInput label="EMAIL" />
      <CustomTextInput label="PASSWORD" />
      <CustomTextInput label="CONFIRM PASSWORD" />
      <RegisterButton>
        <RegisterText>REGISTER</RegisterText>
      </RegisterButton>
    </KeyboardAvoiding>
  );
};
