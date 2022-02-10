import React, {FC} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, MaterialText} from './UploadCard.styles';

interface ICard {
  item: any;
}

export const UploadCard: FC<ICard> = ({item}) => {
  return (
    <Container>
      <MaterialCommunityIcons name="file-document" size={24} color="black" />
      <MaterialText>{item}</MaterialText>
    </Container>
  );
};
