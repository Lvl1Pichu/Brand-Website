import "./App.css";
import SliderComponent from "./components/SliderComponent";
import ReverseSliderComponent from "./components/ReverseSliderComponent";
import Navbar from "./components/NavbarComponent";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <div className="container" style={{width: '100%' }}>
        <SliderComponent></SliderComponent>
        <ReverseSliderComponent></ReverseSliderComponent>
      </div>
    </>
  );
}

export default App;
