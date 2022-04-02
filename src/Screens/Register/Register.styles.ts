import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import {Dropdown as RNDropdown} from 'react-native-element-dropdown';

import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const KeyboardAvoiding = styled(KeyboardAvoidingView)({
  flex: 1,
  backgroundColor: Colors.black,
});

export const NotebaseIcon = styled(Image)({
  marginBottom: 48,
});

export const NewText = styled(Text)({
  fontSize: 24,
  fontFamily: 'Raleway-Regular',
  color: Colors.white,
});

export const Form = styled(ScrollView)({
  marginTop: 48,
  width: SCREEN_WIDTH,
});

export const RegisterInfoText = styled(Text)({
  fontSize: 14,
  fontFamily: 'Raleway-Regular',
  color: Colors.white,
  marginTop: 8,
});
export const RegisterButton = styled(TouchableOpacity)({
  marginTop: 48,
  width: 96,
  height: 40,
  borderRadius: 12,
  backgroundColor: Colors.orange,
  justifyContent: 'center',
  alignItems: 'center',
});

export const RegisterText = styled(Text)({
  fontSize: 16,
  color: Colors.white,
});

export const Dropdown = styled(RNDropdown)({
  width: SCREEN_WIDTH / 1.2,
  height: 50,
  borderColor: 'gray',
  marginTop: 12,
  paddingRight: 8,
});
