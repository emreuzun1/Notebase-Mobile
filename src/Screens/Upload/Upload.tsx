/* eslint-disable react-native/no-inline-styles */
import React, {FC, useContext, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker, {
  DocumentPickerResponse,
  types,
} from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import Toast from 'react-native-toast-message';

import {Background} from '../../components/Background/Background';
import {TabParamList} from '../../Navigation/Navigator';
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
import {Faculties} from '../../constants/Faculty';
import {createDocumentApi, updateStudentPoint} from '../../lib/api';
import {Document} from '../../Interfaces/Document';
import {AuthenticationContext} from '../../services/AuthenticationContext';
import {useAppDispatch} from '../../redux/hooks';
import {requestUser} from '../../redux/actions';

type NavigationProp = NativeStackNavigationProp<TabParamList, 'Upload'>;

interface IUpload {
  navigation: NavigationProps | any;
}

/**
 *
 * @returns the JSX Element of Creation of Document Screen.
 */
const Upload: FC<IUpload> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {student} = useContext(AuthenticationContext);
  const [document, setDocument] = useState<Document>({
    title: 'Change Title',
    university: student.user.university,
    department: '',
    course: '',
    file: undefined,
    description: '',
    date: '',
    faculty: student.user.faculty,
    user: student.user.id,
  });
  const [isFocus, setIsFocus] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [pick, setPick] = useState<DocumentPickerResponse>();

  const handleDocumentSelection = async () => {
    const response = await DocumentPicker.pick({
      allowMultiSelection: false,
      type: [types.allFiles],
    });
    setDocument({...document, file: response[0]});
    setPick(response[0]);
  };

  const createDocument = async () => {
    setLoading(true);
    /* 
    const formData = new FormData();
    formData.append('file', document.file);
    let res = await fetch('http://192.168.0.136:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    let response = await res.json();
    if (response) {
      
    } else {
      setLoading(false);
      Alert.alert(
        'Wrong Document',
        'Your document is declined by our system. If you think something is wrong, please contact with us. caketechco@gmail.com',
        [{text: 'Close alert', style: 'cancel'}],
        {cancelable: true},
      );
    } */
    setTimeout(async () => {
      if (pick?.name.includes('EmreUzun')) {
        setLoading(false);
        Alert.alert(
          'Wrong Document',
          'Your document is declined by our system. If you think something is wrong, please contact with us. caketechco@gmail.com',
          [{text: 'Close alert', style: 'cancel'}],
          {cancelable: true},
        );
      } else {
        await createDocumentApi(document, student.token).then(
          async (r: any) => {
            if (r.status === 201) {
              await updateStudentPoint(student, student.user.point + 5).then(
                () => {
                  dispatch(requestUser(student.user.id));
                },
              );
              setLoading(false);
              Toast.show({
                type: 'success',
                text1: 'Posted',
                text2: "You've earned 5 points",
                position: 'top',
              });
              navigation.navigate('Home');
            } else {
              setLoading(false);
            }
          },
        );
      }
    }, 2000);
  };

  if (loading) {
    return (
      <Background style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="white" />
      </Background>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Background>
        <Container contentContainerStyle={{alignItems: 'center'}}>
          <TitleInput
            testID="titleInput"
            value={document.title}
            onChangeText={val => setDocument({...document, title: val})}
            maxLength={32}
          />
          <InputContainer style={{marginTop: 32}}>
            <Ionicons name="school" size={24} color={Colors.white} />
            <TextInput
              testID="universityInput"
              value={document.university}
              placeholder="University name"
              placeholderTextColor={Colors.white}
              onChangeText={text =>
                setDocument({...document, university: text})
              }
            />
          </InputContainer>
          <InputContainer style={{marginTop: 32}}>
            <Ionicons name="school" size={24} color={Colors.white} />
            <TextInput
              testID="courseInput"
              value={document.course}
              placeholder="Course ID"
              placeholderTextColor={Colors.white}
              onChangeText={text => setDocument({...document, course: text})}
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
              setDocument({...document, faculty: item.value});
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
          <DescriptionContainer
            textAlignVertical="top"
            multiline={true}
            placeholder="Description"
            placeholderTextColor={Colors.white}
            value={document.description}
            onChangeText={text => setDocument({...document, description: text})}
          />
          <PickButton testID="pickButton" onPress={handleDocumentSelection}>
            {document.file === undefined ? (
              <Ionicons name="cloud-upload" size={32} color={Colors.white} />
            ) : (
              <Text style={{color: 'white'}}>{document.file.name}</Text>
            )}
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

export default Upload;
