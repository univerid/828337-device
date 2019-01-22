var link = document.querySelector(".write-us-button");

var linkmap = document.querySelector(".contacts-map");

var popup = document.querySelector(".modal-write-us");

var popupmap = document.querySelector(".modal-map");

var close = popup.querySelector(".modal-close");

var closemap = popupmap.querySelector(".modal-close");

var form = popup.querySelector(".write-us-form");

var nameinput = popup.querySelector(".write-us-name");

var email = popup.querySelector(".write-us-email");

var text = popup.querySelector(".write-us-text");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  nameinput.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!nameinput.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (popup.classList.contains("modal-show")) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});


linkmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.add("modal-show");
});

closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (popupmap.classList.contains("modal-show")) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popupmap.classList.remove("modal-show");
    }
  }
});
