import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartActions";

const initialState = {
          cart:[],
          products:[
                    {name: 'Lenovo', id: 1},
                    {name: 'HP', id: 2},
                    {name: 'Asus', id: 3},
                    {name: 'Acer', id: 4},
                    {name: 'Dell', id: 5}
          ]
}

const CartReducers =(state = initialState, action)=>{
          switch(action.type){
                    case ADD_TO_CART:
                              const newItem = {
                                        productId: action.id,
                                        name: action.name,
                                        cartId: state.cart.length + 1
                              }
                              const newCart = [...state.cart, newItem];
                              return {...state, cart: newCart};
                    case REMOVE_FROM_CART:
                              const id = action.id;
                              const remainingCart = state.cart.filter(item => item.cartId !== id);
                              return {...state, cart: remainingCart}          
                    default:
                              return state;
          }
}
export default CartReducers;