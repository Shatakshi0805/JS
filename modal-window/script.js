"use strict";

const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const showModalBtn = document.querySelectorAll(".show-modal");

const openModalBox = function () {
    modal.classList.remove("hidden"); //show the hidden modal 
    overlay.classList.remove("hidden");//show the blur background
};

const closeModalBox = function () {
    modal.classList.add("hidden");//hide the displayed modal
    overlay.classList.add("hidden");//hide the blur background
}

for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener("click", openModalBox);

    closeModalBtn.addEventListener("click", closeModalBox);

    overlay.addEventListener("click", closeModalBox);
}

document.addEventListener('keydown', function (event) {
    // console.log(e.key);
  
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });