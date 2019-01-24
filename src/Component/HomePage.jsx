import React, { Component } from 'react'
import { getFetch } from '../Tools/api';
import '../Scss/HomePage.scss';
import Item from './Product/Item';

export class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
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
    const {data} = this.state;
    console.log(data);
    return (
      <div className='scss-homepage-container'>
        <div className='scss-product-container'>
          <div className='scss-grid-md-3'>
            {data && <Item
              img={data[1].image}
              productName={data[1].name}
              productPrice={data[1].price}
              productCurrency={data[1].currency}
            />}
            {data && <Item
              img={data[2].image}
              productName={data[2].name}
              productPrice={data[2].price}
            />}
          </div>
          <div className='scss-grid-md-6'>
            {data && <Item
              img={data[0].image}
              productName={data[0].name}
              productPrice={data[0].price}
            />}
          </div>
          <div className='scss-grid-md-3'>
            {data && <Item
              img={data[3].image}
              productName={data[3].name}
              productPrice={data[3].price}
            />}
            {data && <Item
              img={data[4].image}
              productName={data[4].name}
              productPrice={data[4].price}
            />}
          </div>
        </div>
        <hr />
        {data && <div className='scss-shopping-cart'>
          <table>
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
              <tr>
                <td>
                  <button>close</button>
                </td>
                <td>
                  <img src={data[0].image} width='50px' height='50' alt='product'/>
                  <span>product name</span>
                </td>
                <td>150000</td>
                <td>2</td>
                <td>300000</td>
              </tr>
            </tbody>
          </table>
        </div>}
      </div>
    )
  }
}

export default HomePage
