import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Pdf from 'react-native-pdf';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_HEIGHT} from '../../constants/Screen';

export const SafeView = styled(SafeAreaView)({
  flex: 1,
  backgroundColor: Colors.black,
});

export const Container = styled(View)({
  flex: 1,
  alignItems: 'center',
  paddingLeft: 12,
  paddingRight: 12,
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

export const PdfViewer = styled(Pdf)({
  width: '100%',
  height: SCREEN_HEIGHT / 5,
  marginTop: 12,
  backgroundColor: 'transparent',
  alignSelf: 'center',
});

export const ReviewContainer = styled(View)({
  alignSelf: 'flex-end',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 12,
});

export const ReviewText = styled(Text)({
  fontSize: 16,
  color: Colors.white,
  marginLeft: 4,
  marginRight: 12,
});

export const AboutContainer = styled(View)({
  width: '100%',
  marginTop: 12,
});

export const AboutText = styled(Text)({
  fontFamily: 'Raleway',
  fontWeight: 'bold',
  fontSize: 18,
  color: Colors.white,
});

export const AboutDetailContainer = styled(View)({
  flexDirection: 'row',
  marginTop: 8,
  alignItems: 'center',
});

export const DetailText = styled(Text)({
  fontFamily: 'Raleway',
  color: Colors.white,
  fontSize: 16,
  marginLeft: 8,
});

export const DescriptionContainer = styled(ScrollView)({
  width: '100%',
  paddingBottom: 12,
  marginTop: 28,
});

export const DescriptionTitle = styled(Text)({
  fontFamily: 'Raleway',
  fontWeight: 'bold',
  color: Colors.white,
  fontSize: 18,
});

export const DescriptionText = styled(Text)({
  fontFamily: 'Raleway',
  color: Colors.white,
  fontSize: 16,
  marginTop: 8,
});

export const Button = styled(TouchableOpacity)({
  height: 40,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  background: Colors.purple,
  paddingBottom: 6,
  paddingTop: 6,
  paddingRight: 12,
  paddingLeft: 12,
  marginTop: 8,
  borderRadius: 8,
});

export const ButtonText = styled(Text)({
  fontSize: 18,
  fontFamily: 'Raleway',
  fontWeight: 'bold',
  color: Colors.white,
});
