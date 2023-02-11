import { useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import data from "../../data";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
    }
  };

  return (
    <div>
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main
          cartItems={cartItems}
          products={products}
          onAdd={onAdd}
          onRemove={onRemove}
        />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
