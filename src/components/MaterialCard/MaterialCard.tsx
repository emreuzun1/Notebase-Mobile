/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '../../constants/Colors';
import {Document} from '../../Interfaces/Document';
import * as RootNavigation from '../../Navigation/RootNavigation';

import {
  Container,
  MaterialCourseID,
  MaterialName,
  ReviewContainer,
  ReviewText,
} from './MaterialCard.styles';

interface IMaterial {
  item: Document;
}

export const MaterialCard: FC<IMaterial> = ({item}) => {
  return (
    <Container onPress={() => RootNavigation.navigate('Document', {item})}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons name="document-text" size={52} color={Colors.orange} />
        <View>
          <MaterialName numberOfLines={1}>{item.title}</MaterialName>
          <MaterialCourseID numberOfLines={1}>
            {item.department} ({item.university})
          </MaterialCourseID>
        </View>
      </View>
      <ReviewContainer>
        <Ionicons name="heart" size={24} color={Colors.purple} />
        <ReviewText>{item.like_count}</ReviewText>
        <Ionicons name="heart-dislike" size={24} color={Colors.orange} />
        <ReviewText>{item.like_count}</ReviewText>
        <MaterialIcons name="report" size={24} color={Colors.white} />
        <ReviewText>{item.like_count}</ReviewText>
      </ReviewContainer>
    </Container>
  );
};
