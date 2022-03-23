import {View} from 'react-native';
import styled from 'styled-components';
import {SCREEN_WIDTH} from '../../constants/Screen';

export const HeaderBar = styled(View)({
  width: SCREEN_WIDTH,
  height: 100,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 12,
  paddingRight: 12,
  justifyContent: 'space-between',
});
