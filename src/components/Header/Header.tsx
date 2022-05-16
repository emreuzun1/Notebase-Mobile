import {NavigationProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../constants/Colors';
import {RootStackParamList} from '../../Navigation/Navigator';
import {HeaderBar} from './Header.styles';

interface IHeader {
  navigation: NavigationProp<RootStackParamList>;
  isEditMode?: boolean;
  searchShown?: boolean;
  title?: string;
  editPress?: () => void;
  onLogout?: () => void;
}

export const Header: FC<IHeader> = ({
  navigation,
  searchShown,
  onLogout,
  isEditMode,
  editPress,
}) => {
  return (
    <HeaderBar>
      <TouchableOpacity
        onPress={() => {
          if (navigation.getState().index === 0) {
            onLogout!();
            return;
          }
          navigation.goBack();
        }}>
        <Entypo name="chevron-thin-left" size={24} color={Colors.white} />
      </TouchableOpacity>
      {searchShown && (
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={24} color={Colors.white} />
        </TouchableOpacity>
      )}
      {isEditMode && (
        <TouchableOpacity onPress={editPress}>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      )}
    </HeaderBar>
  );
};
