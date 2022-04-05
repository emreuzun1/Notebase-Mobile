import {Text, TextInput, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';

export const SettingsContainer = styled(View)({
  flex: 1,
  padding: 12,
  alignItems: 'center',
});

export const HeaderTitle = styled(Text)({
  position: 'absolute',
  top: 25,
  alignSelf: 'center',
  fontSize: 20,
  fontFamily: 'Raleway',
  fontWeight: 700,
  color: Colors.white,
});

export const Input = styled(TextInput)({
  width: '100%',
  borderWidth: 1,
  borderRadius: 8,
  borderColor: Colors.white,
  height: 40,
  color: Colors.white,
  paddingLeft: 8,
  fontSize: 18,
  marginTop: 24,
});

export const FullNameContainer = styled(View)({
  flexDirection: 'row',
});
