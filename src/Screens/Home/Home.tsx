import React from 'react';
import {FlatList, View} from 'react-native';

import {CourseCard} from '../../components/CourseCard/CourseCard';
import {MaterialCard} from '../../components/MaterialCard/MaterialCard';
import {DummyCourses, DummyMaterials} from '../../lib/Data';
import {
  DateText,
  HomeContainer,
  ListContainer,
  ListSubtitleText,
  ListTitle,
  ListTitleContainer,
  ViewText,
  WelcomeText,
} from './Home.styles';

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

  const getItem = (data: any, index: number) => ({
    name: data[index].name,
    courseID: data[index].courseID,
    type: data[index].type,
  });
  return (
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
            <ListTitle>Courses and Documents</ListTitle>
            <ListSubtitleText>Popular in your area</ListSubtitleText>
          </View>
          <ViewText>View all</ViewText>
        </ListTitleContainer>
        {/* <VirtualizedList
          data={DummyCourses}
          getItemCount={(data: any) => data.length}
          getItem={getItem}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}) => <CourseCard item={item} />}
        /> */}
        <FlatList
          style={{marginTop: 8}}
          numColumns={3}
          data={DummyCourses}
          renderItem={({item}) => <CourseCard item={item} />}
        />
      </ListContainer>
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
  );
};
