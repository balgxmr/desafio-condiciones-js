/* Problema #1 */
const image = document.querySelector("#imgExpandible");

image.addEventListener("click", () => {
  if (image.style.border === "") {
    image.style.border = "solid red 2px";
  } else {
    image.style.border = "";
  }
});
