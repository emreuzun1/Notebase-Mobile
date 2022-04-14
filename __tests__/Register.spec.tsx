import React from 'react';
import {
  render,
  fireEvent,
  act,
  RenderAPI,
  waitFor,
} from '../__mocks__/testUtils';
import Register from '../src/Screens/Register/Register';
import {
  emailValidator,
  passwordValidator,
  usernameValidator,
} from '../src/utils/Regex';

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

  test('should rendered all items in the screen', async () => {
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
    await waitFor(() => {
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

  test('should change the inputs with valid values', async () => {
    const {
      firstNameInput,
      lastNameInput,
      usernameInput,
      mailInput,
      passwordInput,
      confirmPasswordInput,
    } = renderScreen();
    fireEvent.changeText(firstNameInput, 'Emre');
    fireEvent.changeText(lastNameInput, 'Uzun');
    fireEvent.changeText(usernameInput, 'testing12');
    fireEvent.changeText(passwordInput, 'Aa123456');
    fireEvent.changeText(confirmPasswordInput, 'Aa123456');
    fireEvent.changeText(mailInput, 'test@gmail.com');
    await waitFor(() => {
      expect(usernameValidator(usernameInput.props.value)).toBe(true);
      expect(emailValidator(mailInput.props.value)).toBe(true);
      expect(passwordValidator(passwordInput.props.value)).toBe(true);
      expect(passwordInput.props.value).toEqual(
        confirmPasswordInput.props.value,
      );
    });
  });

  test('should warn the user if enters wrong credentials', async () => {
    const {usernameInput, mailInput, passwordInput} = renderScreen();
    fireEvent.changeText(usernameInput, 'test');
    fireEvent.changeText(mailInput, 'wrong_mail');
    fireEvent.changeText(passwordInput, 'test');

    await waitFor(() => {
      expect(usernameValidator(usernameInput.props.value)).toBe(false);
      expect(emailValidator(mailInput.props.value)).toBe(false);
      expect(passwordValidator(passwordInput.props.value)).toBe(false);
    });
  });
});
