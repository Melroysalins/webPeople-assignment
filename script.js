let scrollToTopText = document.querySelector(".scroll-to-top");

scrollToTopText.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
});
