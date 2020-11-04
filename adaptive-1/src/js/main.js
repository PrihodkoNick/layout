// mobile menu
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu__toggle");

menuToggle.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("menu--opened");
});

document.querySelector(".menu__list").addEventListener("click", (e) => {
  configureMenu(e);
});

function configureMenu(e) {
  document
    .querySelector(".menu__item--active")
    .classList.remove("menu__item--active");

  e.target.closest(".menu__item").classList.add("menu__item--active");
  menu.classList.toggle("menu--opened");
}

// advantages
const advantagesList = document.querySelector(".advantages__list");
const advantagesToggles = document.querySelector(".advantages__toggles");

function setAdvantagesActive(e) {
  document
    .querySelector(".advantages__toggle--active")
    .classList.remove("advantages__toggle--active");
  e.target.classList.add("advantages__toggle--active");
}

// click on advantages__toggles
advantagesToggles.addEventListener("click", (e) => {
  if (e.target.classList.contains("advantages__toggle")) {
    setAdvantagesActive(e);

    // find index
    let index = Array.from(advantagesToggles.children).findIndex((item) =>
      item.classList.contains("advantages__toggle--active")
    );

    // set visibility
    Array.from(advantagesList.children).forEach((item) => {
      item.classList.add("visually-hidden");
    });
    advantagesList.children[index].classList.remove("visually-hidden");
  }
});

// resize window
window.addEventListener("resize", function (event) {
  if (event.target.innerWidth > 690) {
    Array.from(advantagesList.children).forEach((item) => {
      item.classList.remove("visually-hidden");
    });
    document
      .querySelector(".footer__phone")
      .classList.remove("btn", "btn--gray", "btn--phone");
  } else {
    document
      .querySelector(".footer__phone")
      .classList.add("btn", "btn--gray", "btn--phone");
  }
});

// reviews
const reviewsList = document.querySelector(".reviews__list");
const reviewsToggles = document.querySelector(".reviews__toggles");

function setReviewsActive(e) {
  document
    .querySelector(".reviews__toggle--active")
    .classList.remove("reviews__toggle--active");
  e.target.classList.add("reviews__toggle--active");
}

// click on reviews__toggles
reviewsToggles.addEventListener("click", (e) => {
  if (e.target.classList.contains("reviews__toggle")) {
    setReviewsActive(e);

    // find index
    let index = Array.from(reviewsToggles.children).findIndex((item) =>
      item.classList.contains("reviews__toggle--active")
    );

    // set visibility
    Array.from(reviewsList.children).forEach((item) => {
      item.classList.add("visually-hidden");
    });
    reviewsList.children[index].classList.remove("visually-hidden");
  }
});

// click on reviews buttons
// prev button
document.querySelector("#reviews-btn-prev").addEventListener("click", (evt) => {
  toggleSlide("prev");
});

// next button
document.querySelector("#reviews-btn-next").addEventListener("click", (evt) => {
  toggleSlide("next");
});

function toggleSlide(direction) {
  // find index
  let index = Array.from(reviewsList.children).findIndex(
    (item) => !item.classList.contains("visually-hidden")
  );

  // set visibility
  Array.from(reviewsList.children).forEach((item) => {
    item.classList.add("visually-hidden");
  });
  document
    .querySelector(".reviews__toggle--active")
    .classList.remove("reviews__toggle--active");

  if (direction === "next") {
    if (index === reviewsList.children.length - 1) {
      reviewsList.firstElementChild.classList.remove("visually-hidden");
      reviewsToggles.firstElementChild.classList.add("reviews__toggle--active");
    } else {
      reviewsList.children[index + 1].classList.remove("visually-hidden");
      reviewsToggles.children[index + 1].classList.add(
        "reviews__toggle--active"
      );
    }
  } else {
    if (index === 0) {
      reviewsList.lastElementChild.classList.remove("visually-hidden");
      reviewsToggles.lastElementChild.classList.add("reviews__toggle--active");
    } else {
      reviewsList.children[index - 1].classList.remove("visually-hidden");
      reviewsToggles.children[index - 1].classList.add(
        "reviews__toggle--active"
      );
    }
  }
}
