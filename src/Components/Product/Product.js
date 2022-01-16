import React from 'react';

const Product = (props) => {
      console.log(props)
          const {addToCart, product} = props;
          return (
                    <div style={{border: '1px solid tomato', marginTop: '10px', padding: '10px'}}>
                          <h4>{product.name}</h4>    
                          <button onClick={()=> addToCart(product.id, product.name)}>add to cart</button>
                    </div>
          );
};

export default Product;