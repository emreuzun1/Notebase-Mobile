import React, {FC, useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';

import {Background} from '../../components/Background/Background';
import {Colors} from '../../constants/Colors';
import {
  Container,
  TitleInput,
  TextInput,
  Dropdown,
  DescriptionContainer,
  InputContainer,
  UploadButton,
  UploadText,
} from './Edit.styles';
import {RootStackParamList} from '../../Navigation/Navigator';
import {Document} from '../../Interfaces/Document';
import {Faculties} from '../../constants/Faculty';
import {useAppSelector} from '../../redux/hooks';
import {State} from '../../Interfaces/State';
import {editDocumentApi} from '../../lib/api';
import {Header} from '../../components/Header/Header';

type RouteProps = RouteProp<RootStackParamList, 'Edit'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Edit'>;

interface IEdit {
  route: RouteProps;
  navigation: NavigationProp;
}

const Edit: FC<IEdit> = ({route, navigation}) => {
  const {student} = useAppSelector((state: State) => state.auth);
  const [document, setDocument] = useState<Document>(route.params.document);
  const [isFocus, setIsFocus] = useState(false);

  const editDocument = async () => {
    await editDocumentApi(document, student.token).then(res => {
      if (res.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Edited',
          text2: "You've successfully edited the document",
          position: 'bottom',
        });
        navigation.goBack();
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Background>
        <Header navigation={navigation} />
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
          <UploadButton onPress={() => editDocument()}>
            <UploadText>Save</UploadText>
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

export default Edit;
