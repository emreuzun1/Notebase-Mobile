import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const KeyboardAvoiding = styled(KeyboardAvoidingView)({
  flex: 1,
  backgroundColor: Colors.black,
});

export const Container = styled(ImageBackground)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const NotebaseIcon = styled(Image)({
  marginBottom: 48,
});

export const NewText = styled(Text)({
  fontSize: 24,
  fontFamily: 'Raleway-Regular',
  color: Colors.white,
});

export const RegisterInfoText = styled(Text)({
  fontSize: 14,
  fontFamily: 'Raleway-Regular',
  color: Colors.white,
  marginTop: 8,
});
export const RegisterButton = styled(TouchableOpacity)({
  marginTop: 48,
  width: 108,
  height: 40,
  borderRadius: 12,
  backgroundColor: Colors.purple,
  justifyContent: 'center',
  alignItems: 'center',
});

export const RegisterText = styled(Text)({
  fontSize: 20,
  color: 'white',
});
