import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/Screen';

export const UploadContainer = styled(View)({
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  alignItems: 'center',
  paddingLeft: 6,
  paddingRight: 6,
  backgroundColor: 'white',
  paddingTop: 128,
});

export const FieldContainer = styled(View)({
  width: '100%',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 36,
});

export const FieldTitle = styled(Text)({
  width: '30%',
  fontSize: 17,
  color: 'black',
});

export const UploadButtonContainer = styled(TouchableOpacity)({
  width: 180,
  height: 35,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(89, 65, 125, 0.1)',
  borderWidth: 1,
  borderColor: Colors.purple,
  borderRadius: 8,
  alignSelf: 'center',
});

export const FieldText = styled(Text)({
  width: '70%',
  fontSize: 17,
  color: 'black',
  textAlign: 'center',
});

export const UploadButton = styled(TouchableOpacity)({
  width: SCREEN_WIDTH / 1.3,
  backgroundColor: Colors.orange,
  borderRadius: 10,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 48,
});

export const UploadText = styled(Text)({
  fontSize: 24,
  fontWeight: '400',
  color: 'white',
});
