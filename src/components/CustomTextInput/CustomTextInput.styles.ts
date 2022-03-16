import {Text, TextInput, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const Container = styled(View)({
  marginTop: 12,
  marginBottom: 12,
});

export const Input = styled(TextInput)({
  marginTop: 4,
  width: SCREEN_WIDTH / 2,
  height: 30,
  borderBottomWidth: 0.2,
  borderColor: Colors.white,
  padding: 4,
});
