import {Text, TextInput, View} from 'react-native';
import styled from 'styled-components';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dropdown as RNDropdown} from 'react-native-element-dropdown';

import {Colors} from '../../constants/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/Screen';

export const TopContainer = styled(View)({
  height: SCREEN_HEIGHT / 3,
});

export const Icon = styled(MaterialIcon)({
  alignSelf: 'flex-end',
  margin: 12,
});

export const ProfileWrapper = styled(View)({
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 24,
});

export const NameText = styled(TextInput)({
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

export const Dropdown = styled(RNDropdown)({
  width: SCREEN_WIDTH / 1.2,
  height: 50,
  borderColor: 'gray',
  marginTop: 12,
  paddingRight: 8,
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
