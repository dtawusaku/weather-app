// For Preloader -- When Page loads
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

window.addEventListener("scroll", function () {
  const scrollPosition =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollPosition >= div1.offsetTop && scrollPosition < div2.offsetTop) {
    // Show content of div1
  } else if (scrollPosition >= div2.offsetTop) {
    // Show content of div2
  } else {
    // Hide content of both div1 and div2
  }
});

// const container = document.querySelector(".container");
// const content = document.querySelector(".content");

// window.addEventListener("scroll", function () {
//   const viewportHeight = window.innerHeight;
//   const scrollPosition =
//     window.scrollY ||
//     document.documentElement.scrollTop ||
//     document.body.scrollTop ||
//     0;

//   if (scrollPosition >= viewportHeight) {
//     content.classList.remove("relative");
//     content.classList.add("fixed");
//   } else {
//     content.classList.remove("fixed");
//     content.classList.add("relative");
//   }
// });

/* HANDLES TEMPERATURE CHANGE   */
window.addEventListener("load", () => {
  const radioOptions = document.querySelectorAll(".radio-option"); //The divs
  const radioButtons = document.querySelectorAll('input[type="radio"]'); //TThe input radio buttons

  //If div is clicked, check the radio button that has id of the div's for attribute
  radioOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const forAttr = option.getAttribute("for");
      const radioButton = document.getElementById(forAttr);

      if (!radioButton.checked) {
        radioButton.checked = true;

        //FIXME: Color not changing
        option.classList.add("bg-red-500");
        option.classList.remove("bg-red-500");
      }
    });
  });
});
