import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from './HomePage';

configure({ adapter: new Adapter() });

describe('test hompage', () => {
  const wrapper = shallow(<HomePage />)
  it('default state at homepage must be have', () => {
    expect(wrapper.state().data).toBe(null);
    expect(wrapper.state().shoppingCartData.length).toBe(0);
  })
  it('handleAddShoppingCartData should be working properly', () => {
    wrapper.instance().handleAddShoppingCartData({
      name: 'clothes',
      price: '25',
      quantity: 0,
      total: 0,
    });
    expect(wrapper.state().shoppingCartData.length).toBe(1);
    expect(wrapper.state().shoppingCartData[0].name).toBe('clothes');
    expect(wrapper.state().shoppingCartData[0].price).toBe('25');
    expect(wrapper.state().shoppingCartData[0].quantity).toBe(0);
    expect(wrapper.state().shoppingCartData[0].total).toBe(0);
  })
  it('handleChangeQuantity should be working properly', () => {
    wrapper.instance().handleChangeQuantity({
      name: 'clothes',
      price: '25',
      quantity: 1,
      total: 25,
    })
    expect(wrapper.state().shoppingCartData.length).toBe(1);
    expect(wrapper.state().shoppingCartData[0].name).toBe('clothes');
    expect(wrapper.state().shoppingCartData[0].price).toBe('25');
    expect(wrapper.state().shoppingCartData[0].quantity).toBe(1);
    expect(wrapper.state().shoppingCartData[0].total).toBe(25);
  })
  it('handleDeleteProduct should be working properly', () => {
    wrapper.instance().handleDeleteProduct({
      name: 'clothes',
      price: '25',
      quantity: 1,
      total: 25,
    })
    expect(wrapper.state().shoppingCartData.length).toBe(0);
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
