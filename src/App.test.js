import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import ReduxStore  from './github/redux/store';

const ReduxStoreInstance = ReduxStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={ReduxStoreInstance}>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
