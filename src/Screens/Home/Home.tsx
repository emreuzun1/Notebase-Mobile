import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

import {Background} from '../../components/Background/Background';
import {MaterialCard} from '../../components/MaterialCard/MaterialCard';
import {DummyMaterials} from '../../lib/Data';
import {
  HiText,
  HomeContainer,
  HomeSafeView,
  ListContainer,
  ListTitle,
  ListTitleContainer,
  WelcomeText,
} from './Home.styles';
import {State} from '../../Interfaces/State';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {requestDocuments} from '../../redux/actions';

export const Home = () => {
  const {student} = useAppSelector((state: State) => state.auth);
  const {documents} = useAppSelector((state: State) => state.documents);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestDocuments(student?.token!));
  }, [dispatch, student]);

  return (
    <HomeSafeView>
      <Background>
        <HomeContainer>
          <HiText>Hi, {student?.user.username}</HiText>
          <WelcomeText>Welcome Back ✋</WelcomeText>
          <ListContainer>
            <ListTitleContainer>
              <ListTitle>Materials for you</ListTitle>
            </ListTitleContainer>
            <FlatList
              horizontal
              style={{marginTop: 8}}
              data={documents}
              renderItem={({item}) => <MaterialCard item={item} />}
            />
          </ListContainer>
        </HomeContainer>
      </Background>
    </HomeSafeView>
  );
};
