"use strict";

var hamburger = document.querySelector("#hamburger");
var menu = document.querySelector("#menu");
var moon = document.querySelector("#moon");
var body = document.querySelector("body");
var hLinks = document.querySelectorAll("#hLink");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});
hLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});
moon.addEventListener("click", function () {
  body.classList.toggle("dark");
});