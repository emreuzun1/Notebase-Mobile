import {Text, TextInput, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';

export const InputContainer = styled(View)({
  width: '100%',
  height: 40,
  paddingLeft: 12,
  paddingRight: 12,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const InputBar = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',

  width: '75%',
  height: 40,
  padding: 10,
  borderWidth: 0.5,
  borderColor: Colors.white,
  borderRadius: 8,
});

export const Input = styled(TextInput)({
  width: '80%',
  height: 40,
  padding: 4,
  color: 'white',
});
