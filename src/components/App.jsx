import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ul className="d-flex justify-content-around  ">
        <ItemListContainer />
      </ul>
    </>
  );
};

export default App;
