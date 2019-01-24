import React, { Component } from 'react'
import { getFetch } from '../Tools/api';
import '../Scss/HomePage.scss';
import ListProduct from './Product/ListProduct';
import ShoppingCart from './ShoppingCart/ShoppingCart';

type State = {
  data: Array<Object>,
  shoppingCartData: Array<Object>,
}

export class HomePage extends Component<State> {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      shoppingCartData: [],
    }
    this.handleAddShoppingCartData = this.handleAddShoppingCartData.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
  }

  componentDidMount() {
    getFetch('http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json')
      .then(resp => {
        this.setState({
          data: resp.data,
        })
      })
  }

  handleAddShoppingCartData(productCartObject) {
    const { shoppingCartData } = this.state;
    const productAlreadyHaveInCart = shoppingCartData.filter(data => data.name === productCartObject.name);
    if(productAlreadyHaveInCart.length === 0){
      shoppingCartData.push(productCartObject);
      this.setState({
        shoppingCartData,
      })
    } else {
      alert('product already have in the cart');
    }
  }

  handleChangeQuantity(productCartObject){
    const {shoppingCartData} = this.state;
    const selectProduct = shoppingCartData.filter(data => data.name !== productCartObject.name);
    selectProduct.push(productCartObject);
    this.setState({
      shoppingCartData: selectProduct,
    })
  }

  handleDeleteProduct(deletedProduct){
    const {shoppingCartData} = this.state;
    const productAfterDeleted = shoppingCartData.filter(data => data.name !== deletedProduct.name);
    this.setState({
      shoppingCartData: productAfterDeleted,
    })
  }

  render() {
    const {data, shoppingCartData} = this.state;
    return (
      <div className='scss-homepage-container'>
        <div className='scss-product-container'>
          {data && <ListProduct
            handleAddShoppingCartData={this.handleAddShoppingCartData}
            data={data}
          />}
        </div>
        <h3 className='scss-shopping-cart-title'> SHOPPING CART - {shoppingCartData.length} items</h3>
        {data && <div style={{margin: '0 100px'}}>
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
                handleChangeQuantity={this.handleChangeQuantity}
                handleDeleteProduct={this.handleDeleteProduct}
              />
            </tbody>
          </table>
        </div>}
      </div>
    )
  }
}

export default HomePage
