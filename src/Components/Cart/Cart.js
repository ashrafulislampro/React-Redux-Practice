import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/CartActions';

const Cart = (props) => {
          const {cart, removeFromCart} = props;
          console.log(props)
          return (
                    <div>
                    <h3>Cart Content Details</h3>
                             {
                                       cart.map(item => <li key={item.cartId}>
                                       {item.name} 
                                       <button onClick={() => removeFromCart(item.cartId)}>X</button>
                                       </li>)
                             }
                    </div>
          );
};

const mapStateToProps = (state)=>{
          return{
                    cart: state.cart
          }
}
const mapDispatchToProps ={
          removeFromCart : removeFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);