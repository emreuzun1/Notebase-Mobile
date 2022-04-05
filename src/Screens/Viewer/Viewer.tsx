import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/native';

import {Background} from '../../components/Background/Background';
import {PdfViewer} from './Viewer.styles';
import {RootStackParamList} from '../../Navigation/Navigator';

type NavigationRouteProp = RouteProp<RootStackParamList, 'Viewer'>;

interface IViewer {
  route: NavigationRouteProp;
}

export const Viewer: FC<IViewer> = ({route}) => {
  const document = route.params;
  return (
    <Background>
      <PdfViewer source={{uri: `${document.file}`}} />
    </Background>
  );
};
