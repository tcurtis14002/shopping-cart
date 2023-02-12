import React from "react";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.07; //tax is 7%
  const shippingPrice = itemsPrice > 2000 ? 0 : 20; // if items are over $2,000, shipping is free. If not, is $20
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-1">{item.name}</div>
            <div className="col-1">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              {item.qty}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <div className="col-1 text-right">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">
                ${itemsPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">
                ${taxPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <b>Final Price</b>
              </div>
              <div className="col-1 text-right">
                <b>${totalPrice.toFixed(2)}</b>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Cart;
