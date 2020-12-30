import React, { Component } from "react";

import Quantity from "../quantity";

class CartProduct extends Component {
  render() {
    const { className, title, quantity } = this.props;
    return (
      <div className={`${className} cart-product`}>
        <img
          className="cart-product__image"
          src="http://via.placeholder.com/130x130"
        ></img>
        <div className="cart-product__title">{title}</div>
        <Quantity className="cart-product__quantity" quantity={quantity} />
        <a className="cart-product__remove">Remove</a>
        <GreenPriceTag className="cart-product__price" price={price} />
      </div>
    );
  }
}

export default CartProduct;
