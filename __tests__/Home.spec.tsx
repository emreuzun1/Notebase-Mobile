import React from 'react';
import {render} from '../__mocks__/testUtils';
import Home from '../src/Screens/Home/Home';
import {fetchLogin, getData} from '../__mocks__/axiosMock';
import {Student} from '../src/Interfaces/Student';

describe('Home Screen Tests', () => {
  const mockedParams = {
    navigation: '',
  };
  let data;

  const renderScreen = () => {
    const {getByLabelText} = render(<Home {...mockedParams} />);
    const welcomeText = getByLabelText('Welcome Back ✋');
    return {welcomeText};
  };

  test('should get notes from the database', async () => {
    const response = await fetchLogin('webtest', '123456');
    const student: Student = response.data;
    data = await getData(student.token);
    expect(data).not.toBeNull();
  });
});
