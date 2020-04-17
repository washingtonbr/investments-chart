import React from 'react';
import 'normalize.css';
import Routes from '../routes';
import { Wrapper } from './app-styles';

export default function AppView() {
  return (
    <Wrapper>
      <Routes />
    </Wrapper>
  );
}
