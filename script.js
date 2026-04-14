const shareBtn = document.getElementById("share-btn");
const shareMobile = document.getElementById("share-mobile");

const isMobile = window.matchMedia("(max-width: 767px)");

shareBtn.addEventListener("click", function (e) {
  if (isMobile.matches) {
    shareMobile.style.display = "block";
  }
  e.stopPropagation();
});

window.addEventListener("click", function (e) {
  if (
    shareMobile.style.display === "block" &&
    !shareMobile.contains(e.target)
  ) {
    shareMobile.style.display = "none";
  }
});
