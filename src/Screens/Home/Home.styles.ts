import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

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

export const DateText = styled(Text)({
  fontSize: 18,
  fontWeight: '300',
  color: Colors.white,
});

export const WelcomeText = styled(Text)({
  fontSize: 36,
  marginTop: 8,
  color: Colors.white,
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

export const ListSubtitleText = styled(Text)({
  fontSize: 14,
  fontWeight: '300',
  marginTop: 4,
  color: Colors.white,
});

export const ViewText = styled(Text)({
  fontSize: 14,
  fontWeight: '400',
  color: Colors.purple,
});
