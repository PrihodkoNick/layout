var sliderToggleFirst = document.querySelector("#slider-toggle-1");
var sliderToggleSecond = document.querySelector("#slider-toggle-2");
var sliderToggleThird = document.querySelector("#slider-toggle-3");

var slideFirst = document.querySelector("#slide-1");
var slideSecond = document.querySelector("#slide-2");
var slideThird = document.querySelector("#slide-3");

sliderToggleFirst.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!sliderToggleFirst.classList.contains("slider__toggle--active")) {
    sliderToggleFirst.classList.add("slider__toggle--active");
    sliderToggleSecond.classList.remove("slider__toggle--active");
    sliderToggleThird.classList.remove("slider__toggle--active");

    slideFirst.classList.remove("visually-hidden");
    slideSecond.classList.add("visually-hidden");
    slideThird.classList.add("visually-hidden");
  }
});

sliderToggleSecond.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!sliderToggleSecond.classList.contains("slider__toggle--active")) {
    sliderToggleFirst.classList.remove("slider__toggle--active");
    sliderToggleSecond.classList.add("slider__toggle--active");
    sliderToggleThird.classList.remove("slider__toggle--active");

    slideFirst.classList.add("visually-hidden");
    slideSecond.classList.remove("visually-hidden");
    slideThird.classList.add("visually-hidden");
  }
});

sliderToggleThird.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!sliderToggleThird.classList.contains("slider__toggle--active")) {
    sliderToggleFirst.classList.remove("slider__toggle--active");
    sliderToggleSecond.classList.remove("slider__toggle--active");
    sliderToggleThird.classList.add("slider__toggle--active");

    slideFirst.classList.add("visually-hidden");
    slideSecond.classList.add("visually-hidden");
    slideThird.classList.remove("visually-hidden");
  }
});
