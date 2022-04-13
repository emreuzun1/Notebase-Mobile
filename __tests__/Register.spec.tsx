import React from 'react';
import {fireEvent, render} from '../__mocks__/testUtils';
import Register from '../src/Screens/Register/Register';

describe('Register Screen Tests', () => {
  const mockedParams = {
    navigation: '',
  };

  const renderScreen = () => {
    const {getByPlaceholderText, getByTestId} = render(
      <Register {...mockedParams} />,
    );
    const firstNameInput = getByPlaceholderText('First Name');
    const lastNameInput = getByPlaceholderText('Last Name');
    const usernameInput = getByPlaceholderText('Username');
    const mailInput = getByPlaceholderText('Mail');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const universityInput = getByPlaceholderText('University');
    const facultyInput = getByTestId('dropdown');
    const departmentInput = getByPlaceholderText('Department');
    const registerButton = getByTestId('registerButton');

    return {
      firstNameInput,
      lastNameInput,
      usernameInput,
      mailInput,
      passwordInput,
      confirmPasswordInput,
      universityInput,
      facultyInput,
      departmentInput,
      registerButton,
    };
  };

  test('should rendered all items in the screen', () => {
    const {
      firstNameInput,
      lastNameInput,
      usernameInput,
      mailInput,
      passwordInput,
      confirmPasswordInput,
      universityInput,
      facultyInput,
      departmentInput,
      registerButton,
    } = renderScreen();
    expect(firstNameInput).toBeTruthy();
    expect(lastNameInput).toBeTruthy();
    expect(mailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(confirmPasswordInput).toBeTruthy();
    expect(usernameInput).toBeTruthy();
    expect(universityInput).toBeTruthy();
    expect(facultyInput).toBeTruthy();
    expect(departmentInput).toBeTruthy();
    expect(registerButton).toBeTruthy();
  });
});
