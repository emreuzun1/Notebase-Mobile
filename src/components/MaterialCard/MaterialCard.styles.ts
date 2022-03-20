import {Text, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';

export const Container = styled(View)({
  width: 175,
  height: 200,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 8,
  backgroundColor: '#171717',
  marginLeft: 8,
  borderRadius: 12,
});

export const MaterialName = styled(Text)({
  fontSize: 20,
  fontWeight: '600',
  color: Colors.white,
  fontFamily: 'Raleway-Regular',
});

export const MaterialCourseID = styled(Text)({
  fontSize: 14,
  fontWeight: '400',
  fontFamily: 'Raleway-Regular',
  color: Colors.white,
  marginTop: 4,
});
