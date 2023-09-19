import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './ProductCards.css';
import ToteBag from '../assets/ToteBag.png';
import TuningForkKeyboard from '../assets/Tuningforkkeyboard.png';
import MousePadFork from '../assets/MousePadFork.png';
const images = [ToteBag, TuningForkKeyboard, MousePadFork, ToteBag]; // Reusing ToteBag image
const ProductCards = () => {
    return (_jsx("div", { className: "product-cards-container", children: images.map((image, index) => (_jsxs("div", { className: "product-card", children: [_jsx("img", { src: image, alt: `Product ${index + 1}` }), _jsx("div", { className: "buy-circle", children: _jsx("p", { children: "Buy" }) })] }, index))) }));
};
export default ProductCards;
