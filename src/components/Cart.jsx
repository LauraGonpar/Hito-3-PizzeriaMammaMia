import { useState } from "react";
import { pizzaCart } from "../pizzas";
import "./Cart.css";

const calculateInitialTotal = (items) => {
  return items.reduce((acc, item) => acc + item.price * item.count, 0);
};
export const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);
  const [total, setTotal] = useState(calculateInitialTotal(pizzaCart));

  const calculateTotal = (items) => {
    const newTotal = items.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    setTotal(newTotal);
  };

  const increment = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const decrement = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0);
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const pay = () => {
    alert("¡Gracias por tu compra!");
  };

  return (
    <div className="cart-container">
      <h2>Detalles de pedido:</h2>
      <div className="cart-item-container">
        <div className="col-12">
          {cart.map((p) => (
            <div className="cart-item" key={p.id}>
              <div className="d-flex gap-2 border-none">
                <img className="img" src={p.img} alt={p.name} />
                <h3 className="m-3">{p.name}</h3>
              </div>
              <div className="d-flex gap-2 border-none">
                <h5 className="m-3">${p.price.toLocaleString("es-CL")}</h5>
                <button
                  className="btn btn-dark m-2"
                  onClick={() => decrement(p.id)}
                >
                  -
                </button>
                <span className="m-3">{p.count}</span>
                <button
                  className="btn btn-dark m-2"
                  onClick={() => increment(p.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-summary m-3 ">
        <h4>Total: ${total.toLocaleString("es-CL")}</h4>
        <button className="btn btn-dark" onClick={pay}>
          Pagar
        </button>
      </div>
    </div>
  );
};
