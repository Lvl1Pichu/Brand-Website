import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Logga.png';
const Navbar = () => {
    return (_jsxs("nav", { className: "navbar", children: [_jsxs("div", { className: "navbar-left", children: [_jsx("div", { className: "navbar-logo", children: _jsx("img", { src: logo, alt: "Logo" }) }), _jsxs("div", { className: "navbar-buttons", children: [_jsx("button", { className: "left-navbar-button", children: "Esports" }), _jsx("button", { className: "left-navbar-button", children: "Products" }), _jsx("button", { className: "left-navbar-button", children: "Community" }), _jsx("button", { className: "left-navbar-button", children: "Company" }), _jsx("button", { className: "left-navbar-button", children: "App" }), _jsx("button", { className: "left-navbar-button", children: "Shop" })] })] }), _jsxs("div", { className: "navbar-right", children: [_jsx(FontAwesomeIcon, { icon: faShoppingCart, className: "icon-shopping-cart" }), _jsx("button", { className: "navbar-button navbar-signup", children: "Sign up" }), _jsx("button", { className: "navbar-button navbar-signin", children: "Sign in" }), _jsx("button", { className: "navbar-mobile-button", children: _jsx(FontAwesomeIcon, { icon: faUser }) })] })] }));
};
export default Navbar;
