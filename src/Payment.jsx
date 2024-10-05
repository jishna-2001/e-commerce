import React, { useContext, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { exampleContext } from "./App";

function Payment() {
  const { setshownav, setshownewnav } = useContext(exampleContext);
  setshownav(false);
  setshownewnav(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setOrderPlaced(true);

    setTimeout(() => {
      navigate("/service");
    }, 2000);
  };

  return (
    <div
      style={{
        backgroundColor: "#f6f0e9",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "40px 20px",
          maxWidth: "500px",
          width: "100%",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Card
          style={{
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "15px",
            backgroundColor: "#ffffff",
            padding: "30px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#2c3e50",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            Select Payment Method
          </h2>

          <Form>
            <Form.Group controlId="paymentMethod">
              <Form.Check
                type="radio"
                label="Cash on Delivery"
                name="paymentMethod"
                checked
                readOnly
                style={{
                  fontSize: "20px",
                  padding: "15px",
                  borderRadius: "10px",
                  backgroundColor: "#f7f9fc",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                  fontWeight: "500",
                }}
              />
            </Form.Group>
          </Form>

          {!orderPlaced ? (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Button
                variant="success"
                onClick={handlePlaceOrder}
                style={{
                  padding: "15px 40px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  transition: "all 0.3s ease",
                  backgroundColor: "#27ae60",
                  border: "none",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#2ecc71")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#27ae60")}
              >
                Place Your Order
              </Button>
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                marginTop: "30px",
                color: "#27ae60",
                fontSize: "22px",
                fontWeight: "bold",
                letterSpacing: "1px",
                opacity: "0.9",
                transition: "opacity 0.5s ease",
              }}
            >
              Your order has been placed!
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Payment;
