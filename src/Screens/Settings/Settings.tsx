/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Background} from '../../components/Background/Background';
import {Header} from '../../components/Header/Header';
import {State} from '../../Interfaces/State';
import {useAppSelector} from '../../redux/hooks';
import {
  FullNameContainer,
  HeaderTitle,
  Input,
  SettingsContainer,
} from './Settings.styles';
import {RootStackParamList} from '../../Navigation/Navigator';
import {Colors} from '../../constants/Colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Settings'>;

interface ISettings {
  navigation: NavigationProp;
}

export const Settings: FC<ISettings> = ({navigation}) => {
  const {student} = useAppSelector((state: State) => state.auth);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <Background>
      <Header searchShown={false} navigation={navigation} />
      <HeaderTitle>Settings</HeaderTitle>
      <SettingsContainer>
        <Input
          value={student.user.username}
          style={{borderColor: 'gray', color: 'gray'}}
        />
        <FullNameContainer>
          <Input style={{width: '50%'}} value={student.user.first_name} />
          <Input
            style={{marginLeft: 4, width: '50%'}}
            value={student.user.last_name}
          />
        </FullNameContainer>
        <Input value={student.user.university} />
        <Input value={student.user.faculty} />
        <Input
          value={password}
          secureTextEntry
          placeholder="New Password"
          placeholderTextColor={Colors.white}
        />
        <Input
          value={confirmPassword}
          secureTextEntry
          placeholderTextColor={Colors.white}
          placeholder="Confirm New Password"
        />
      </SettingsContainer>
    </Background>
  );
};
