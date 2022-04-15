import React, {createContext, useEffect, useState} from 'react';
import {State} from '../Interfaces/State';
import {LoginInterface, Student} from '../Interfaces/Student';
import {logoutApi} from '../lib/api';
import {requestLogin} from '../redux/actions';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {persistor} from '../redux/store';

interface IContext {
  student: Student | undefined;
  loading: boolean | undefined;
  onLogin: (values: LoginInterface) => void;
  onLogout: () => void;
}

export const AuthenticationContext = createContext<IContext>({
  loading: false,
  student: undefined,
  onLogin: () => {},
  onLogout: async () => {},
});

export const AuthenticationContextProvider = ({children}: any) => {
  const dispatch = useAppDispatch();
  const {student, loading} = useAppSelector((state: State) => state.auth);
  const [authentication, setAuthentication] = useState<Student>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLogin = (values: LoginInterface) => {
    dispatch(requestLogin(values));
  };

  const onLogout = async () => {
    await persistor.purge();
    await logoutApi(student.token);
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
