import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Login from "./Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ServicePage from "./ServicePage";
import { createContext, useEffect, useState } from "react";
import { auth } from "./Firebase";
import NewNavbar from "./NewNavbar";
import Home from "./Home";
import Details from "./Details";
import Cart from "./Cart";
import Payment from "./Payment";

const exampleContext = createContext();
function App() {
  const [user, setuser] = useState();
  const [shownav, setshownav] = useState(true);
  const [shownewnav, setshownewnav] = useState(false);
  const [products, setproducts] = useState([]);
  const [showhome, setshowhome] = useState(true);
  const [itemId, setitemId] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setuser(user);
    });
  }, []);

  return (
    <div>
      <exampleContext.Provider
        value={{
          shownav,
          setshownav,
          shownewnav,
          setshownewnav,
          products,
          setproducts,
          showhome,
          setshowhome,
          itemId,
          setitemId,
          cart,
          setCart,
        }}
      >
        <BrowserRouter>
          {shownav === true ? <NavBar /> : ""}
          {shownewnav === true ? <NewNavbar /> : ""}
          {showhome === true ? <Home /> : ""}
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/home" /> : <Login />}
            ></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/service" element={<ServicePage />}></Route>
            <Route path="/details" element={<Details />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </exampleContext.Provider>
    </div>
  );
}

export default App;
export { exampleContext };
