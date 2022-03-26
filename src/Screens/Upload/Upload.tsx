/* eslint-disable react-native/no-inline-styles */
import React, {FC, useCallback, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  types,
} from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {KeyboardAvoidingView, Platform, StyleSheet, Text} from 'react-native';

import {Background} from '../../components/Background/Background';
import {TabParamList} from '../../Navigation/Navigator';
import {CustomTextInput} from '../../components/CustomTextInput/CustomTextInput';
import {
  Container,
  DescriptionContainer,
  Dropdown,
  InputContainer,
  PickButton,
  TextInput,
  TitleInput,
  UploadButton,
  UploadText,
} from './Upload.styles';

import {Colors} from '../../constants/Colors';
import {Student} from '../../Interfaces/Student';
import {useAppSelector} from '../../redux/hooks';
import {State} from '../../Interfaces/State';
import {Faculties} from '../../constants/Faculty';

type NavigationProp = NativeStackNavigationProp<TabParamList, 'Upload'>;

interface IUpload {
  navigation: NavigationProp;
}

/**
 *
 * @returns the JSX Element of Creation of Document Screen.
 */

export const Upload: FC<IUpload> = ({navigation}) => {
  const student: Student = useAppSelector((state: State) => state.auth.student);
  const [title, setTitle] = useState<string>('Change Title');
  const [university, setUniversity] = useState<string>(student.user.username);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [result, setResult] = useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >();

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: false,
        type: [types.pdf],
      });
      setResult(response);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Background>
        <Container contentContainerStyle={{alignItems: 'center'}}>
          <TitleInput
            value={title}
            onChangeText={val => setTitle(val)}
            maxLength={32}
          />
          <InputContainer>
            <Ionicons name="school" size={24} color={Colors.white} />
            <TextInput value={university} placeholder="University name" />
          </InputContainer>
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
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign color={Colors.white} name="menu-fold" size={24} />
            )}
          />
          <CustomTextInput placeholder="Write the department that note is belong" />
          <DescriptionContainer
            textAlignVertical="top"
            multiline={true}
            placeholder="Description"
            placeholderTextColor={Colors.white}
          />
          <PickButton onPress={handleDocumentSelection}>
            <Ionicons name="cloud-upload" size={32} color={Colors.white} />
          </PickButton>
          <UploadButton>
            <UploadText>Upload</UploadText>
          </UploadButton>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Raleway',
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
