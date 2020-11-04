// modal
const modalForm = document.querySelector(".modal");
const inputLogin = document.querySelector(".modal__input");
const modalClose = document.querySelector(".modal__close");
const inputPassword = document.querySelector(
  ".modal__box--password .modal__input"
);
let isStorageSupport = true;
let storage = "";

document.querySelector(".menu__link--login").addEventListener("click", (e) => {
  e.preventDefault();
  modalForm.classList.toggle("modal--show");

  try {
    storage = localStorage.getItem("username");
    inputLogin.value = storage;
  } catch (error) {
    isLocalStorage = false;
  }

  storage === null || storage === ""
    ? inputLogin.focus()
    : inputPassword.focus();
});

// exit modal by button
modalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modalForm.classList.toggle("modal--show");
  modalForm.classList.remove("modal--error");
});

// exit modal by "esc"
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    e.preventDefault();
    if (modalForm.classList.contains("modal--show")) {
      modalForm.classList.remove("modal--show");
    }
    modalForm.classList.remove("modal--error");
  }
});

// click on button "Enter"
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  modalForm.classList.remove("modal--error");
  modalForm.offsetWidth = modalForm.offsetWidth;
  if (!inputLogin.value.trim() || !inputPassword.value) {
    modalForm.classList.add("modal--error");
    !inputLogin.value.trim() ? inputLogin.focus() : inputPassword.focus();
  }
  if (isStorageSupport && inputLogin.value.trim()) {
    localStorage.setItem("username", inputLogin.value);
  }
});
