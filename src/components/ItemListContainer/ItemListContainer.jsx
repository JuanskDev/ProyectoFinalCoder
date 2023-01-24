import React from "react";
import Item from "../Item/Item";
import cuadro1 from "../../assets/cuadro1.png";
import cuadro2 from "../../assets/cuadro2.png";
import cuadro3 from "../../assets/cuadro3.png";
import ceramica1 from "../../assets/ceramica1.png";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  return (
    <>
      <div className="container-fluid align-self-center align-items-baseline">
        <Item
          title={"Bauhaus Figuras Geometricas"}
          image={cuadro1}
          price={8000}
        />
        <ItemCount valorInicial={1} stock={9} />
      </div>
      <div className="container-fluid align-self-center align-items-baseline">
        <Item title={"Modernos Living Bauhaus"} image={cuadro2} price={4200} />
        <ItemCount valorInicial={1} stock={4} />
      </div>

      <div className="container-fluid align-self-center align-items-baseline">
        <Item
          title={"Bauhaus Figuras Geometricas"}
          image={cuadro3}
          price={8800}
        />
        <ItemCount valorInicial={1} stock={6} />
      </div>
      <div className="container-fluid align-self-center align-items-baseline">
        <Item title={"TAZA DE CAFÉ KAMA NUDE"} image={ceramica1} price={3300} />
        <ItemCount valorInicial={1} stock={3} />
      </div>
    </>
  );
};

export default ItemListContainer;
