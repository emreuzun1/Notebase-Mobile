/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Background} from '../../components/Background/Background';
import {
  AboutContainer,
  AboutDetailContainer,
  AboutText,
  Container,
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  DetailText,
  PdfViewer,
  ReviewContainer,
  ReviewText,
  SafeView,
  SubTitle,
  TakeCourseButton,
  TakeCourseText,
  Title,
} from './Document.styles';
import {RootStackParamList} from '../../Navigation/Navigator';
import {Header} from '../../components/Header/Header';
import {Document as DocumentInterface} from '../../Interfaces/Document';
import {Colors} from '../../constants/Colors';
import {Student} from '../../Interfaces/Student';
import {
  createDownloadApi,
  getStudentApi,
  getStudentDownloadsApi,
} from '../../lib/api';
import {useAppSelector} from '../../redux/hooks';
import {State} from '../../Interfaces/State';

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
 *
 * @param navigation To navigate through screens.
 * @param route To get the passed element from other screen.
 * @returns the JSX Element for Document Screen.
 */
const Document: FC<IDocument> = ({route, navigation}) => {
  const document: Readonly<DocumentInterface> = route.params.item;
  const [author, setAuthor] = useState<Student>();
  const [downloaded, setDownloaded] = useState<Download>();
  const student: Student | undefined = useAppSelector(
    (state: State) => state.auth.student,
  );
  const [isTaken, setIsTaken] = useState<boolean>(false);
  const source = {uri: `${document.file}`};

  // Checks if the document is already taken or not.
  const checkForTaken = async () => {
    await getStudentDownloadsApi(student.user.id, student.token!).then(res => {
      res.data.map((download: Download) => {
        if (download.document === document.id) {
          setIsTaken(true);
          setDownloaded(download);
        }
      });
    });
  };

  const takeDocument = async () => {
    await createDownloadApi(student.user.id, student.token!, document.id!).then(
      () => {
        checkForTaken();
      },
    );
  };

  const getAuthor = async () => {
    await getStudentApi(document.user).then(res => {
      setAuthor(res.data);
      console.log('Author : ', author);
    });
  };

  //  Runs the function before screens rendered.
  useEffect(() => {
    checkForTaken();
    getAuthor();
  }, []);

  return (
    <SafeView>
      <Background>
        <Header navigation={navigation} />
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
          <ReviewContainer>
            <Ionicons
              name="heart"
              size={24}
              color={downloaded?.has_liked ? Colors.purple : Colors.white}
              onPress={() => console.log('Liked')}
            />
            <ReviewText>{document.like_count}</ReviewText>
            <Ionicons
              name="heart-dislike"
              size={24}
              color={downloaded?.has_disliked ? Colors.orange : Colors.white}
            />
            <ReviewText>{document.like_count}</ReviewText>
            <MaterialIcons
              name="report"
              size={24}
              color={downloaded?.has_reported ? Colors.red : Colors.white}
            />
            <ReviewText>{document.like_count}</ReviewText>
          </ReviewContainer>
          <AboutContainer>
            <AboutText>About</AboutText>
            <AboutDetailContainer>
              <Ionicons name="school-outline" size={24} color={Colors.white} />
              <DetailText>{document.university}</DetailText>
            </AboutDetailContainer>
            <AboutDetailContainer>
              <Ionicons name="pencil" size={24} color={Colors.white} />
              {/* <DetailText>{author?.user.first_name}</DetailText> */}
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
          {!isTaken && (
            <TakeCourseButton onPress={takeDocument}>
              <TakeCourseText>Take Document</TakeCourseText>
            </TakeCourseButton>
          )}
        </Container>
      </Background>
    </SafeView>
  );
};

export default Document;
