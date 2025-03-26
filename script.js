document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");

  if (banner) {
    banner.style.width = `${window.innerWidth}px`;
    banner.style.height = `${window.innerHeight}px`;

    setTimeout(() => {
      banner.style.opacity = "0";
      banner.addEventListener(
        "transitionend",
        () => {
          banner.style.display = "none";
        },
        { once: true }
      );
    }, 2000);
  }
});
