import React, {FC} from 'react';
import {View} from 'react-native';
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
