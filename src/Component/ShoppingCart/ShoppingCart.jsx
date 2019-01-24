import React, { Component } from 'react'

class ShoppingCart extends Component {

  handleChangeQuantity(e, changeProductCart) {
    if(e.target.value >= 0){
      changeProductCart.quantity = e.target.value;
      changeProductCart.total = changeProductCart.quantity * changeProductCart.price;
      this.props.handleChangeQuantity(changeProductCart);
    }
  }

  handleDeleteProductOnCart(deletedProduct){
    this.props.handleDeleteProduct(deletedProduct);
  }

  render() {
    const {ShoppingCart} = this.props
    return (
      <React.Fragment>
        {ShoppingCart.length !== 0 ? ShoppingCart.map(CartData => {
          return (
            <tr key={CartData.name}>
              <td>
                <button onClick={() => this.handleDeleteProductOnCart(CartData)}>close</button>
              </td>
              <td>
                <img src={CartData.image} width='50px' height='50' alt='product'/>
                <span>{CartData.name}</span>
              </td>
              <td>{CartData.price}</td>
              <td>
                <input
                  type='number'
                  value={CartData.quantity}
                  onChange={e => this.handleChangeQuantity(e, CartData)}
                />
              </td>
              <td>{CartData.total}</td>
            </tr>
          )
        }) : <td>no data</td>}
      </React.Fragment>
    )
  }
}

export default ShoppingCart
