const shareBtn = document.getElementById("share-btn");
const shareMobile = document.getElementById("share-mobile");

const isMobile = window.matchMedia("(max-width: 767px)");

shareBtn.addEventListener("click", function () {
  if (isMobile.matches) {
    shareMobile.style.display = "block";
  }
});
