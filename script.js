"use strict";

const btnShare = document.querySelector(".btn-share");
const shareActions = document.querySelector(".share-actions");

btnShare.addEventListener("click", () => {
  btnShare.classList.toggle("active");
});
