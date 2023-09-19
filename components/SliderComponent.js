import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './SliderComponent.css';
import TuningKeyboard from '../assets/Tuningforkkeyboard.png';
const SliderComponent = () => {
    return (_jsxs("div", { className: "slider-container", children: [_jsx("div", { className: "slider-left", style: { backgroundImage: `url(${TuningKeyboard})` } }), _jsxs("div", { className: "slider-right", children: [_jsx("h2", { children: "COMMUNITY" }), _jsxs("ul", { children: [_jsx("h6", { children: "Latest discussions" }), ['I want Resonant to win Champs', 'Photos of my resonant tote', 'BOASTER WHEN WILL YOU ACE!', 'Lower Bracket Kings', 'Road to worlds', 'Is there any hope to get to finals?', 'When is your next game?'].map((item, index) => (_jsxs("li", { children: [item, _jsxs("span", { className: "like-counter", children: [_jsx(FontAwesomeIcon, { icon: faHeart }), _jsx("span", { className: "like-number", children: Math.floor(Math.random() * 100) })] })] }, index)))] })] })] }));
};
export default SliderComponent;
