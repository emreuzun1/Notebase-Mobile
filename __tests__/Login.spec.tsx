import React from 'react';
import Login from '../src/Screens/Login/Login';
import {fireEvent, render} from '../__mocks__/testUtils';
import {loginApi} from '../src/lib/api';
import axios from 'axios';
import fetchLogin from '../__mocks__/axiosMock';

describe('Login Screen Tests', () => {
  const mockedParams = {
    navigation: '',
  };

  const renderScreen = () => {
    const {getByTestId, getByText, getByPlaceholderText} = render(
      <Login {...mockedParams} />,
    );

    const welcomeText = getByTestId('welcomeText');
    const infoText = getByText('Please login to your account');
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByTestId('loginButton');
    const registerButton = getByTestId('registerButton');
    return {
      welcomeText,
      infoText,
      usernameInput,
      passwordInput,
      loginButton,
      registerButton,
    };
  };

  test('should rendered all items in the screen', () => {
    const {
      welcomeText,
      infoText,
      usernameInput,
      passwordInput,
      loginButton,
      registerButton,
    } = renderScreen();
    expect(welcomeText).toBeTruthy();
    expect(infoText).toBeTruthy();
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
    expect(registerButton).toBeTruthy();
  });

  test('should change the inputs and click login button', () => {
    const {usernameInput, passwordInput, loginButton} = renderScreen();
    fireEvent.changeText(usernameInput, 'testing');
    fireEvent.changeText(passwordInput, 'passwordtest');
    expect(usernameInput.props.value).toEqual('testing');
    expect(passwordInput.props.value).toEqual('passwordtest');
    fireEvent.press(loginButton);
  });

  test('should login successfully', async () => {
    const username = 'webtest',
      password = '123456';

    const response = await fetchLogin(username, password);
    expect(response.status).toBe(200);
  });

  /* test('try to login with incorrect credentials', async () => {
    const username = '',
      password = '';
    expect(await fetchLogin(username, password)).toThrowError(
      'Request failed with status code 400',
    );
  }); */
});
