import styled from 'styled-components';
import Pdf from 'react-native-pdf';

import {SCREEN_HEIGHT} from '../../constants/Screen';

export const PdfViewer = styled(Pdf)({
  width: '95%',
  height: SCREEN_HEIGHT,
  marginTop: 12,
  backgroundColor: 'transparent',
  alignSelf: 'center',
});
