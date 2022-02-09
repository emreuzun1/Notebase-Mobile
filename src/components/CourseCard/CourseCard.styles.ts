import {Text, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const Container = styled(View)({
  borderWidth: 3,
  borderColor: '#E69F00',
  backgroundColor: Colors.orange,
  width: SCREEN_WIDTH / 2.5,
  height: 100,
  marginTop: 8,
  marginLeft: 8,
  borderRadius: 24,
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  paddingRight: 4,
});

export const CourseText = styled(Text)({
  fontSize: 14,
  fontWeight: '400',
  color: Colors.purple,
  maxWidth: '80%',
});

export const CourseIDText = styled(Text)({
  fontSize: 12,
  fontWeight: '400',
  color: Colors.purple,
});

export const CourseTypeContainer = styled(View)({
  width: 56,
  backgroundColor: Colors.purple,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  marginTop: 8,
  padding: 4,
});

export const CourseTypeText = styled(Text)({
  fontSize: 12,
  fontWeight: '400',
  color: 'white',
});
