import React from 'react';
import Upload from '../src/Screens/Upload/Upload';
import {render} from '../__mocks__/testUtils';

describe('Upload Screen Tests', () => {
  const mockedParams = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  const renderScreen = () => {
    const {getByPlaceholderText, getByTestId} = render(
      <Upload {...mockedParams} />,
    );

    const titleInput = getByTestId('titleInput');
    const universityInput = getByTestId('universityInput');
    const facultyInput = getByTestId('dropdown');
    const departmentInput = getByPlaceholderText(
      'Write the department that note is belong',
    );
    const descriptionInput = getByPlaceholderText('Description');
    const pickButton = getByTestId('pickButton');
    return {
      titleInput,
      universityInput,
      facultyInput,
      departmentInput,
      descriptionInput,
      pickButton,
    };
  };

  test('should be rendered all items in the screen', () => {
    const {
      titleInput,
      universityInput,
      facultyInput,
      departmentInput,
      descriptionInput,
      pickButton,
    } = renderScreen();

    expect(titleInput).toBeTruthy();
    expect(universityInput).toBeTruthy();
    expect(facultyInput).toBeTruthy();
    expect(departmentInput).toBeTruthy();
    expect(descriptionInput).toBeTruthy();
    expect(pickButton).toBeTruthy();
  });
});
