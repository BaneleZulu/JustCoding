const motherPanel = document.getElementById("languageIMG");
const img = document.getElementById("img");
const childPanel = document.getElementById("languageIMG-content");
const child_midPane = document.getElementById("midPane");
const idePane = document.getElementById("tool");

var isClicked = false;
img.addEventListener("click", () => {
  if (isClicked === false) {
    //DILATED
    isClicked = true;
    img.style.border = "none";
    img.style.width = "70px";
    img.style.height = "70px";
    childPanel.style.width = "840px";
    child_midPane.style.transition = "overflow 3s ease-in-out 0.5s";
    childPanel.style.border = "1px solid rgba(221,221,221, 100%)";
    childPanel.style.transition = "border .4s ease-in-out";
    childPanel.style.transition = "width 1s ease-in-out";
    childPanel.style.overflow = "visible";
    //childPanel.style.height = "100px";
    child_midPane.style.height = "100%";
    //idePane.style.overflow = "visible";
    //childPanel.style.overflow = "visible";
    idePane.style.overflow = "visible";
  } else {
    //COMPRESSED
    isClicked = false;
    motherPanel.style.borderLeft = "2px solid rgba(221,221,221, 100%)";
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.border = "1px solid rgba(221,221,221, 100%)";
    childPanel.style.width = "0px";
    childPanel.style.transition = "border .8s ease-in-out";
    childPanel.style.transition = "width 1s ease-in-out";
    childPanel.style.overflow = "hidden";
    //childPanel.style.height = "0";
    child_midPane.style.height = "60px";
    // idePane.style.overflow = "hidden";
    // child_midPane.style.overflow = "hidden";
    childPanel.style.transitionDelay = "1s";
    img.style.transition = "1s";
    idePane.style.overflow = "hidden";

    if (childPanel.offsetWidth < 5) {
      alert("INSIDE");
      childPanel.style.height = "0";
    }
  }
});
