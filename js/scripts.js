
const popupLink = document.getElementById("popup-link");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");

popupLink.addEventListener("click", function() {
  popup.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});