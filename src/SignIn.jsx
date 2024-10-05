import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { exampleContext } from "./App";

function SignIn() {
  const { showhome, setshowhome, setshownav } = useContext(exampleContext);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  setshowhome(false);
  setshownav(false);

  const handlefname = (e) => {
    setfname(e.target.value);
  };

  const handlelname = (e) => {
    setlname(e.target.value);
  };

  const handlemail = (e) => {
    setemail(e.target.value);
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      toast.success("User registered Successfully", { position: "top-center" });
    } catch (error) {
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
          onSubmit={handleSignin}
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
              color: "#1f2a44",
              marginBottom: "20px",
            }}
          >
            Sign In
          </h1>

          <Form.Group className="mb-3" controlId="formBasicfname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              onChange={handlefname}
              style={{
                borderRadius: "10px",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasiclname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              onChange={handlelname}
              style={{
                borderRadius: "10px",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
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
              onChange={handlepassword}
              style={{
                borderRadius: "10px",
              }}
            />
          </Form.Group>

          <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <Button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#1f2a44",
                color: "white",
                border: "none",
                height: "45px",
                borderRadius: "10px",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#2e3a57")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1f2a44")}
            >
              Sign In
            </Button>
          </div>

          <div style={{ textAlign: "right" }}>
            Already have an account?{" "}
            <Link to={"/login"} style={{ color: "#1f2a44" }}>
              Log in
            </Link>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignIn;
