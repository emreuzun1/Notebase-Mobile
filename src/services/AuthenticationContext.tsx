import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

import * as RootNavigation from '../Navigation/RootNavigation';
import {State} from '../Interfaces/State';
import {LoginInterface, Student} from '../Interfaces/Student';
import {logoutApi} from '../lib/api';
import {requestLogin} from '../redux/actions';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {persistor} from '../redux/store';

interface IContext {
  student: Student;
  loading: boolean;
  onLogin: (values: LoginInterface) => void;
  onLogout: () => void;
}

export const AuthenticationContext = createContext<IContext>({
  loading: false,
  student: {
    user: {
      id: '',
      username: '',
      email: '',
      password: '',
      last_login: '',
      is_superuser: false,
      first_name: '',
      last_name: '',
      date_joined: '',
      is_staff: false,
      is_active: false,
      university: '',
      faculty: '',
      department: '',
      point: 0,
      date: '',
      groups: [],
      user_permissions: [],
    },
    token: '',
  },
  onLogin: () => {},
  onLogout: async () => {},
});

export const AuthenticationContextProvider = ({children}: any) => {
  const dispatch = useAppDispatch();
  const {student, loading} = useAppSelector((state: State) => state.auth);
  const [authentication, setAuthentication] = useState<Student>({
    user: {
      id: '',
      username: '',
      email: '',
      password: '',
      last_login: '',
      is_superuser: false,
      first_name: '',
      last_name: '',
      date_joined: '',
      is_staff: false,
      is_active: false,
      university: '',
      faculty: '',
      department: '',
      point: 0,
      date: '',
      groups: [],
      user_permissions: [],
    },
    token: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLogin = (values: LoginInterface) => {
    dispatch(requestLogin(values));
  };

  const onLogout = async () => {
    Alert.alert(
      'Sign Out',
      'You are about to sign out. Are you sure?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          style: 'default',
          text: "I'm sure",
          onPress: async () => {
            await persistor.purge().then(async () => {
              await logoutApi(student.token);
              RootNavigation.navigate('Login', {});
            });
          },
        },
      ],
      {cancelable: true},
    );
  };

  useEffect(() => {
    if (student) {
      setAuthentication(student);
      setIsLoading(loading);
    }
  }, [loading, student]);

  return (
    <AuthenticationContext.Provider
      value={{
        student: authentication,
        loading: isLoading,
        onLogin: onLogin,
        onLogout: onLogout,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
