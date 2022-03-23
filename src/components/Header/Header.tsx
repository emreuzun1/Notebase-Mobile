import {NavigationProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../constants/Colors';
import {RootStackParamList} from '../../Navigation/Navigator';
import {HeaderBar} from './Header.styles';

interface IHeader {
  navigation: NavigationProp<RootStackParamList>;
}

export const Header: FC<IHeader> = ({navigation}) => {
  return (
    <HeaderBar>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={24} color={Colors.white} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="search" size={24} color={Colors.white} />
      </TouchableOpacity>
    </HeaderBar>
  );
};
