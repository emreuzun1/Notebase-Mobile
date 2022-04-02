/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, FC} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Background} from '../../components/Background/Background';
import {MaterialCard} from '../../components/MaterialCard/MaterialCard';
import {
  HiText,
  HomeContainer,
  ListContainer,
  ListTitle,
  ListTitleContainer,
  WelcomeText,
} from './Home.styles';
import {State} from '../../Interfaces/State';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {requestDocuments} from '../../redux/actions';
import {getDocuments} from '../../redux/reducers/selector';
import {useSelector} from 'react-redux';
import {Header} from '../../components/Header/Header';
import {RootStackParamList} from '../../Navigation/Navigator';
import {Document} from '../../Interfaces/Document';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface IHome {
  navigation: NavigationProp;
}

/**
 *
 * @param navigation To navigate through screens.
 * @returns The JSX of Home Screen.
 */
export const Home: FC<IHome> = ({navigation}) => {
  const {student} = useAppSelector((state: State) => state.auth);
  const {loading} = useAppSelector((state: State) => state.document);
  const dispatch = useAppDispatch();
  const data = useSelector(getDocuments);

  // Before render of the screen, gets the document from database.
  useEffect(() => {
    dispatch(requestDocuments(student?.token!));
  }, [dispatch, student]);

  // If loading is true, indicator will show up in the screen.
  if (loading) {
    return (
      <Background style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={24} color="white" />
      </Background>
    );
  }

  return (
    <Background>
      <Header navigation={navigation} searchShown={true} />
      <HomeContainer>
        <HiText>Hi, {student?.user.username}</HiText>
        <WelcomeText>Welcome Back ✋</WelcomeText>
        <ListContainer>
          <ListTitleContainer>
            <ListTitle>Materials for you</ListTitle>
          </ListTitleContainer>
          <FlatList
            style={{marginTop: 8}}
            data={data}
            keyExtractor={(item: Document) => item.id!}
            renderItem={({item}) => <MaterialCard item={item} />}
          />
        </ListContainer>
      </HomeContainer>
    </Background>
  );
};
