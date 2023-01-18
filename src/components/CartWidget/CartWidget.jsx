import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import "./CartWidget.css";

const CartWidget = ({ cantCarrito }) => {
  return (
    <>
      <button className="btn btn-dark btn-cart">
        <FiShoppingCart />
      </button>
      <div className="cart-div">
        <p className="cart-items">{cantCarrito}</p>
      </div>
    </>
  );
};

export default CartWidget;
