(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      closeMenuBtn1: document.querySelector("[data-menu-close1]"),
      closeMenuBtn2: document.querySelector("[data-menu-close2]"),
      closeMenuBtn3: document.querySelector("[data-menu-close3]"),
      closeMenuBtn4: document.querySelector("[data-menu-close4]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn1.addEventListener("click", toggleMenu);
    refs.closeMenuBtn2.addEventListener("click", toggleMenu);
    refs.closeMenuBtn3.addEventListener("click", toggleMenu);
    refs.closeMenuBtn4.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden2");
      document.body.classList.toggle("no-scroll2");
    }
  })();