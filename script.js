document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");

  if (banner) {
    banner.style.width = `${window.innerWidth}px`;
    banner.style.height = `${window.innerHeight}px`;

    setTimeout(() => {
      banner.style.opacity = "0";
      setTimeout(() => {
        banner.style.display = "none";
      }, 1000);
    }, 3000);
  }
});
