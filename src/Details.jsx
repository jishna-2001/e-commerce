import React, { useContext } from "react";
import { exampleContext } from "./App";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Details() {
  const { itemId, products, setCart } = useContext(exampleContext);

  // Find the product that matches the selected itemId
  const selectedProduct = products.find((product) => product.id === itemId);

  if (!selectedProduct) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        Product not found!
      </div>
    );
  }

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "60px",
        backgroundColor: "#f6f0e9",
      }}
    >
      <div
        style={{
          width: "60%",
          margin: "40px auto",
          padding: "30px",
          border: "2px solid #1f2a44",
          borderRadius: "15px",
          backgroundColor: "white",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className="d-flex flex-column flex-md-row"
          style={{ textAlign: "left", color: "#1f2a44" }}
        >
          <div style={{ flex: "1", marginRight: "20px", marginBottom: "20px" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
              {selectedProduct.title}
            </h1>
            <h3 style={{ color: "#d9534f" }}>
              Price: ${selectedProduct.price.toFixed(2)}
            </h3>
            <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
              {selectedProduct.description}
            </p>
            <p style={{ fontSize: "1rem", fontStyle: "italic" }}>
              Category: {selectedProduct.category}
            </p>
            <Link to={"/cart"}>
              <Button
                variant="dark"
                style={{
                  marginTop: "20px",
                  backgroundColor: "#1f2a44",
                  border: "none",
                  padding: "10px 20px",
                  fontSize: "1.1rem",
                  transition: "background-color 0.3s",
                }}
                onClick={handleAddToCart}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#2e3a57")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#1f2a44")}
              >
                Add to Cart
              </Button>
            </Link>
          </div>
          <div style={{ flex: "0 0 300px", textAlign: "center" }}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
