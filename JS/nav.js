// JavaScript to handle interactive menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    const subMenu = item.querySelector(".sub-menu");
    const menuLink = item.querySelector(".menu-link");

    if (subMenu) {
      menuLink.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = subMenu.style.height && subMenu.style.height !== "0px";
        subMenu.style.height = isOpen ? "0px" : `${subMenu.scrollHeight}px`;
        subMenu.style.padding = isOpen ? "0" : "0.5rem";
      });
    }
  });
});
