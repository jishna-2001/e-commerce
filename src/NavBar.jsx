import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";

function NavBar() {
  return (
    <div>
      <div
        style={{
          height: "50px",
          backgroundColor: "#1f2a44",
          color: "#f0c987",
          textAlign: "center",
          fontFamily: "Georgia, serif",
          fontSize: "18px",
          paddingTop: "10px",
          letterSpacing: "1px",
        }}
      >
        Get 25% Off This Summer Sale. Grab It Fast!!
      </div>

      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#f6f0e9",
        }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              color: "#1f2a44",
              fontSize: "40px",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            ShopEase
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ alignItems: "center" }}>
              <Link
                to={"/signin"}
                style={{
                  color: "#1f2a44",
                  padding: "0.5rem 1rem",
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  border: "2px solid #1f2a44",
                  borderRadius: "10px",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  marginRight: "15px",
                  fontFamily: "serif",
                }}
                onMouseEnter={(e) => (
                  (e.target.style.backgroundColor = "#1f2a44"),
                  (e.target.style.color = "#fdfdfd")
                )}
                onMouseLeave={(e) => (
                  (e.target.style.backgroundColor = "transparent"),
                  (e.target.style.color = "#1f2a44")
                )}
              >
                Sign In
              </Link>

              <Link
                to={"/login"}
                style={{
                  color: "#1f2a44",
                  padding: "0.5rem 1rem",
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  border: "2px solid #1f2a44",
                  borderRadius: "10px",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  fontFamily: "serif",
                }}
                onMouseEnter={(e) => (
                  (e.target.style.backgroundColor = "#1f2a44"),
                  (e.target.style.color = "#fdfdfd")
                )}
                onMouseLeave={(e) => (
                  (e.target.style.backgroundColor = "transparent"),
                  (e.target.style.color = "#1f2a44")
                )}
              >
                Log In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
