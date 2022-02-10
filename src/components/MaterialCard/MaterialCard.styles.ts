import {Text, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';

export const Container = styled(View)({
  width: 150,
  height: 150,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 8,
  backgroundColor: 'rgba(89, 65, 125, 0.1)',
  borderWidth: 3,
  borderColor: Colors.purple,
  marginLeft: 8,
  borderRadius: 24,
});

export const MaterialName = styled(Text)({
  fontSize: 14,
  fontWeight: '400',
  color: Colors.purple,
});

export const MaterialCourseID = styled(Text)({
  fontSize: 12,
  fontWeight: '400',
  color: Colors.purple,
  marginTop: 4,
});

export const MaterialTypeContainer = styled(View)({
  width: 65,
  backgroundColor: Colors.purple,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 4,
  borderRadius: 24,
  marginTop: 4,
});

export const MaterialTypeText = styled(Text)({
  maxWidth: '80%',
  fontSize: 12,
  fontWeight: '400',
  color: 'white',
});
