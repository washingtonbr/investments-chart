import React from 'react';
import 'normalize.css';
import Routes from '../routes';
import { Wrapper } from './app-view.styles';

export default function AppView() {
  return (
    <Wrapper>
      <Routes />
    </Wrapper>
  );
}
