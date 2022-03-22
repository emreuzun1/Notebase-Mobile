import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';

export const HomeSafeView = styled(SafeAreaView)({
  flex: 1,
  backgroundColor: Colors.black,
});

export const HomeContainer = styled(View)({
  flex: 1,
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 36,
});

export const HiText = styled(Text)({
  fontSize: 20,
  fontFamily: 'Raleway',
  color: Colors.white,
});

export const WelcomeText = styled(Text)({
  fontSize: 20,
  fontFamily: 'Raleway',
  fontWeight: 'bold',
  color: Colors.white,
  marginTop: 8,
});

export const ListContainer = styled(View)({
  marginTop: 40,
});

export const ListTitleContainer = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const ListTitle = styled(Text)({
  fontSize: 18,
  fontWeight: '700',
  color: Colors.white,
});

export const ViewText = styled(Text)({
  fontSize: 14,
  fontWeight: '400',
  color: Colors.purple,
});
