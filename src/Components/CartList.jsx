import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/action/cartActions";
const CartList = () => {
  const { cartItems } = useSelector((state) => state.cartItems);
  console.log(cartItems);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    totalPrice();
  }, [cartItems]);

  const totalPrice = () => {
    let PRICE = 0;
    cartItems.map((item) => {
      PRICE += item.price;
    });
    setPrice(PRICE);
  };

  const dispatch = useDispatch();
  const removeItem = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cartcontainer">
      <div className="leftcont">
        <div className="itemscard">
          <div className="namerow">
            <h2>shopping cart</h2>
            <h2>{cartItems.length} items</h2>
          </div>
          <hr className="hr" />
          <div className="smallcontainer">
            <div className="productDets">
              <h4>product details</h4>
            </div>
            <div className="productPrice">
              <h4>quantity</h4>
              <h4>price</h4>
              <h4>total</h4>
            </div>
          </div>
          <div className="allsavedproducts">
            {cartItems.map((item) => (
              <div className="product1details">
                <div className="proimage">
                  <div className="product1img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="product1name">
                    <h2>{item.title.shortTitle}</h2>
                    <h4>{item.category}</h4>
                    <i
                      onClick={() => removeItem(item._id)}
                      class="ri-delete-bin-line"
                    ></i>
                  </div>
                </div>
                <div className="product1smdets">
                  <div className="productquantity">
                    <button className="decrementbutton">-</button>
                    <button className="centerbutton">1</button>
                    <button className="incrementbutton">+</button>
                  </div>
                  <h4>{item.price}</h4>
                  <h4>{item.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rightcont">
        <div className="ordersummary">
          <h2>order summary</h2>
          <hr className="hr2" />
          <div className="smcard">
            <div className="subtotal">
              <h4>subtotal</h4>
              <h4>₹{price}</h4>
            </div>
            <div className="subtotal">
              <h4>Delivery charges</h4>
              <h4> {cartItems.length ? "+₹40" : "₹0"} </h4>
            </div>
            <div className="subtotal">
              <h4>Estimated Tax</h4>
              <h4>{cartItems.length ? "+₹10" : "₹0"}</h4>
            </div>

            <div className="promo">
              <h3>Promo Code</h3>
              <input type="text" placeholder="Enter Your Promo Here" />
              <button>Apply</button>
            </div>

            <hr className="hr2" />

            <div className="totalcost">
              <h2>Total Cost</h2>
              <h2>{cartItems.length ? `+₹${price + 50}` : "₹0"}</h2>
            </div>
            <button id="rzp-button1" className="checkout">
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
