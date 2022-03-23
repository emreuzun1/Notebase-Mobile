import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

import {Background} from '../../components/Background/Background';
import {MaterialCard} from '../../components/MaterialCard/MaterialCard';
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
import {getDocuments} from '../../redux/reducers/selector';
import {useSelector} from 'react-redux';

export const Home = () => {
  const {student} = useAppSelector((state: State) => state.auth);
  const {loading} = useAppSelector((state: State) => state.document);
  const dispatch = useAppDispatch();
  const data = useSelector(getDocuments);

  useEffect(() => {
    dispatch(requestDocuments(student?.token!));
  }, [dispatch, student]);

  if (loading) {
    return (
      <Background style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={24} color="white" />
      </Background>
    );
  }

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
              data={data}
              renderItem={({item}) => <MaterialCard item={item} />}
            />
          </ListContainer>
        </HomeContainer>
      </Background>
    </HomeSafeView>
  );
};
