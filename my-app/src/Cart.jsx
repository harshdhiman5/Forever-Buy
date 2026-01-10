import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increment = (productId) => {
    const newCart = cart.map((item) =>
      item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newCart);
  };

  const decrement = (productId) => {
    const newCart = cart
      .map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(newCart);
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item._id !== productId);
    updateCart(newCart);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Your cart is empty</h2>
        <Link to="/" className="btn btn-primary">Go back to shop</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      <div className="list-group mb-4">
        {cart.map((product) => (
          <div
            key={product._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {/* Left: Image + Title */}
            <div className="d-flex align-items-center" style={{ width: "40%" }}>
              <img
                src={`http://localhost:5000/${product.image}`}
                alt={product.title}
                style={{ height: "80px", width: "80px", objectFit: "cover", marginRight: "15px" }}
              />
              <div>
                <strong>{product.title}</strong>
                <div className="text-muted small">Price: &#8377; {product.price}</div>
                <div className="text-muted small"><strong>Size:</strong> {product.size}</div> {/* Display size */}
              </div>
            </div>

            {/* Center: Quantity Controls */}
            <div className="d-flex align-items-center" style={{ width: "30%", justifyContent: "center" }}>
              <button className="btn btn-sm btn-outline-secondary" onClick={() => decrement(product._id)}>-</button>
              <span className="mx-3">{product.quantity}</span>
              <button className="btn btn-sm btn-outline-secondary" onClick={() => increment(product._id)}>+</button>
            </div>

            {/* Right: Remove */}
            <div style={{ width: "10%", textAlign: "right" }}>
              <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(product._id)}>
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="text-end">
        <h4>Total: &#8377; {totalPrice.toFixed(2)}</h4>
        <Link to="/" className="btn btn-primary mt-2">Continue Shopping</Link>
      </div>
    </div>
  );
}
