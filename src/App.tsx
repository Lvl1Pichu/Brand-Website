import "./App.css";
import SliderComponent from "./components/SliderComponent";
import Navbar from "./components/NavbarComponent";
import Carousel from './components/Carousel';
import TeamworkImage from './Assets/Teamwork.jpg'; // import the image



function App() {

  const images = [
    TeamworkImage,
    TeamworkImage,
    TeamworkImage,
    // ... other images
  ];

  return (
    <>
    <Navbar></Navbar>
      <div className="container" style={{width: '100%' }}>
        <SliderComponent></SliderComponent>
        <Carousel images={images}></Carousel>
      </div>
    </>
  );
}

export default App;
