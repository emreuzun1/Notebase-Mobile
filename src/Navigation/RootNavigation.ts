import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './Navigator';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}
