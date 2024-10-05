import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { exampleContext } from "./App";

function NewNavbar() {
  const { cart } = useContext(exampleContext);
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/home";
      console.log("User logged out successfully");
    } catch (error) {
      console.log("Error logging out:", error.message);
    }
  }

  return (
    <div style={{ fontFamily: "'Playfair Display', serif" }}>
      <div
        style={{
          height: "50px",
          backgroundColor: "#1f2a44",
          color: "#f0c987",
          textAlign: "center",
          paddingTop: "12px",
          letterSpacing: "1px",
          fontSize: "1.2rem",
        }}
      >
        Get 25% Off This Summer Sale. Grab It Fast!!
      </div>

      <Navbar
        expand="lg"
        style={{
          height: "80px",
          backgroundColor: "#f6f0e9",
        }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="mx-auto"
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#1f2a44",
              fontFamily: "Georgia, serif",
              letterSpacing: "2px",
              textAlign: "center",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            ShopEase
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Link to="/cart" style={{ position: "relative" }}>
                <GrCart
                  style={{
                    color: "#333",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                />
                {cart.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      backgroundColor: "#d9534f",
                      color: "white",
                      borderRadius: "50%",
                      padding: "3px 7px",
                      fontSize: "0.9rem",
                    }}
                  >
                    {cart.length}
                  </span>
                )}
              </Link>

              <Link
                to="/home"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  padding: "0.5rem 1.5rem",
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  borderRadius: "22px",
                  border: "2px solid black",
                  transition: "all 0.3s ease",
                  marginLeft: "20px",
                }}
                onMouseOver={(e) => (
                  (e.target.style.backgroundColor = "#1f2a44"),
                  (e.target.style.color = "white")
                )}
                onMouseOut={(e) => (
                  (e.target.style.backgroundColor = "white"),
                  (e.target.style.color = "black")
                )}
                onClick={handleLogout}
              >
                Log Out
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NewNavbar;
