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
    const courseInput = getByTestId('courseInput');
    const facultyInput = getByTestId('dropdown');
    const descriptionInput = getByPlaceholderText('Description');
    const pickButton = getByTestId('pickButton');
    return {
      titleInput,
      universityInput,
      courseInput,
      facultyInput,
      descriptionInput,
      pickButton,
    };
  };

  test('should be rendered all items in the screen', () => {
    const {
      titleInput,
      universityInput,
      facultyInput,
      courseInput,
      descriptionInput,
      pickButton,
    } = renderScreen();

    expect(titleInput).toBeTruthy();
    expect(universityInput).toBeTruthy();
    expect(facultyInput).toBeTruthy();
    expect(courseInput).toBeTruthy();
    expect(descriptionInput).toBeTruthy();
    expect(pickButton).toBeTruthy();
  });
});
