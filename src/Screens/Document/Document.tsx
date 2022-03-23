import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Background} from '../../components/Background/Background';
import {Container, SafeView, SubTitle, Title} from './Document.styles';
import {RootStackParamList} from '../../Navigation/Navigator';
import {Header} from '../../components/Header/Header';

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
  const document = route.params.item;

  return (
    <SafeView>
      <Background>
        <Header navigation={navigation} />
        <Container>
          <Title>{document.title}</Title>
          <SubTitle>{document.department}</SubTitle>
        </Container>
      </Background>
    </SafeView>
  );
};

export default Document;
