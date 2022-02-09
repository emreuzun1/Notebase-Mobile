import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/types';

import {CustomTextInput} from '../../components/CustomTextInput/CustomTextInput';
import {
  KeyboardAvoiding,
  NotebaseIcon,
  RegisterButton,
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
      <NotebaseIcon source={require('../../assets/notebase.png')} />
      <CustomTextInput label="USERNAME" />
      <CustomTextInput label="EMAIL" />
      <CustomTextInput label="PASSWORD" />
      <CustomTextInput label="CONFIRM PASSWORD" />
      <RegisterButton onPress={() => navigation.goBack()}>
        <RegisterText>REGISTER</RegisterText>
      </RegisterButton>
    </KeyboardAvoiding>
  );
};
