import React, { useContext } from 'react'
import './cart.css'
import { Storecontext } from '../../context/Storecontext';

const Cart = () => {
  const{cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(Storecontext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((items,index)=>{
          if(cartItems[items._id]>0)
          {
            return(
              <div>
              <div className='cart-items-title cart-items-item'>
                <img src={items.image} alt="" />
                <p>{items.name}</p>
                <p>Rs.{items.price}</p>
                <p>{cartItems[items._id]}</p>
                <p>Rs.{items.price*cartItems[items._id]}</p>
                <p  onClick={()=>removeFromCart(items._id)}className='cross'>x</p>
              </div>
              <hr />
              </div>
            )
          }

        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}</b>
            </div>
          </div>
                      <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, Enter  it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart