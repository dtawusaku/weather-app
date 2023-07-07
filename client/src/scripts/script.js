//Smaller Screens
//Get device height and set in custom.css
const deviceHeight = window.innerHeight;
const root = document.documentElement;
root.style.setProperty("--device-height", `${deviceHeight}px`);

// For Preloader -- When Page loads
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

/* HANDLES TEMPERATURE CHANGE   */
// window.addEventListener("load", () => {
//   const radioOptions = document.querySelectorAll(".radio-option"); //The divs
//   const radioButtons = document.querySelectorAll('input[type="radio"]'); //TThe input radio buttons

//   //If div is clicked, check the radio button that has id of the div's for attribute
//   radioOptions.forEach((option) => {
//     option.addEventListener("click", () => {
//       const forAttr = option.getAttribute("for");
//       const radioButton = document.getElementById(forAttr);

//       if (!radioButton.checked) {
//         radioButton.checked = true;

//         //FIXME: Color not changing
//         option.classList.add("bg-red-500");
//         option.classList.remove("bg-red-500");
//       }
//     });
//   });
// });
