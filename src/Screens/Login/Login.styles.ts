import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const KeyboardAvoiding = styled(KeyboardAvoidingView)({
  flex: 1,
  backgroundColor: Colors.black,
});

export const Background = styled(ImageBackground)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const NotebaseIcon = styled(Image)({
  marginBottom: 28,
});

export const ForgotText = styled(TouchableOpacity)({
  alignSelf: 'flex-end',
});

export const NewText = styled(Text)({
  fontSize: 24,
  fontFamily: 'Raleway-Regular',
  color: Colors.white,
});

export const LoginInfoText = styled(Text)({
  fontSize: 14,
  fontFamily: 'Raleway-Regular',
  color: Colors.white,
  marginTop: 8,
});

export const LoginButton = styled(TouchableOpacity)({
  marginTop: 48,
  width: 96,
  height: 36,
  borderRadius: 12,
  backgroundColor: Colors.orange,
  justifyContent: 'center',
  alignItems: 'center',
});

export const LoginText = styled(Text)({
  fontSize: 16,
  fontFamily: 'Raleway-Regular',
  color: Colors.white,
});

export const RegisterButton = styled(TouchableOpacity)({
  flexDirection: 'row',
  position: 'absolute',
  bottom: 24,
});

export const RegisterText = styled(Text)({
  fontSize: 18,
  fontFamily: 'Raleway-Regular',
  color: Colors.white,
});