// Jquery
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js";
// aos
import "./aos.min.js";
// vanta NET
import "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
import "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
// vanta globe
import "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
import "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js";

// vanta.sett
import "./vanta.min.js";
// index
import "./index.min.js";
// preLoaderOut
import "./loaderOut.min.js";

// swiper js cdn and initialize
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

// Swiper Project
const swiperProject = new Swiper('.swiperProject', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 3500

  });

  // Swiper Certificate
  const swiperCertificates = new Swiper(".certiSwiper", {
    effect: "cards",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
      }
      
  });