import {Text, TextInput, View} from 'react-native';
import styled from 'styled-components';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const Container = styled(View)({
  marginTop: 12,
  marginBottom: 12,
});

export const Label = styled(Text)({
  fontSize: 11,
  color: 'black',
});

export const Input = styled(TextInput)({
  marginTop: 4,
  width: SCREEN_WIDTH / 2,
  height: 30,
  borderWidth: 0.2,
  borderRadius: 8,
  borderColor: 'black',
  padding: 4,
});
