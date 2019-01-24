import React, { Component } from 'react'

class Item extends Component {
  render() {
    const {img, productName, productPrice, productCurrency} = this.props
    return (
      <div>
        <img src={img} />
        <p>{productName}</p>
        <p>{productCurrency} {productPrice}</p>
        <button>Add to cart</button>
      </div>
    )
  }
}

export default Item
