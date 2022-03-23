import React, {FC} from 'react';

import {RouteProp} from '@react-navigation/native';
import {Background} from '../../components/Background/Background';
import {Container, SafeView, SubTitle, Title} from './Document.styles';
import {RootStackParamList} from '../../Navigation/Navigator';

type RouteProps = RouteProp<RootStackParamList, 'Document'>;

interface IDocument {
  route: RouteProps;
}

const Document: FC<IDocument> = ({route}) => {
  const document = route.params.item;

  return (
    <SafeView>
      <Background>
        <Container>
          <Title>{document.title}</Title>
          <SubTitle>{document.department}</SubTitle>
        </Container>
      </Background>
    </SafeView>
  );
};

export default Document;
