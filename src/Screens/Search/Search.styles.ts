import {Text, TextInput, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

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

export const SearchContainer = styled(View)({
  height: '100%',
  width: '100%',
  alignItems: 'center',
});

export const ResultText = styled(Text)({
  fontSize: 18,
  color: Colors.white,
  opacity: 0.8,
  fontFamily: 'Raleway',
});
