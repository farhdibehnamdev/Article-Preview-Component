function toggleSharePopup(isShow) {
  const selectedSharePopup = document.querySelector(".share-popup");
  isShow
    ? selectedSharePopup.classList.add("active")
    : selectedSharePopup.classList.remove("active");
}

const selectedShareButton = document.querySelector(".btn-share-outline");
selectedShareButton.addEventListener("mouseenter", (e) => {
  toggleSharePopup(true);
});

selectedShareButton.addEventListener("mouseleave", (e) => {
  toggleSharePopup(false);
});
