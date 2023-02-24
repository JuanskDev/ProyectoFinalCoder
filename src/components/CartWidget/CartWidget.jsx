import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext();
  return (
    <>
      <div className="d-flex  carrito">
        <Link className="nav-link" to={"/cart"}>
          <button className="btn btn-dark pt-2 btn-Cart">
            <FiShoppingCart />
          </button>
        </Link>

        {getItemQuantity() > 0 && (
          <div className="d-flex justify-content-center  border border-white rounded-circle px-3 py-1">
            <p className="text-white my-auto mx-auto">{getItemQuantity()}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartWidget;
