import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import { exampleContext } from "./App";
import axios from "axios";
import { Link } from "react-router-dom";

function ServicePage() {
  const {
    shownav,
    setshownav,
    shownewnav,
    setshownewnav,
    products,
    setproducts,
    showhome,
    setshowhome,
    setitemId,
  } = useContext(exampleContext);

  setshownewnav(true);
  setshownav(false);
  setshowhome(false);

  const getItem_id = (id) => {
    console.log(id);
    setitemId(id);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapiserver.reactbd.com/amazonproducts")
      .then((res) => setproducts(res.data));
  }, [setproducts]);

  const [filteredProducts, setfilteredProducts] = useState(products);
  const [selectedCategory, setselectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    let filtered = [...products];

    // Filter based on the selected category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort products based on the selected sort order
    if (sortOrder === "lowToHigh") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setfilteredProducts(filtered);
  }, [selectedCategory, sortOrder, products]);

  const showAll = () => setselectedCategory("All");
  const showMen = () => setselectedCategory("Men's Clothing");
  const showWomen = () => setselectedCategory("Women's Clothing");
  const showJewelery = () => setselectedCategory("Jewelery");
  const showElectronics = () => setselectedCategory("Electronics");

  const handleSortLowToHigh = () => {
    setSortOrder("lowToHigh");
  };

  const handleSortHighToLow = () => {
    setSortOrder("highToLow");
  };

  return (
    <div style={{ backgroundColor: "#f6f0e9" }}>
      <div
        style={{
          fontFamily: "serif",
          width: "50%",
          textAlign: "center",
          marginLeft: "500px",
          fontSize: "20px",
          color: "gray",
          backgroundColor: "#f6f0e9",
        }}
      >
        Find everything you need to look and feel your best, and shop the latest
        fashion and lifestyle products
      </div>
      <div
        style={{
          width: "100%",
          fontFamily: "serif",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: selectedCategory === "All" ? "black" : "white",
            color: selectedCategory === "All" ? "white" : "black",
            border: "solid #343a40 2px",
            borderRadius: "25px",
            padding: "10px 20px",
            marginRight: "10px",
          }}
          onClick={showAll}
        >
          All
        </Button>
        <Button
          style={{
            backgroundColor:
              selectedCategory === "Men's Clothing" ? "black" : "white",
            color: selectedCategory === "Men's Clothing" ? "white" : "black",
            border: "solid #343a40 2px",
            borderRadius: "25px",
            padding: "10px 20px",
            marginRight: "10px",
          }}
          onClick={showMen}
        >
          Men
        </Button>
        <Button
          style={{
            backgroundColor:
              selectedCategory === "Women's Clothing" ? "black" : "white",
            color: selectedCategory === "Women's Clothing" ? "white" : "black",
            border: "solid #343a40 2px",
            borderRadius: "25px",
            padding: "10px 20px",
            marginRight: "10px",
          }}
          onClick={showWomen}
        >
          Women
        </Button>
        <Button
          style={{
            backgroundColor:
              selectedCategory === "Jewelery" ? "black" : "white",
            color: selectedCategory === "Jewelery" ? "white" : "black",
            border: "solid #343a40 2px",
            borderRadius: "25px",
            padding: "10px 20px",
            marginRight: "10px",
          }}
          onClick={showJewelery}
        >
          Jewelery
        </Button>
        <Button
          style={{
            backgroundColor:
              selectedCategory === "Electronics" ? "black" : "white",
            color: selectedCategory === "Electronics" ? "white" : "black",
            border: "solid #343a40 2px",
            borderRadius: "25px",
            padding: "10px 20px",
            marginRight: "10px",
          }}
          onClick={showElectronics}
        >
          Electronics
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle
            style={{
              border: "solid #343a40 2px",
              borderRadius: "25px",
              padding: "10px 20px",
              color: "black",
              backgroundColor: "white",
            }}
            id="dropdown-basic"
            onMouseOver={(e) => (
              (e.target.style.backgroundColor = "black"),
              (e.target.style.color = "white")
            )}
            onMouseOut={(e) => (
              (e.target.style.backgroundColor = "white"),
              (e.target.style.color = "black")
            )}
          >
            Sort by Price
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleSortLowToHigh}>
              Low to High
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSortHighToLow}>
              High to Low
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {filteredProducts.map((item) => {
          return (
            <Card
              style={{ width: "18rem", margin: "8px" }}
              onClick={() => getItem_id(item.id)}
              key={item.id}
            >
              <Card.Img
                variant="top"
                style={{
                  height: "220px",
                  padding: "15px",
                }}
                src={item.image}
              />
              <Link
                to="/details"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "serif",
                      fontSize: "25px",
                    }}
                  >
                    {item.title}
                  </Card.Title>
                  <Card.Text>{item.category}</Card.Text>
                  <Card.Text style={{ fontSize: "25px" }}>
                    ${item.price}
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ServicePage;
