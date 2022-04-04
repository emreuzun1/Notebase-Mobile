/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import * as RootNavigation from '../../Navigation/RootNavigation';

import {useAppSelector} from '../../redux/hooks';
import {State} from '../../Interfaces/State';
import {Document} from '../../Interfaces/Document';
import {MaterialCard} from '../../components/MaterialCard/MaterialCard';
import {Background} from '../../components/Background/Background';
import {getStudentDocuments} from '../../redux/reducers/selector';
import {
  DepartmentText,
  Icon,
  NameText,
  PointContainer,
  PointText,
  ProfileWrapper,
  SchoolText,
  TopContainer,
} from './Profile.styles';
import {Colors} from '../../constants/Colors';

export const Profile = () => {
  const {student} = useAppSelector((state: State) => state.auth);
  const documents: Document[] = useSelector(getStudentDocuments);

  return (
    <Background>
      <TopContainer>
        <Icon
          name="settings-outline"
          size={24}
          color={Colors.white}
          onPress={() => RootNavigation.navigate('Settings', {})}
        />
        <ProfileWrapper>
          <NameText>
            {student.user.first_name} {student.user.last_name}
          </NameText>
          <SchoolText>{student.user.university}</SchoolText>
          <DepartmentText>{student.user.department}</DepartmentText>
          <PointContainer>
            <PointText>{student.user.point}</PointText>
            <MaterialIcon
              name="star-four-points"
              size={24}
              color={Colors.purple}
              style={{marginLeft: 4}}
            />
          </PointContainer>
        </ProfileWrapper>
      </TopContainer>
      <FlatList
        style={{marginTop: 8}}
        data={documents}
        keyExtractor={(item: Document) => item.id!}
        renderItem={({item}) => <MaterialCard item={item} />}
      />
    </Background>
  );
};
