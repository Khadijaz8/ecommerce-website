let uperArrow = document.getElementsByClassName("uperArrow");

Array.from(uperArrow).forEach((element) => {
  element.addEventListener("click", function (e) {
    let dropdownOpt = document.querySelector(".ranges");
    if (dropdownOpt.style.display === "none") {
      dropdownOpt.style.display = "block"; // Show the list
  } else {
      dropdownOpt.style.display = "none"; // Hide the list
  }
  });
});

//features

let uperArrowF = document.getElementsByClassName("uperArrowF");

Array.from(uperArrowF).forEach((element) => {
  element.addEventListener("click", function (e) {
    let dropdownOptf = document.querySelector(".features");
    if (dropdownOptf.style.display === "none") {
      dropdownOptf.style.display = "block"; // Show the list
  } else {
      dropdownOptf.style.display = "none"; // Hide the list
  }
  });
});

//brands
let uperArrowB = document.getElementsByClassName("uperArrowB");

Array.from(uperArrowB).forEach((element) => {
  element.addEventListener("click", function (e) {
    let dropdownOptb = document.querySelector(".brands");
    if (dropdownOptb.style.display === "none") {
      dropdownOptb.style.display = "block"; // Show the list
  } else {
      dropdownOptb.style.display = "none"; // Hide the list
  }
  });
});

//conditions
let uperArrowC = document.getElementsByClassName("uperArrowC");

Array.from(uperArrowC).forEach((element) => {
  element.addEventListener("click", function (e) {
    let dropdownOptc = document.querySelector(".condition");
    if (dropdownOptc.style.display === "none") {
      dropdownOptc.style.display = "block"; // Show the list
  } else {
      dropdownOptc.style.display = "none"; // Hide the list
  }
  });
});

let uperArrowR = document.getElementsByClassName("uperArrowR");

Array.from(uperArrowR).forEach((element) => {
  element.addEventListener("click", function (e) {
    let dropdownOptr = document.querySelector(".ratings");
    if (dropdownOptr.style.display === "none") {
      dropdownOptr.style.display = "block"; 
  } else {
      dropdownOptr.style.display = "none"; 
  }
  });
});


let uperArrowCa = document.getElementsByClassName("uperArrowCa");

Array.from(uperArrowCa).forEach((element) => {
  element.addEventListener("click", function (e) {
    let dropdownOptca = document.querySelector(".category");
    if (dropdownOptca.style.display === "none") {
      dropdownOptca.style.display = "block"; 
  } else {
      dropdownOptca.style.display = "none"; 
  }
  });
});

