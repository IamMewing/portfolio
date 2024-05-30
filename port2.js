// Typed.js initialization
let typed = new Typed('.typed-text', {
    strings: ["developer", "designer", "creative"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  
  // Navbar animation on scroll
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-56px"; /* Adjust for navbar height */
    }
  }
  
  // AOS initialization
  AOS.init({
    duration: 800, // Reduce the duration for smoother animations
    easing: 'ease-in-out', // Use a smoother easing function
    once: true, // Only animate once when scrolled into view
  });
  