import React from "react";
import "./index.modules.scss";
import { withRouter } from "react-router-dom";
const CartItem = props => {
  const { cartInfo, id, setCartData } = props;
  const { price, name } = cartInfo;

  const onHandleRemove = e => {
    let data = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    if (data.length > 0) {
      let newData = data.filter((item, index) => index !== id);
      setCartData(newData);
      localStorage.setItem("cart", JSON.stringify(newData));
    }
  };
  return (
    <div className="cart-items" key={id}>
      <div className="remove-icon" onClick={e => onHandleRemove(e)}>
        <img src="/images/close-icon.png" alt="logo" />
      </div>
      <div className="logo-box">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="item-title">{name}</div>
      <div className="price-box">Price Rs {price}</div>
    </div>
  );
};
CartItem.defaultProps = {
  cartInfo: {
    name: "",
    price: 0
  },
  setCartData: false,
  id: 0
};
export default withRouter(CartItem);
