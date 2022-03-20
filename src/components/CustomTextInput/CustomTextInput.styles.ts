import {TextInput as RNTextInput, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const Container = styled(View)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 12,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: Colors.white,
  borderRadius: 8,
  width: SCREEN_WIDTH / 1.3,
  height: 50,
  paddingLeft: 12,
  paddingRight: 12,
});

export const TextInput = styled(RNTextInput)({
  marginLeft: 8,
  color: Colors.white,
  flex: 10,
});

export const IconContainer = styled(View)({
  flex: 1,
});
