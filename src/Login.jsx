import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import { exampleContext } from "./App";

function Login() {
  const {
    shownav,
    setshownav,
    shownewnav,
    setshownewnav,
    showhome,
    setshowhome,
  } = useContext(exampleContext);
  setshownav(false);
  setshownewnav(false);
  setshowhome(false);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlemail = (e) => {
    setemail(e.target.value);
  };

  const handlepass = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      window.location.href = "/service";
      toast.success("User logged in Successfully", { position: "top-center" });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f6f0e9",
        minHeight: "100vh",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form
          onSubmit={handleSubmit}
          style={{
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            padding: "40px",
            borderRadius: "20px",
            backgroundColor: "#fff",
            width: "500px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#1f2a44", // Deep navy blue for heading
              marginBottom: "20px",
            }}
          >
            Login
          </h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handlemail}
              style={{
                borderRadius: "10px",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlepass}
              style={{
                borderRadius: "10px",
              }}
            />
          </Form.Group>

          <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <Button
              type="submit"
              style={{
                width: "100%", // Full width button
                backgroundColor: "#1f2a44", // Deep navy blue
                color: "white",
                border: "none",
                height: "45px",
                borderRadius: "10px",
                transition: "background-color 0.3s",
              }}
              onMouseOver={
                (e) => (e.target.style.backgroundColor = "#2e3a57") // Darker navy on hover
              }
              onMouseOut={
                (e) => (e.target.style.backgroundColor = "#1f2a44") // Reset to original navy
              }
            >
              Login
            </Button>
          </div>

          <div style={{ textAlign: "right" }}>
            Don't have an account?{" "}
            <Link
              to="/signin"
              style={{
                color: "#1f2a44", // Deep navy blue for link
                textDecoration: "none",
              }}
            >
              Sign In
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
