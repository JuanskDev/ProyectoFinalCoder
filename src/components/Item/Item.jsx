import React from "react";

const Item = ({ image, title, price }) => {
  return (
    <>
      <div className="">
        <li className="list-group-item my-4 ">
          <img
            src={image}
            className="img-thumbnail img-item me-auto mb-2 mb-lg-0 border-0 "
            alt="..."
          />
        </li>
      </div>
      <div className="">
        <p>{title}</p>
        <p>Precio: {price}</p>
      </div>
    </>
  );
};

export default Item;
