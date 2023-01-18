import "./App.css";
import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import cuadro1 from "../assets/cuadro1.png";
import cuadro2 from "../assets/cuadro2.png";
import cuadro3 from "../assets/cuadro3.png";
import ceramica1 from "../assets/ceramica1.png";

const App = () => {
  return (
    <>
      <Navbar />
      <ul className="d-flex justify-content-around">
        <ItemListContainer
          title={"Bauhaus Figuras Geometricas"}
          image={cuadro1}
          price={8000}
        />
        <ItemListContainer
          title={"Modernos Living Bauhaus"}
          image={cuadro2}
          price={4200}
        />
        <ItemListContainer
          title={"Bauhaus Figuras Geometricas"}
          image={cuadro3}
          price={8800}
        />
        <ItemListContainer
          title={"TAZA DE CAFÉ KAMA NUDE"}
          image={ceramica1}
          price={3300}
        />
      </ul>
    </>
  );
};

export default App;
