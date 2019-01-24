import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Item from './Item';

configure({ adapter: new Adapter() });

describe('test hompage', () => {
  const wrapper = shallow(<Item
    data={
      {
        data: {
          image: '',
          name: 'clothes',
          price: '25',
          currency: 'SGD',
          quantity: 0,
          total: 0,
        }
      }
    }
  />)
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})