import {
  ScrollView,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import {Dropdown as RNDropdown} from 'react-native-element-dropdown';

import {Colors} from '../../constants/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/Screen';
import Pdf from 'react-native-pdf';

export const Container = styled(ScrollView)({
  flex: 1,
  paddingTop: 32,
});

export const TitleInput = styled(RNTextInput)({
  height: 50,
  color: 'white',
  fontFamily: 'Raleway',
  fontSize: 24,
  fontWeight: 'bold',
});

export const InputContainer = styled(View)({
  flexDirection: 'row',
  width: SCREEN_WIDTH / 1.2,
  alignItems: 'center',
});

export const TextInput = styled(RNTextInput)({
  width: SCREEN_WIDTH / 1.4,
  fontSize: 18,
  color: Colors.white,
  padding: 4,
  borderBottomWidth: 1,
  borderColor: Colors.white,
  marginLeft: 8,
});

export const Dropdown = styled(RNDropdown)({
  width: SCREEN_WIDTH / 1.2,
  height: 50,
  borderColor: 'gray',
  paddingRight: 8,
  marginTop: 12,
});

export const DescriptionContainer = styled(RNTextInput)({
  width: SCREEN_WIDTH / 1.2,
  height: 100,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: Colors.white,
  marginTop: 12,
  marginBottom: 24,
  color: Colors.white,
  padding: 12,
  fontSize: 18,
});

export const PickButton = styled(TouchableOpacity)({
  width: SCREEN_WIDTH / 1.2,
  height: 125,
  marginTop: 12,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: Colors.white,
  alignItems: 'center',
  justifyContent: 'center',
});

export const PdfViewer = styled(Pdf)({
  width: '100%',
  height: SCREEN_HEIGHT / 5,
  marginTop: 12,
  backgroundColor: 'transparent',
  alignSelf: 'center',
});

export const UploadButton = styled(TouchableOpacity)({
  width: 125,
  height: 50,
  borderRadius: 12,
  backgroundColor: Colors.orange,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 48,
});

export const UploadText = styled(Text)({
  fontSize: 22,
  fontFamily: 'Raleway',
  color: Colors.white,
  fontWeight: 'bold',
});
