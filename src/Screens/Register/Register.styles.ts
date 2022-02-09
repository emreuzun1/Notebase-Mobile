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
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
});

export const NotebaseIcon = styled(Image)({
  marginBottom: 48,
});

export const RegisterButton = styled(TouchableOpacity)({
  marginTop: 48,
  width: SCREEN_WIDTH / 2.5,
  borderRadius: 8,
  backgroundColor: Colors.purple,
  padding: 12,
  justifyContent: 'center',
  alignItems: 'center',
});

export const RegisterText = styled(Text)({
  fontSize: 20,
  color: 'white',
});
