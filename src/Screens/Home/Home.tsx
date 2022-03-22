import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';

import {Background} from '../../components/Background/Background';
import {MaterialCard} from '../../components/MaterialCard/MaterialCard';
import {DummyMaterials} from '../../lib/Data';
import {useAppSelector} from '../../redux/hooks';
import {
  DateText,
  HomeContainer,
  HomeSafeView,
  ListContainer,
  ListSubtitleText,
  ListTitle,
  ListTitleContainer,
  WelcomeText,
} from './Home.styles';
import {State} from '../../Interfaces/State';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const Home = () => {
  const getDate = new Date();
  const hour = getDate.getHours();
  const student = useSelector((state: State) => state.auth);
  console.log(student);

  return (
    <HomeSafeView>
      <Background>
        <HomeContainer>
          <DateText>
            {days[getDate.getDay()]} {months[getDate.getMonth()]}{' '}
            {getDate.getDate()}
          </DateText>
          <WelcomeText>
            {hour < 12 && hour > 5
              ? 'Good Morning'
              : hour < 20 && hour >= 12
              ? 'Good Afternoon'
              : 'Good Night'}
          </WelcomeText>
          <ListContainer>
            <ListTitleContainer>
              <View>
                <ListTitle>Popular Materials</ListTitle>
                <ListSubtitleText>From your area</ListSubtitleText>
              </View>
            </ListTitleContainer>
            <FlatList
              horizontal
              style={{marginTop: 8}}
              data={DummyMaterials}
              renderItem={({item}) => <MaterialCard item={item} />}
            />
          </ListContainer>
        </HomeContainer>
      </Background>
    </HomeSafeView>
  );
};
