import ReactDOM from 'react-dom';
import { renderApp } from './index';

jest.mock('react-dom');

describe('index', () => {
  beforeEach(() => {
    global.document.getElementById = () => true;
    ReactDOM.render = jest.fn();
  });

  it('should call ReactDOM.render', () => {
    renderApp();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
