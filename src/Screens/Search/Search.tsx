import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Background} from '../../components/Background/Background';
import {Header} from '../../components/Header/Header';
import {RootStackParamList} from '../../Navigation/Navigator';
import {
  Input,
  InputBar,
  InputContainer,
  ResultText,
  SearchContainer,
} from './Search.styles';
import {Colors} from '../../constants/Colors';
import {Image} from 'react-native';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Search'>;

interface ISearch {
  navigation: NavigationProps;
}

export const Search: FC<ISearch> = ({navigation}) => {
  return (
    <Background style={{alignItems: 'center'}}>
      <Header searchShown={false} navigation={navigation} />
      <InputContainer>
        <InputBar>
          <Ionicons name="search" size={18} color="white" />
          <Input
            placeholder="Search for Courses, Materials, Departments, etc..."
            placeholderTextColor={Colors.white}
          />
        </InputBar>
        <Ionicons
          name="filter"
          size={24}
          color="white"
          style={{marginLeft: 14}}
          onPress={() => {}}
        />
      </InputContainer>
      <SearchContainer>
        <Image
          source={require('../../assets/search.png')}
          style={{width: 256, height: 180, marginTop: 48}}
        />
        <ResultText>Results will be shown in here</ResultText>
      </SearchContainer>
    </Background>
  );
};
