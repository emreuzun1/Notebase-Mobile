import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {StackScreenProps} from '@react-navigation/stack';

import {DownloadCard} from '../../components/DownloadCard/DownloadCard';
import {UploadCard} from '../../components/UploadCard/UploadCard';
import {Colors} from '../../constants/Colors';
import {DummyDownloads} from '../../lib/Data';
import {
  CounterContainer,
  CounterText,
  ProfileCircle,
  ProfileContainer,
  ProfileDetailContainer,
  ProfileDetailText,
  ProfileHeaderContainer,
  ProfileImage,
  ProfileName,
  Seperator,
  Tab,
  TabContainer,
  TabText,
  UploadButton,
} from './Profile.styles';
import {RootStackParamList, TabParamList} from '../../Navigation/Navigator';

type ProfileProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Profile'>,
  StackScreenProps<RootStackParamList>
>;

export const Profile = () => {
  const navigation = useNavigation<ProfileProps>();
  const [isUpload, setIsUpload] = useState<boolean>(true);

  return (
    <ProfileContainer>
      <ProfileHeaderContainer>
        <ProfileCircle>
          <ProfileImage source={require('../../assets/user_icon.png')} />
        </ProfileCircle>
        <ProfileDetailContainer>
          <ProfileName>John Doe</ProfileName>
          <ProfileDetailText>Yasar University</ProfileDetailText>
          <ProfileDetailText>Faculty of Software Engineering</ProfileDetailText>
        </ProfileDetailContainer>
        <CounterContainer>
          <Ionicons name="arrow-up" size={36} color={Colors.orange} />
          <CounterText style={{color: Colors.orange}}>20</CounterText>
        </CounterContainer>
        <Seperator />
        <CounterContainer>
          <Ionicons name="arrow-down" size={36} color={Colors.purple} />
          <CounterText style={{color: Colors.purple}}>14</CounterText>
        </CounterContainer>
      </ProfileHeaderContainer>
      <TabContainer>
        <Tab onPress={() => setIsUpload(true)}>
          <TabText style={{color: Colors.orange}}>Upload</TabText>
        </Tab>
        <Tab onPress={() => setIsUpload(false)}>
          <TabText style={{color: Colors.purple}}>Download</TabText>
        </Tab>
      </TabContainer>
      {isUpload ? (
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          data={DummyDownloads}
          keyExtractor={item => item}
          renderItem={({item}) => <UploadCard item={item} />}
        />
      ) : (
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          data={DummyDownloads}
          keyExtractor={item => item}
          renderItem={({item}) => <DownloadCard item={item} />}
        />
      )}
      <UploadButton onPress={() => navigation.navigate('Upload')}>
        <MaterialIcons name="file-upload" size={36} color="white" />
      </UploadButton>
    </ProfileContainer>
  );
};
