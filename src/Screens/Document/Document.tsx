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
import {getStudentApi} from '../../lib/api';

type RouteProps = RouteProp<RootStackParamList, 'Document'>;
type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Document'
>;

interface IDocument {
  route: RouteProps;
  navigation: NavigationProps;
}

const Document: FC<IDocument> = ({route, navigation}) => {
  const document: Readonly<DocumentInterface> = route.params.item;
  const [student, setStudent] = useState<Student>();
  const source = {uri: `${document.file}`};

  const getStudent = async () => {
    await getStudentApi(document.user).then(res => {
      setStudent({user: res.data, token: ''});
    });
  };

  useEffect(() => {
    getStudent();
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
            onLoadComplete={numberOfPages => {
              //console.log(`Number of pages: ${numberOfPages}`);
            }}
            onError={error => {
              console.log(error);
            }}
            maxScale={1}
            horizontal
          />
          <ReviewContainer>
            <Ionicons name="heart" size={24} color={Colors.purple} />
            <ReviewText>{document.like_count}</ReviewText>
            <Ionicons name="heart-dislike" size={24} color={Colors.orange} />
            <ReviewText>{document.like_count}</ReviewText>
            <MaterialIcons name="report" size={24} color={Colors.white} />
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
              <DetailText>{student?.user.username}</DetailText>
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
          <TakeCourseButton>
            <TakeCourseText>Take course</TakeCourseText>
          </TakeCourseButton>
        </Container>
      </Background>
    </SafeView>
  );
};

export default Document;
