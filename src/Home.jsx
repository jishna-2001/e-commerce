import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f6f0e9",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            width: "85%",
            height: "85%",
            display: "flex",
            borderRadius: "30px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundColor: "#f8f9fa",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px",
              color: "#1f2a44",
            }}
          >
            <h2
              style={{
                fontSize: "80px",
                marginBottom: "1.5rem",
                lineHeight: "1.1",
                textAlign: "center",
                fontWeight: "bold",
                color: "#1f2a44",
              }}
            >
              Discover <br /> The <br />
              Fashion <br />
              Revolution
            </h2>
            <Link to={"/login"}>
              <Button
                style={{
                  width: "180px",
                  backgroundColor: "#1f2a44",
                  color: "#f0c987",
                  border: "2px solid ",
                  padding: "12px 30px",
                  fontSize: "18px",
                  borderRadius: "25px",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#2e3a57")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#1f2a44")}
              >
                SHOP NOW
              </Button>
            </Link>
          </div>

          {/* Right Image Section */}
          <div style={{ flex: 1, position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            ></div>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob3BwaW5nfGVufDB8fDB8fHww"
              alt="Shopping"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div
        style={{
          textAlign: "center",
          fontFamily: "serif",
          padding: "60px 20px",
          color: "#1f2a44",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#1f2a44",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}
        >
          About Us
        </h1>
        <p
          style={{
            width: "60%",
            margin: "0 auto",
            fontSize: "1.25rem",
            lineHeight: "1.8",
            color: "#6e6e6e",
          }}
        >
          At <strong style={{ color: "#f0c987" }}>Shopper</strong>, we believe
          that shopping should be an enjoyable, seamless experience, where
          quality meets convenience. Founded with a passion for bringing the
          best products to your doorstep, we curate a wide range of top-notch
          items across fashion, electronics, home essentials, and more. Whether
          you're looking for the latest trends or everyday necessities, we've
          got you covered.
        </p>
      </div>
      <footer
        style={{
          backgroundColor: "#1f2a44",
          color: "#f0c987",
          padding: "40px 20px",
          textAlign: "center",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <h4 style={{ marginBottom: "10px", fontWeight: "bold" }}>Shopper</h4>
          <p>Bringing Quality to Your Doorstep</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ color: "#f0c987", textDecoration: "none" }}>
            Home
          </Link>{" "}
          |{" "}
          <Link
            to="/about"
            style={{ color: "#f0c987", textDecoration: "none" }}
          >
            About Us
          </Link>{" "}
          |{" "}
          <Link
            to="/contact"
            style={{ color: "#f0c987", textDecoration: "none" }}
          >
            Contact
          </Link>
        </div>

        <p style={{ marginBottom: "0" }}>
          © 2024 Shopper. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
