import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Order from '../component/Order'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Render order component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Order />, div)
})
