import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import { store } from '../store';
import Calendar from '../Components/Calendar';
import ActionModal from '../Components/ActionModal';

describe('Calendar', () => {
  it('Should render calendar', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
    const calendar = getByTestId('calendar');
    expect(calendar).toBeTruthy();
  });
});

describe('Actions', () => {
  it('Should render buttons and modal for slots', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ActionModal />
      </Provider>
    );
    const actions = getByTestId('button');
    expect(actions).toBeTruthy();
  });
});
