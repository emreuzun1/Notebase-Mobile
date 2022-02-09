import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const KeyboardAvoiding = styled(KeyboardAvoidingView)({
  flex: 1,
  width: SCREEN_WIDTH / 1.5,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
});

export const NotebaseIcon = styled(Image)({
  marginBottom: 48,
});

export const ForgotText = styled(TouchableOpacity)({
  alignSelf: 'flex-end',
});

export const LoginButton = styled(TouchableOpacity)({
  marginTop: 48,
  width: SCREEN_WIDTH / 2.5,
  borderRadius: 8,
  backgroundColor: Colors.orange,
  padding: 12,
  justifyContent: 'center',
  alignItems: 'center',
});

export const LoginText = styled(Text)({
  fontSize: 20,
  color: 'white',
});

export const RegisterText = styled(Text)({
  fontSize: 13,
  marginTop: 12,
  fontWeight: '200',
});

export const RegisterButton = styled(TouchableOpacity)({
  flexDirection: 'row',
});
