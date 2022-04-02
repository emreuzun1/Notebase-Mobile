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
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

import {Background} from '../../components/Background/Background';
import {TabParamList} from '../../Navigation/Navigator';
import {CustomTextInput} from '../../components/CustomTextInput/CustomTextInput';
import {
  Container,
  DescriptionContainer,
  Dropdown,
  InputContainer,
  PdfViewer,
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
import {createDocumentApi} from '../../lib/api';
import {Document} from '../../Interfaces/Document';

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
  const [document, setDocument] = useState<Document>({
    title: 'Change Title',
    university: student.user.university,
    department: student.user.department,
    course: 'Course ID',
    file: undefined,
    description: '',
    date: '',
    faculty: student.user.faculty,
    user: student.user.id,
  });
  const [isFocus, setIsFocus] = useState(false);

  const handleDocumentSelection = async () => {
    const response = await DocumentPicker.pick({
      allowMultiSelection: false,
      type: [types.pdf],
    });
    setDocument({...document, file: response[0]});
  };

  const createDocument = async () => {
    try {
      await createDocumentApi(document, student.token).then(res => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Background>
        <Container contentContainerStyle={{alignItems: 'center'}}>
          <TitleInput
            value={document.title}
            onChangeText={val => setDocument({...document, title: val})}
            maxLength={32}
          />
          <InputContainer>
            <Ionicons name="school" size={24} color={Colors.white} />
            <TextInput
              value={document.university}
              placeholder="University name"
              onChangeText={text =>
                setDocument({...document, university: text})
              }
            />
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
            value={document.faculty}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setDocument({...document, faculty: item});
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign color={Colors.white} name="menu-fold" size={24} />
            )}
          />
          <CustomTextInput
            value={document.department}
            placeholder="Write the department that note is belong"
            onChange={val => setDocument({...document, department: val})}
          />
          <DescriptionContainer
            textAlignVertical="top"
            multiline={true}
            placeholder="Description"
            placeholderTextColor={Colors.white}
            value={document.description}
            onChangeText={text => setDocument({...document, description: text})}
          />
          <PickButton onPress={handleDocumentSelection}>
            <Ionicons name="cloud-upload" size={32} color={Colors.white} />
          </PickButton>
          <UploadButton
            onPress={() => {
              createDocument();
            }}>
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
