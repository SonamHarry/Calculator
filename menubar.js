function tabClick(menubar) {
  let menu1 = document.getElementById("menu1");
  let menu2 = document.getElementById("menu2");
  let menu3 = document.getElementById("menu3");
  let x = document.getElementById("content1");
  let y = document.getElementById("content2");
  let z = document.getElementById("content3");

  menu1.setAttribute("tabindex", "-1");
  menu2.setAttribute("tabindex", "-1");
  menu3.setAttribute("tabindex", "-1");
  // menu1.setAttribute("aria-expanded", "false");
  menu2.setAttribute("aria-expanded", "false");
  menu3.setAttribute("aria-expanded", "false");
  // x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";

  if (menubar === 1) {
    // x.style.display = "block";
    // menu1.setAttribute("aria-expanded", "true");
    menu1.setAttribute("tabindex", "0");
    menu1.focus();
  } else if (menubar === 2) {
    y.style.display = "block";
    menu2.setAttribute("aria-expanded", "true");
    menu2.setAttribute("tabindex", "0");
    menu2.focus();
  } else if (menubar === 3) {
    z.style.display = "block";
    menu3.setAttribute("aria-expanded", "true");
    menu3.setAttribute("tabindex", "0");
    menu3.focus();
  }
}
const menu = document.getElementById("menu");

menu.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") {
    const nextMenuItem = e.target.parentElement.nextElementSibling;
    if (nextMenuItem) {
      const anchor = nextMenuItem.querySelector("a");
      if (anchor) {
        anchor.focus();
      }
    }
  } else if (e.key === "ArrowLeft") {
    const prevMenuItem = e.target.parentElement.previousElementSibling;
    if (prevMenuItem) {
      const anchor = prevMenuItem.querySelector("a");
      if (anchor) {
        anchor.focus();
      }
    }
  } else if (e.key === "Enter" || e.key === " ") {
    e.target.click();
    Overview.focus();
    Apply.focus();
  }
  else if (e.key === "ArrowDown") {
    const currentMenuItem = e.target.parentElement;
    const submenu = currentMenuItem.querySelector(".about-us") || currentMenuItem.querySelector(".contact");
    if (submenu) {
      submenu.style.display = "block";
      submenu.setAttribute("aria-expanded", "true");
      submenu.setAttribute("tabindex", "0");
      submenu.querySelector("a").focus();
    }
  }
  else if (e.key === "Escape") {
    // e.target.click();
    e.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.focus();
    document.getElementById('content2').style.display = 'none';
    menu2.setAttribute('aria-expanded', 'false');
    document.getElementById('content3').style.display = 'none';
    menu3.setAttribute('aria-expanded', 'false');
    parentElement.querySelector('a').focus();

  }

});
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");


content2.addEventListener("keydown", function (e) {
  const currentOption = e.target.parentElement;
  if (e.key === "ArrowUp") {
    const previousElement = currentOption.previousElementSibling;
    if (previousElement) {
      previousElement.querySelector('a').focus();
      currentOption.setAttribute("aria-expanded", "true");
      currentOption.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-expanded", "false");
      currentOption.setAttribute("tabindex", "-1");
    } else {
      const lastElement = currentOption.parentElement.lastElementChild;
      lastElement.querySelector('a').focus();
      currentOption.setAttribute("aria-expanded", "true");
      currentOption.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-expanded", "false");
      currentOption.setAttribute("tabindex", "-1");
    }
  } else if (e.key === "ArrowDown") {
    const nextElement = currentOption.nextElementSibling;
    if (nextElement) {
      nextElement.querySelector('a').focus();
      currentOption.setAttribute("aria-expanded", "true");
      currentOption.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-expanded", "false");
      currentOption.setAttribute("tabindex", "-1");
    } else {
      const firstElement = currentOption.parentElement.firstElementChild;
      firstElement.querySelector('a').focus();
      currentOption.setAttribute("aria-expanded", "true");
      currentOption.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-expanded", "false");
      currentOption.setAttribute("tabindex", "-1");
    }
  } else if (e.key === "ArrowRight") {
    content2.style.display = 'none';
    menu2.setAttribute('aria-expanded', 'false');
    menu3.focus();

  }

});

content3.addEventListener("keydown", function (e) {
  const currentOption = e.target.parentElement;
  if (e.key === "ArrowUp") {
    const previousElement = currentOption.previousElementSibling;
    if (previousElement) {
      previousElement.querySelector('a').focus();
      currentOption.setAttribute("aria-expanded", "true");
      currentOption.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-expanded", "false");
      currentOption.setAttribute("tabindex", "-1");
    } else {
      const lastElement = currentOption.parentElement.lastElementChild;
      lastElement.querySelector('a').focus();
      currentOption.setAttribute("aria-expanded", "true");
      currentOption.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-expanded", "false");
      currentOption.setAttribute("tabindex", "-1");

    }
  } else if (e.key === "ArrowDown") {
    const nextElement = currentOption.nextElementSibling;
    if (nextElement) {
      nextElement.querySelector('a').focus();
      currentOption.setAttribute("aria-expanded", "true");
      currentOption.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-expanded", "false");
      currentOption.setAttribute("tabindex", "-1");
    } else {
      const firstElement = currentOption.parentElement.firstElementChild;
      firstElement.querySelector('a').focus();
      currentOption.setAttribute("aria-expanded", "true");
      currentOption.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-expanded", "false");
      currentOption.setAttribute("tabindex", "-1");
    }
  } else if (e.key === "ArrowLeft") {
    content3.style.display = 'none';
    menu3.setAttribute('aria-expanded', 'false');
    menu2.focus();
  }
});

const homeLink = document.querySelector(".home a");

homeLink.addEventListener("focus", () => {
  const aboutUsMenu = document.querySelector(".about-us");
  const admissionsMenu = document.querySelector(".contact");

  if (aboutUsMenu) {
    aboutUsMenu.style.display = "none";
    aboutUsMenu.setAttribute("aria-expanded", "false");
    aboutUsMenu.setAttribute("tabindex", "-1");
  }

  if (admissionsMenu) {
    admissionsMenu.style.display = "none";
    admissionsMenu.setAttribute("aria-expanded", "false");
    admissionsMenu.setAttribute("tabindex", "-1");
  }
});