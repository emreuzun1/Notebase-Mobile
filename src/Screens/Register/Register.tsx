/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
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
  checkForBlank,
} from '../../utils/Regex';
import {register} from '../../lib/api';
import {Background} from '../../components/Background/Background';
import {Faculties} from '../../constants/Faculty';
import {Colors} from '../../constants/Colors';
import {RegisterValues} from '../../Interfaces/Student';
import {Header} from '../../components/Header/Header';

type RegisterProps = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface IRegister {
  navigation: RegisterProps | any;
}

/**
 * @param navigation: Navigation object for navigate through screens.
 * @returns a JSX Element that shows us the Register Screen.
 */
const Register = (props: IRegister) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState(false);
  const [initialValues, setInitialValues] = useState<RegisterValues>({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    department: '',
    faculty: '',
    university: '',
  });

  // Register Function to dispatch values.
  const registerF = async () => {
    if (
      !usernameValidator(initialValues.username) ||
      !emailValidator(initialValues.email) ||
      !passwordValidator(initialValues.password) ||
      initialValues.password !== initialValues.confirmPassword ||
      !checkForBlank(initialValues.faculty) ||
      !checkForBlank(initialValues.university) ||
      !checkForBlank(initialValues.department) ||
      !checkForBlank(initialValues.first_name) ||
      !checkForBlank(initialValues.last_name)
    ) {
      Alert.alert(
        'Invalid Inputs',
        'Check your credentials.',
        [{text: 'Close alert', style: 'cancel'}],
        {cancelable: true},
      );
      return;
    }
    setLoading(true);
    let response = await register(initialValues);
    await response.json().then(() => {
      props.navigation.goBack();
      setLoading(false);
    });
  };

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
        <Header navigation={props.navigation} />
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
              containerStyle={{width: '47%'}}
              placeholder="First Name"
              icon="text"
              value={initialValues.first_name}
              onChange={text =>
                setInitialValues({...initialValues, first_name: text})
              }
            />
            <CustomTextInput
              containerStyle={{width: '47%'}}
              placeholder="Last Name"
              icon="text"
              value={initialValues.last_name}
              onChange={text =>
                setInitialValues({...initialValues, last_name: text})
              }
            />
          </View>
          <CustomTextInput
            placeholder="Username"
            icon="person-outline"
            onChange={text =>
              setInitialValues({...initialValues, username: text})
            }
            value={initialValues.username}
            validator={usernameValidator}
          />
          <CustomTextInput
            placeholder="Mail"
            icon="mail-outline"
            validator={emailValidator}
            onChange={text => setInitialValues({...initialValues, email: text})}
            value={initialValues.email}
          />
          <CustomTextInput
            placeholder="Password"
            validator={passwordValidator}
            icon="lock-closed-outline"
            onChange={text =>
              setInitialValues({...initialValues, password: text})
            }
            value={initialValues.password}
            secureText
          />
          <CustomTextInput
            secureText
            placeholder="Confirm Password"
            icon="lock-closed-outline"
            validator={(text: string) => initialValues.password === text}
            onChange={text =>
              setInitialValues({...initialValues, confirmPassword: text})
            }
            value={initialValues.confirmPassword}
          />
          <CustomTextInput
            placeholder="University"
            icon="school-outline"
            onChange={text =>
              setInitialValues({...initialValues, university: text})
            }
            value={initialValues.university}
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
              setInitialValues({...initialValues, faculty: item.value});
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
            onChange={text =>
              setInitialValues({...initialValues, department: text})
            }
            value={initialValues.department}
          />
          <RegisterButton onPress={() => registerF()} testID="registerButton">
            <RegisterText>Register</RegisterText>
          </RegisterButton>
        </Form>
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
