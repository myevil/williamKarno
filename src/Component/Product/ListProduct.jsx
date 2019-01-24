import React, { Component } from 'react'
import Item from './Item';

class ListProduct extends Component {

  render() {
    const { data } = this.props
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

export default ListProduct
