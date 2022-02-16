// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function linkTrybe (event) {
  event.preventDefault();
}
HREF_LINK.addEventListener("click", linkTrybe);

function checboxPD (event) {
  event.preventDefault();
}
INPUT_CHECKBOX.addEventListener("click", checboxPD);

function inputText(event) {
  const caractere = event.key;
  if (caractere !== "a") {
    event.preventDefault();
  }
}
INPUT_TEXT.addEventListener("keypress", inputText);