import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Background} from '../../components/Background/Background';
import {PdfViewer} from './Viewer.styles';
import {RootStackParamList} from '../../Navigation/Navigator';
import {Header} from '../../components/Header/Header';

type NavigationRouteProp = RouteProp<RootStackParamList, 'Viewer'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Viewer'>;

interface IViewer {
  route: NavigationRouteProp;
  navigation: NavigationProp;
}

export const Viewer: FC<IViewer> = ({route, navigation}) => {
  const document = route.params;
  return (
    <Background>
      <PdfViewer source={{uri: `${document.file}`}} />
    </Background>
  );
};
