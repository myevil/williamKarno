import React, { Component } from 'react'
import { getFetch } from '../Tools/api';
import '../Scss/HomePage.scss';
import ListProduct from './Product/ListProduct';
import ShoppingCart from './ShoppingCart/ShoppingCart';

export class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      shoppingCartData: [],
    }
  }

  componentDidMount() {
    getFetch('http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json')
      .then(resp => {
        this.setState({
          data: resp.data,
        })
      })
  }

  render() {
    const {data, shoppingCartData} = this.state;
    return (
      <div className='scss-homepage-container'>
        <div className='scss-product-container'>
          <ListProduct
            data={data}
          />
        </div>
        <hr />
        {data && <div>
          <table className='scss-shopping-cart'>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>product</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              <ShoppingCart
                ShoppingCart={shoppingCartData}
              />
            </tbody>
          </table>
        </div>}
      </div>
    )
  }
}

export default HomePage
