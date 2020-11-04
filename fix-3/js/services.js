var buttonDelivery = document.querySelector("#delivery");
var buttonGuaranty = document.querySelector("#guaranty");
var buttonCredit = document.querySelector("#credit");

var servicesDelivery = document.querySelector(".services__delivery");
var servicesGuaranty = document.querySelector(".services__guaranty");
var servicesCredit = document.querySelector(".services__credit");

var linkDeliveryHeader = document.querySelector("#header-delivery");
var linkGuarantyHeader = document.querySelector("#header-guaranty");

var linkDeliveryFooter = document.querySelector("#footer-delivery");
var linkGuarantyFooter = document.querySelector("#footer-guaranty");
var linkCreditFooter = document.querySelector("#footer-credit");

buttonDelivery.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (!buttonDelivery.classList.contains("button--active")) {
    buttonDelivery.classList.add("button--active");
    buttonGuaranty.classList.remove("button--active");
    buttonCredit.classList.remove("button--active");

    servicesDelivery.classList.remove("visually-hidden");
    servicesGuaranty.classList.add("visually-hidden");
    servicesCredit.classList.add("visually-hidden");
  }
});

buttonGuaranty.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (!buttonGuaranty.classList.contains("button--active")) {
    buttonDelivery.classList.remove("button--active");
    buttonGuaranty.classList.add("button--active");
    buttonCredit.classList.remove("button--active");

    servicesDelivery.classList.add("visually-hidden");
    servicesGuaranty.classList.remove("visually-hidden");
    servicesCredit.classList.add("visually-hidden");
  }
});

buttonCredit.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (!buttonCredit.classList.contains("button--active")) {
    buttonDelivery.classList.remove("button--active");
    buttonGuaranty.classList.remove("button--active");
    buttonCredit.classList.add("button--active");

    servicesDelivery.classList.add("visually-hidden");
    servicesGuaranty.classList.add("visually-hidden");
    servicesCredit.classList.remove("visually-hidden");
  }
});

// header
linkDeliveryHeader.addEventListener("click", function(evt) {
  buttonDelivery.classList.add("button--active");
  buttonGuaranty.classList.remove("button--active");
  buttonCredit.classList.remove("button--active");

  servicesDelivery.classList.remove("visually-hidden");
  servicesGuaranty.classList.add("visually-hidden");
  servicesCredit.classList.add("visually-hidden");
});

linkGuarantyHeader.addEventListener("click", function(evt) {
  buttonDelivery.classList.remove("button--active");
  buttonGuaranty.classList.add("button--active");
  buttonCredit.classList.remove("button--active");

  servicesDelivery.classList.add("visually-hidden");
  servicesGuaranty.classList.remove("visually-hidden");
  servicesCredit.classList.add("visually-hidden");
});

// footer
linkDeliveryFooter.addEventListener("click", function(evt) {
  buttonDelivery.classList.add("button--active");
  buttonGuaranty.classList.remove("button--active");
  buttonCredit.classList.remove("button--active");

  servicesDelivery.classList.remove("visually-hidden");
  servicesGuaranty.classList.add("visually-hidden");
  servicesCredit.classList.add("visually-hidden");
});

linkGuarantyFooter.addEventListener("click", function(evt) {
  buttonDelivery.classList.remove("button--active");
  buttonGuaranty.classList.add("button--active");
  buttonCredit.classList.remove("button--active");

  servicesDelivery.classList.add("visually-hidden");
  servicesGuaranty.classList.remove("visually-hidden");
  servicesCredit.classList.add("visually-hidden");
});

linkCreditFooter.addEventListener("click", function(evt) {
  buttonDelivery.classList.remove("button--active");
  buttonGuaranty.classList.remove("button--active");
  buttonCredit.classList.add("button--active");

  servicesDelivery.classList.add("visually-hidden");
  servicesGuaranty.classList.add("visually-hidden");
  servicesCredit.classList.remove("visually-hidden");
});
