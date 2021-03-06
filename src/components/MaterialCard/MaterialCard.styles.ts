import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const Container = styled(TouchableOpacity)({
  width: SCREEN_WIDTH / 1.1,
  backgroundColor: '#171717',
  marginTop: 12,
  marginLeft: 8,
  paddingTop: 12,
  paddingBottom: 6,
  paddingRight: 12,
  paddingLeft: 12,
  borderRadius: 12,
});

export const MaterialName = styled(Text)({
  fontSize: 20,
  fontWeight: 'bold',
  color: Colors.white,
  maxWidth: '100%',
  fontFamily: 'Raleway-Regular',
});

export const MaterialCourseID = styled(Text)({
  maxWidth: '100%',
  fontSize: 14,
  fontWeight: '400',
  color: Colors.white,
  marginTop: 4,
});

export const ReviewContainer = styled(View)({
  alignSelf: 'flex-end',
  flexDirection: 'row',
  alignItems: 'center',
});

export const ReviewText = styled(Text)({
  fontSize: 16,
  color: Colors.white,
  marginLeft: 4,
  marginRight: 12,
});
