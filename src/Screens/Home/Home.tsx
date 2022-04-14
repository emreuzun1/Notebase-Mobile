/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Background} from '../../components/Background/Background';
import {MaterialCard} from '../../components/MaterialCard/MaterialCard';
import {
  HiText,
  HomeContainer,
  ListContainer,
  ListTitle,
  ListTitleContainer,
  PointText,
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
import {Colors} from '../../constants/Colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface IHome {
  navigation: NavigationProp | any;
}

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

/**
 *
 * @param navigation To navigate through screens.
 * @returns The JSX of Home Screen.
 */
const Home = (props: IHome) => {
  const {student} = useAppSelector((state: State) => state.auth);
  const {loading} = useAppSelector((state: State) => state.document);
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useAppDispatch();
  const data = useSelector(getDocuments);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

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
      <Header navigation={props.navigation} searchShown={true} />
      <HomeContainer>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <HiText>Hi, {student?.user.username}</HiText>
          <View style={{flexDirection: 'row'}}>
            <PointText>{student.user.point}</PointText>
            <MaterialIcon
              name="star-four-points"
              size={24}
              color={Colors.purple}
              style={{marginLeft: 4}}
            />
          </View>
        </View>
        <WelcomeText>Welcome Back ✋</WelcomeText>
        <ListContainer>
          <ListTitleContainer>
            <ListTitle>Materials for you</ListTitle>
          </ListTitleContainer>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
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

export default Home;
