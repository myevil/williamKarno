import React, { Component } from 'react'

class Item extends Component {
  handleAddCart(dataProduct) {
    dataProduct.total = 0;
    dataProduct.quantity = 0;
    this.props.handleAddShoppingCartData(dataProduct);
  }

  render() {
    const {data} = this.props;
    const {image, name, price, currency} = data;
    return (
      <div className={"scss-list-item"}>
        <div className={"border"}>
          <img src={image} alt='list-product'/>
        </div>
        <div className={'display'}>
          <div className={'grow'}>
            <p className={'product-title'}>{name}</p>
            <span>{currency} {price}</span>
          </div>
          <button
            className="product-button"
            onClick={() => this.handleAddCart(data)}
          >
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

export default Item
