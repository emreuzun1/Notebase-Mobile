import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';

export const SafeView = styled(SafeAreaView)({
  flex: 1,
  backgroundColor: Colors.black,
});

export const Container = styled(View)({
  flex: 1,
  alignItems: 'center',
  marginTop: 24,
});

export const Title = styled(Text)({
  fontSize: 24,
  fontWeight: 'bold',
  color: Colors.white,
});

export const SubTitle = styled(Text)({
  fontSize: 20,
  color: Colors.white,
  fontFamily: 'Raleway-Regular',
  marginTop: 8,
});
