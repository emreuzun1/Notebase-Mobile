import React, {FC} from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constants/Colors';

import {
  Container,
  MaterialCourseID,
  MaterialName,
  MaterialTypeContainer,
  MaterialTypeText,
} from './MaterialCard.styles';

interface IMaterial {
  item: any;
}

export const MaterialCard: FC<IMaterial> = ({item}) => {
  return (
    <Container>
      <Ionicons name="document-text" size={36} color={Colors.purple} />
      <View>
        <MaterialName>{item.name}</MaterialName>
        <MaterialCourseID>{item.courseID}</MaterialCourseID>
        <MaterialTypeContainer>
          <MaterialTypeText>{item.type}</MaterialTypeText>
        </MaterialTypeContainer>
      </View>
    </Container>
  );
};
