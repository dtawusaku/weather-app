//Smaller Screens
//Get device height and set in custom.css
const deviceHeight = window.innerHeight;
const root = document.documentElement;
root.style.setProperty("--device-height", `${deviceHeight}px`);

// For Preloader -- When Page loads
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
