import React, { Component } from 'react'

class ShoppingCart extends Component {
  render() {
    const {ShoppingCart} = this.props
    return (
      <React.Fragment>
        {ShoppingCart.length !== 0 ? ShoppingCart.map(CartData => {
          return (
            <tr>
              <td>
                <button>close</button>
              </td>
              <td>
                <img src={CartData.image} width='50px' height='50' alt='product'/>
                <span>{CartData.name}</span>
              </td>
              <td>{CartData.price}</td>
              <td>{CartData.quantity}</td>
              <td>{CartData.total}</td>
            </tr>
          )
        }) : <td>no data</td>}
      </React.Fragment>
    )
  }
}

export default ShoppingCart
