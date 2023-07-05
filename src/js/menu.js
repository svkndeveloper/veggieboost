(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-memu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.openMenuBtn2.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-hidden");
      refs.menu.classList.toggle("no-scroll");
    }
  })();