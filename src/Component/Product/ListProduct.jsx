import React from 'react'
import Item from './Item';

const ListProduct = React.memo(props => {
  const { data, handleAddShoppingCartData } = props;
  return (
    <React.Fragment>
      <div className={'scss-grid-md-3'}>
        {data && <Item
          data={data[1]}
          handleAddShoppingCartData={handleAddShoppingCartData}
        />}
        {data && <Item
          data={data[2]}
          handleAddShoppingCartData={handleAddShoppingCartData}
        />}
      </div>
      <div className='scss-grid-md-6'>
        {data && <Item
          data={data[0]}
          handleAddShoppingCartData={handleAddShoppingCartData}
        />}
      </div>
      <div className='scss-grid-md-3'>
        {data && <Item
          data={data[3]}
          handleAddShoppingCartData={handleAddShoppingCartData}
        />}
        {data && <Item
          data={data[4]}
          handleAddShoppingCartData={handleAddShoppingCartData}
        />}
      </div>
    </React.Fragment>
  )
})

export default ListProduct
