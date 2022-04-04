import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../constants/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/Screen';

export const TopContainer = styled(View)({
  height: SCREEN_HEIGHT / 3,
});

export const Icon = styled(Ionicons)({
  alignSelf: 'flex-end',
  margin: 12,
});

export const ProfileWrapper = styled(View)({
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 24,
});

export const NameText = styled(Text)({
  color: Colors.white,
  fontSize: 24,
  fontWeight: 700,
  fontFamily: 'Raleway',
});

export const SchoolText = styled(Text)({
  fontSize: 20,
  fontWeight: 500,
  color: Colors.white,
  marginTop: 8,
});

export const DepartmentText = styled(Text)({
  fontSize: 20,
  color: Colors.white,
  marginTop: 4,
});

export const PointContainer = styled(View)({
  marginTop: 8,
  flexDirection: 'row',
});

export const PointText = styled(Text)({
  fontFamily: 'Raleway',
  fontWeight: 700,
  color: Colors.white,
  fontSize: 20,
});
