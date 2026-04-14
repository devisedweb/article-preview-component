const shareBtn = document.getElementById("share-btn");
const hideShare = document.getElementById("hide-share-btn");
const shareMobile = document.getElementById("share-mobile");
const shareTabDesk = document.getElementById("share-tab-desk");

const isMobile = window.matchMedia("(max-width: 767px)");

shareBtn.addEventListener("click", function (e) {
  if (isMobile.matches) {
    if (shareMobile.style.display === "block") {
      shareMobile.style.display = "none";
    } else {
      shareMobile.style.display = "block";
    }
  } else {
    if (shareTabDesk.style.display === "block") {
      shareTabDesk.style.display = "none";
    } else {
      shareTabDesk.style.display = "block";
    }
  }
  e.stopPropagation();
});

hideShare.addEventListener("click", function () {
  if (shareMobile.style.display === "block") {
    shareMobile.style.display = "none";
  }
});

window.addEventListener("click", function (e) {
  if (
    (shareMobile.style.display === "block" &&
      !shareMobile.contains(e.target)) ||
    (shareTabDesk.style.display === "block" && !shareTabDesk.contains(e.target))
  ) {
    shareMobile.style.display = "none";
    shareTabDesk.style.display = "none";
  }
});
