var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var pass = popup.querySelector("[name=password]");
var form = popup.querySelector(".login-form");

var linkMap = document.querySelector(".map-link");
var linkMapFooter = document.querySelector(".map-link-footer");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map-close");

// открыть
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});
// закрыть
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
// закрыть по Esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
// ошибка при нажатии кнопки "Войти"
form.addEventListener("submit", function(evt) {
  if (!login.value || !pass.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

// Карта
// открыть карту
if (linkMap !== null) {
  linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
  });
}
linkMapFooter.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});
// закрыть карту
closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});
// закрыть карту по Esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});
