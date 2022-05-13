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
    <Container
      onPress={() =>
        RootNavigation.navigate('Document', {
          document: item,
        })
      }>
      <View style={{flexDirection: 'row'}}>
        <Ionicons name="document-text" size={52} color={Colors.orange} />
        <View>
          <MaterialName numberOfLines={1}>{item.title}</MaterialName>
          <MaterialCourseID numberOfLines={1}>
            {item.faculty} ({item.university})
          </MaterialCourseID>
        </View>
      </View>
    </Container>
  );
};
