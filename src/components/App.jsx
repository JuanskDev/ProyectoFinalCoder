import "./App.css";

import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Contacto from "./Contacto/Contacto";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CarritoProvider } from "../context/CarritoContext";
import loadProducts from "../firebase/firebase";

//loadProducts();

const App = () => {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/contacto"} element={<Contacto />} />
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route
            path={"/category/:idCategoria"}
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </CarritoProvider>
  );
};

export default App;
