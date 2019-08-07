import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Order from '../../../component/Order'

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<App />, div);
});

it('Render order component', () => {
  const div = document.createElement('div')
  shallow(<Order />, div)
})
