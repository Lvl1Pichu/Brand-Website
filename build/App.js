import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import SliderComponent from "./components/SliderComponent";
import Navbar from "./components/NavbarComponent";
import BottomSliderComponent from "./components/BottomSliderComponent";
import ProductCards from "./components/ProductCards";
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "container", style: { width: '100%' }, children: [_jsx(SliderComponent, {}), _jsx(BottomSliderComponent, {}), _jsx(ProductCards, {})] })] }));
}
export default App;
