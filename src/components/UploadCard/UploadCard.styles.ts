import {Text, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const Container = styled(View)({
  flexDirection: 'row',
  width: SCREEN_WIDTH / 1.2,
  height: 50,
  backgroundColor: 'rgba(230, 155, 105, 0.5)',
  borderWidth: 1,
  borderColor: Colors.orange,
  alignItems: 'center',
  marginTop: 12,
  borderRadius: 3,
  paddingLeft: 8,
});

export const MaterialText = styled(Text)({
  fontSize: 18,
  fontWeight: '300',
  marginLeft: 8,
});
