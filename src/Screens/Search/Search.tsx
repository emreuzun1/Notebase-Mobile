/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Background} from '../../components/Background/Background';
import {Header} from '../../components/Header/Header';
import {RootStackParamList} from '../../Navigation/Navigator';
import {Input, InputBar, InputContainer} from './Search.styles';
import {Colors} from '../../constants/Colors';
import {FlatList} from 'react-native';
import {useAppSelector} from '../../redux/hooks';
import {State} from '../../Interfaces/State';
import {Document} from '../../Interfaces/Document';
import {MaterialCard} from '../../components/MaterialCard/MaterialCard';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Search'>;

interface ISearch {
  navigation: NavigationProps;
}

export const Search: FC<ISearch> = ({navigation}) => {
  const {documents} = useAppSelector((state: State) => state.document);
  const [data, setData] = useState<Document[]>(documents);
  const [searchInput, setSearchInput] = useState<string>('');

  const searchDocuments = () => {
    const filteredData = documents.filter((document: Document) => {
      if (document.title.includes(searchInput)) {
        return true;
      }
      if (document.description.includes(searchInput)) {
        return true;
      }
    });
    setData(filteredData);
  };

  return (
    <Background style={{alignItems: 'center'}}>
      <Header searchShown={false} navigation={navigation} />
      <InputContainer>
        <InputBar>
          <Ionicons name="search" size={18} color="white" />
          <Input
            placeholder="Search for Courses, Materials, Departments, etc..."
            placeholderTextColor={Colors.white}
            value={searchInput}
            onChangeText={text => {
              setSearchInput(text);
              searchDocuments();
            }}
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
      <FlatList
        style={{marginTop: 8}}
        data={data}
        keyExtractor={(item: Document) => item.id!}
        renderItem={({item}) => <MaterialCard item={item} />}
      />
    </Background>
  );
};
