import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShoppingCart from './ShoppingCart';

configure({ adapter: new Adapter() });

describe('test hompage', () => {
  const wrapper = shallow(<ShoppingCart
    ShoppingCart={[]}
  />)
  it('handleChangeQuantity should working properly');
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
