import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from './HomePage';

configure({ adapter: new Adapter() });

describe('test hompage', () => {
  const wrapper = shallow(<HomePage />)
  it('default state at homepage must be have', () => {
    expect(wrapper.state().data).toBe(null);
  })
  it('after component did mount state should contain data', () => {
    
  })
})
