import React, { useContext } from "react";
import { exampleContext } from "./App";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setshownav, setshownewnav } = useContext(exampleContext);
  setshownav(false);
  setshownewnav(false);
  if (cart.length === 0) {
    return (
      <div style={{ padding: "60px", textAlign: "center", color: "#6c757d" }}>
        <h3>Your cart is empty.</h3>
        <p>Add some products to see them here!</p>
      </div>
    );
  }

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div
      style={{ padding: "40px", backgroundColor: "#f6f0e9", height: "100vh" }}
    >
      <h2 style={{ marginBottom: "30px", textAlign: "center" }}>Your Cart</h2>
      <div
        style={{
          width: "70%",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              padding: "20px",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <div style={{ flex: 1 }}>
              <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
                {item.title}
              </h5>
              <p style={{ color: "#6c757d" }}>
                Price:{" "}
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  ${item.price}
                </span>
              </p>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
        ))}

        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <h4 style={{ fontWeight: "bold" }}>
            Total Amount:
            <span
              style={{ color: "#d9534f", fontWeight: "bold", fontSize: "24px" }}
            >
              ${totalAmount.toFixed(2)}
            </span>
          </h4>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link to={"/payment"}>
            <Button
              variant="success"
              style={{
                padding: "12px 30px",
                fontSize: "18px",
                borderRadius: "25px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Proceed to Buy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
