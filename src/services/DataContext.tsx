import React, {createContext, useContext, useEffect, useState} from 'react';
import {State} from '../Interfaces/State';
import {requestDocuments} from '../redux/actions';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {AuthenticationContext} from './AuthenticationContext';

interface IContext {
  documents: Document[] | undefined;
  loading: boolean | undefined;
}

export const DataContext = createContext<IContext>({
  loading: false,
  documents: [],
});

export const DataContextProvider = ({children}: any) => {
  const {student} = useContext(AuthenticationContext);
  const dispatch = useAppDispatch();
  const {documents, loading} = useAppSelector((state: State) => state.document);

  useEffect(() => {
    if (student) {
      dispatch(requestDocuments(student?.token!));
    }
  }, [dispatch, student?.token, student]);

  return (
    <DataContext.Provider value={{documents: documents, loading: loading}}>
      {children}
    </DataContext.Provider>
  );
};
