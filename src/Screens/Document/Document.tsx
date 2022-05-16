/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useContext, useEffect, useState} from 'react';
import {RouteProp, useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';

import {Background} from '../../components/Background/Background';
import {
  AboutContainer,
  AboutDetailContainer,
  AboutText,
  Button,
  ButtonText,
  Container,
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  DetailText,
  PdfViewer,
  SafeView,
  SubTitle,
  Title,
} from './Document.styles';
import {RootStackParamList} from '../../Navigation/Navigator';
import {Header} from '../../components/Header/Header';
import {Document as DocumentInterface} from '../../Interfaces/Document';
import {Colors} from '../../constants/Colors';
import {Student} from '../../Interfaces/Student';
import {
  createDownloadApi,
  deleteDocumentApi,
  getDocumentByIdApi,
  getStudentApi,
  getStudentDownloadsApi,
  updateStudentPoint,
} from '../../lib/api';
import {AuthenticationContext} from '../../services/AuthenticationContext';
import {ActivityIndicator, Alert, View} from 'react-native';
import {useAppDispatch} from '../../redux/hooks';
import {requestUser} from '../../redux/actions';

type RouteProps = RouteProp<RootStackParamList, 'Document'>;
type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Document'
>;

interface IDocument {
  route: RouteProps;
  navigation: NavigationProps;
}

interface Download {
  id: string;
  has_liked: boolean;
  has_disliked: boolean;
  has_reported: boolean;
  date: string;
  user: string;
  document: string;
}

/**
 * @param navigation To navigate through screens.
 * @param route To get the passed element from other screen.
 * @returns the JSX Element for Document Screen.
 */
const Document: FC<IDocument> = ({route, navigation}) => {
  const dispatch = useAppDispatch();
  const [document, setDocument] = useState<DocumentInterface>(
    route.params.document,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<boolean>(false);
  const isFocused = useIsFocused();
  const [author, setAuthor] = useState<Student>({
    user: {
      id: '',
      username: '',
      email: '',
      password: '',
      last_login: '',
      is_superuser: false,
      first_name: '',
      last_name: '',
      date_joined: '',
      is_staff: false,
      is_active: false,
      university: '',
      faculty: '',
      department: '',
      point: 0,
      date: '',
      groups: [],
      user_permissions: [],
    },
    token: '',
  });
  const {student} = useContext(AuthenticationContext);
  const [isTaken, setIsTaken] = useState<boolean>(false);
  const source = {uri: `${document.file}`};

  //  Runs the function before screens rendered.
  useEffect(() => {
    checkForTaken().then(() => getAuthor());
  }, []);

  useEffect(() => {
    if (isFocused) {
      getDocumentById();
    }
  }, [isFocused]);

  const getDocumentById = async () => {
    let response = await getDocumentByIdApi(document.id!, student.token);
    const json = await response.json();
    setDocument(json);
  };

  // Checks if the document is already taken or not.
  const checkForTaken = async () => {
    await getStudentDownloadsApi(student.token!).then(res => {
      res.data.map((download: Download) => {
        if (
          download.document === document.id &&
          download.user === student.user.id
        ) {
          setIsTaken(true);
        }
      });
    });
    setLoading(false);
  };

  // Takes the course.
  const takeDocument = async () => {
    if (student.user.point >= 5) {
      await createDownloadApi(
        student.user.id,
        student.token!,
        document.id!,
      ).then(async () => {
        await updateStudentPoint(student, student.user.point - 5).then(() => {
          dispatch(requestUser(student.user.id));
          checkForTaken();
        });
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong!',
        position: 'bottom',
      });
    }
  };

  // Gets the author of the document.
  const getAuthor = async () => {
    await getStudentApi(document.user.toString()).then(res => {
      setAuthor({user: res.data, token: ''});
      if (res.data.id === student.user.id) {
        setEditMode(true);
      }
    });
  };

  const deleteDocument = async () => {
    await deleteDocumentApi(document, student.token).then(res => {
      if (res.status === 204) {
        navigation.goBack();
      }
    });
  };

  const showAlert = () => {
    Alert.alert(
      'Document Deletion',
      'You are about to delete this document. Are you sure?',
      [
        {text: 'Cancel', style: 'cancel'},
        {style: 'default', text: "I'm sure", onPress: () => deleteDocument()},
      ],
      {cancelable: true},
    );
  };

  if (loading) {
    return (
      <Background>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={Colors.orange} />
        </View>
      </Background>
    );
  }

  return (
    <SafeView>
      <Background>
        <Header
          navigation={navigation}
          isEditMode={editMode}
          editPress={() => navigation.navigate('Edit', {document: document})}
        />
        {!loading && (
          <Container>
            <Title>{document.title}</Title>
            <SubTitle>{document.department}</SubTitle>
            <PdfViewer
              source={source}
              onError={error => {
                console.log(error);
              }}
              maxScale={1}
              horizontal
            />
            <AboutContainer>
              <AboutText>About</AboutText>
              <AboutDetailContainer>
                <Ionicons
                  name="school-outline"
                  size={24}
                  color={Colors.white}
                />
                <DetailText>{document.university}</DetailText>
              </AboutDetailContainer>
              <AboutDetailContainer>
                <Ionicons name="pencil" size={24} color={Colors.white} />
                <DetailText>{author?.user.first_name}</DetailText>
              </AboutDetailContainer>
              <AboutDetailContainer>
                <Ionicons name="time-outline" size={24} color={Colors.white} />
                <DetailText>{document.date}</DetailText>
              </AboutDetailContainer>
            </AboutContainer>
            <DescriptionContainer>
              <DescriptionTitle>Description</DescriptionTitle>
              <DescriptionText>{document.description}</DescriptionText>
            </DescriptionContainer>
            {!isTaken && !editMode ? (
              <Button onPress={takeDocument}>
                <ButtonText>Take Document</ButtonText>
                <ButtonText>{'  '}5</ButtonText>
                <MaterialCommunityIcon
                  name="star-four-points"
                  size={20}
                  color={Colors.orange}
                  style={{marginLeft: 4}}
                />
              </Button>
            ) : (
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Button onPress={() => navigation.navigate('Viewer', document)}>
                  <ButtonText>Open PDF</ButtonText>
                </Button>
                {editMode && (
                  <Button
                    onPress={() => showAlert()}
                    style={{marginLeft: 12, backgroundColor: Colors.darkRed}}>
                    <ButtonText>Delete PDF</ButtonText>
                  </Button>
                )}
              </View>
            )}
          </Container>
        )}
      </Background>
    </SafeView>
  );
};

export default Document;
