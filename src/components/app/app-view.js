import 'normalize.css';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Wrapper } from './app-view.styles';
import Routes from '../routes';
import { store, persistor } from '../../redux/store';

export default function AppView() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Wrapper>
          <Routes />
        </Wrapper>
      </PersistGate>
    </Provider>
  );
}
