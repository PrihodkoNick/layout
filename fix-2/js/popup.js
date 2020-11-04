var link = document.getElementById("btn-modal-open");
var popup = document.querySelector(".modal");
var linkClosePopup = document.querySelector(".btn-modal-close");

var nameSurname = document.querySelector("[name=name-surname]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-open");
  nameSurname.focus();
});

linkClosePopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-open");
});

// закрыть по Esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-open")) {
      popup.classList.remove("modal-open");
    }
  }
});
