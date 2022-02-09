import React, {FC} from 'react';
import {View} from 'react-native';
import {
  Container,
  CourseIDText,
  CourseText,
  CourseTypeContainer,
  CourseTypeText,
} from './CourseCard.styles';

interface ICard {
  item: any;
}

export const CourseCard: FC<ICard> = ({item}) => {
  return (
    <Container>
      <View>
        <CourseText>{item.name}</CourseText>
        <CourseIDText>{item.courseID}</CourseIDText>
        <CourseTypeContainer>
          <CourseTypeText>{item.type}</CourseTypeText>
        </CourseTypeContainer>
      </View>
    </Container>
  );
};
