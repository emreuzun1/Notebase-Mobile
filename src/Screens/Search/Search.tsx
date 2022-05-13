/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

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
    console.log(searchInput === '');
    const filteredData = documents.filter((document: Document) => {
      if (
        document.title.includes(searchInput) ||
        document.faculty.includes(searchInput) ||
        document.description.includes(searchInput)
      ) {
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
              searchDocuments();
              setSearchInput(text);
            }}
          />
        </InputBar>
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

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.white,
    padding: 24,
  },
  placeholderStyle: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: 'Raleway',
    marginLeft: 8,
  },
  selectedTextStyle: {
    fontSize: 18,
    color: Colors.black,
    marginLeft: 8,
    fontFamily: 'Raleway',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
