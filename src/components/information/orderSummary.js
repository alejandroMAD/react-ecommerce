import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

import { UnderlinedTitle, InfoTitle } from "./infoHelp";

class OrderSummary extends Component {
  render() {
    const { className } = this.props;
    let subtotal = 0;
    let tax = 0.16;
    let amtStickers = 0;
    this.props.cartProducts.map((cartProduct) => {
      subtotal += cartProduct.quantity * cartProduct.product.price;
      amtStickers += cartProduct.quantity;
    });
    return (
      <div className={`${className} order-summary`}>
        <UnderlinedTitle
          className="order-summary__title"
          title="Order Summary"
        />
        <InfoTitle
          className="order-summary__subtotal"
          title={`${amtStickers} stickers`}
          value={`$${parseFloat(subtotal.toFixed(2))}`}
        />
        <InfoTitle
          className="order-summary__tax-shipping"
          title="Taxes & Shipping"
          value={`$${tax}`}
        />
        <InfoTitle
          className="order-summary__total info-title-green"
          title="Total"
          value={`$${parseFloat(subtotal.toFixed(2)) + tax}`}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return { cartProducts };
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;
