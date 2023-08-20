import "./App.css";
import SliderComponent from "./components/SliderComponent";
import Navbar from "./components/NavbarComponent";
import BottomSliderComponent from "./components/BottomSliderComponent";
import ProductCards from "./components/ProductCards";

function App() {

  return (
    <>
    <Navbar></Navbar>
      <div className="container" style={{width: '100%' }}>
        <SliderComponent></SliderComponent>
        <BottomSliderComponent></BottomSliderComponent>
        <ProductCards></ProductCards>
      </div>
    </>
  );
}

export default App;
