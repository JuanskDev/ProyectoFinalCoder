import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";

const CartWidget = ({ cantCarrito }) => {
  return (
    <>
      <div className="d-flex  carrito">
        <button className="btn btn-dark pt-2 btn-Cart">
          <FiShoppingCart />
        </button>
        <div className="d-flex justify-content-center  border border-white rounded-circle px-3 py-1">
          <p className="text-white my-auto mx-auto">{cantCarrito}</p>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
