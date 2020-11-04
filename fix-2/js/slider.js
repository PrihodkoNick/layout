var sliderToggleFirst = document.querySelector(".btn-first-slide");
var sliderToggleSecond = document.querySelector(".btn-second-slide");
var sliderToggleThird = document.querySelector(".btn-third-slide");

var slideFirst = document.querySelector(".first-slide");
var slideSecond = document.querySelector(".second-slide");
var slideThird = document.querySelector(".third-slide");

sliderToggleFirst.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!sliderToggleFirst.classList.contains("slider-controls-active")) {
    sliderToggleFirst.classList.add("slider-controls-active");
    sliderToggleSecond.classList.remove("slider-controls-active");
    sliderToggleThird.classList.remove("slider-controls-active");

    slideFirst.classList.add("slide-active");
    slideFirst.classList.remove("slide-hide");
    slideSecond.classList.remove("slide-active");
    slideThird.classList.remove("slide-active");
  }
});

sliderToggleSecond.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!sliderToggleSecond.classList.contains("slider-controls-active")) {
    sliderToggleFirst.classList.remove("slider-controls-active");
    sliderToggleSecond.classList.add("slider-controls-active");
    sliderToggleThird.classList.remove("slider-controls-active");

    slideFirst.classList.remove("slide-active");
    slideSecond.classList.add("slide-active");
    slideSecond.classList.remove("slide-hide");
    slideThird.classList.remove("slide-active");
  }
});

sliderToggleThird.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!sliderToggleThird.classList.contains("slider-controls-active")) {
    sliderToggleFirst.classList.remove("slider-controls-active");
    sliderToggleSecond.classList.remove("slider-controls-active");
    sliderToggleThird.classList.add("slider-controls-active");

    slideFirst.classList.remove("slide-active");
    slideSecond.classList.remove("slide-active");
    slideThird.classList.add("slide-active");
    slideThird.classList.remove("slide-hide");
  }
});
