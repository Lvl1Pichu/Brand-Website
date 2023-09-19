import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import teamworkImage from '../assets/Teamwork.jpg'; // Import the image
import './BottomSliderComponent.css';
const BottomSliderComponent = () => {
    return (_jsxs("div", { className: "bottom-slider-container", children: [_jsxs("div", { className: "bottom-slider-image", children: [_jsx("img", { src: teamworkImage, alt: "Teamwork" }), _jsxs("div", { className: "image-content", children: [_jsx("h1", { children: "Contact" }), _jsx("p", { children: "Resonant@partnership.com" }), _jsx("p", { children: "Resonant@support.com" }), _jsx("p", { children: "Resonant@gaming.com" }), _jsx("p", { children: "Resonant@media.com" })] })] }), _jsx("div", { className: 'bottom-slider-video-container', children: _jsxs("video", { className: 'bottom-slider-video', autoPlay: true, playsInline: true, loop: true, muted: true, preload: "metadata", children: [_jsx("source", { src: "https://player.vimeo.com/progressive_redirect/playback/832225661/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1505220741&signature=f3d9fe4bf29d7658ed53ee94214c2c5c6ba0cfc06722b8a558a69cbe8f871794", type: "video/mp4" }), "Your browser does not support the video tag."] }) })] }));
};
export default BottomSliderComponent;
