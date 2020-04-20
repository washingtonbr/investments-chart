import 'normalize.css';
import React from 'react';
import { Provider } from 'react-redux';
import { Wrapper } from './app-view.styles';
import Routes from '../routes';
import store from '../../redux/store';

export default function AppView() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Routes />
      </Wrapper>
    </Provider>
  );
}
