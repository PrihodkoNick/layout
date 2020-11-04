var modalMapLink = document.querySelector(".modal-map-open");
var modalMap = document.querySelector(".modal-map");
var modalMapClose = document.querySelector(".button-map-close");

var modalLink = document.querySelector(".modal-open");
var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".button-write-close");

modalMapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

// закрыть
modalMapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

// закрыть по Esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }
  }
});

modalLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});

// закрыть
modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});

// закрыть по Esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
    }
  }
});
