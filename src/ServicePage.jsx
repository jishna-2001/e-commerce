import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Dropdown, InputGroup, Form } from "react-bootstrap";
import { exampleContext } from "./App";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

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
    searchQuery,
    setSearchQuery,
  } = useContext(exampleContext);

  // Update navigation visibility states
  useEffect(() => {
    setshownewnav(true);
    setshownav(false);
    setshowhome(false);
  }, [setshownewnav, setshownav, setshowhome]);

  // Fetch products from the API
  useEffect(() => {
    axios
      .get("https://fakestoreapiserver.reactbd.com/amazonproducts")
      .then((res) => setproducts(res.data));
  }, [setproducts]);

  const [selectedCategory, setselectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(null);

  const getItem_id = (id) => {
    setitemId(id);
  };

  // Filter products based on search, category, and sort order
  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory !== "All") {
        return (
          product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
      return true;
    })
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
      {/* category-wise listing */}
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
            border: "solid #343a40 1px",
            borderRadius: "5px",
            padding: "10px 20px",
            marginRight: "10px",
          }}
          onClick={() => setselectedCategory("All")}
        >
          All
        </Button>
        <Button
          style={{
            backgroundColor:
              selectedCategory === "Men's Clothing" ? "black" : "white",
            color: selectedCategory === "Men's Clothing" ? "white" : "black",
            border: "solid #343a40 1px",
            borderRadius: "5px",
            padding: "10px 20px",
            marginRight: "10px",
          }}
          onClick={() => setselectedCategory("Men's Clothing")}
        >
          Men
        </Button>
        <Button
          style={{
            backgroundColor:
              selectedCategory === "Women's Clothing" ? "black" : "white",
            color: selectedCategory === "Women's Clothing" ? "white" : "black",
            border: "solid #343a40 1px",
            borderRadius: "5px",
            padding: "10px 20px",
            marginRight: "10px",
          }}
          onClick={() => setselectedCategory("Women's Clothing")}
        >
          Women
        </Button>
        <Button
          style={{
            backgroundColor:
              selectedCategory === "Jewelery" ? "black" : "white",
            color: selectedCategory === "Jewelery" ? "white" : "black",
            border: "solid #343a40 1px",
            borderRadius: "5px",
            padding: "10px 20px",
            marginRight: "10px",
          }}
          onClick={() => setselectedCategory("Jewelery")}
        >
          Jewelery
        </Button>
        <Button
          style={{
            backgroundColor:
              selectedCategory === "Electronics" ? "black" : "white",
            color: selectedCategory === "Electronics" ? "white" : "black",
            border: "solid #343a40 1px",
            borderRadius: "5px",
            padding: "10px 20px",
            marginRight: "10px",
          }}
          onClick={() => setselectedCategory("Electronics")}
        >
          Electronics
        </Button>
      </div>
      <div
        className="d-flex justify-content-center align-items-center mb-4"
        style={{ marginTop: "40px" }}
      >
        {/* Sorting based on price*/}
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" className="mx-2">
            Sort by Price
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSortOrder("lowToHigh")}>
              Low to High
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOrder("highToLow")}>
              High to Low
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* Search operation */}
        <InputGroup style={{ maxWidth: "400px" }} className="mx-2">
          <InputGroup.Text>
            <IoSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </InputGroup>
      </div>
      {/* Displaying products */}
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {filteredProducts.map((item) => (
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
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
