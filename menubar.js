// Tutorial services
function togglemenu(menu) {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("tabindex", "-1");
  } else {
    menu.style.display = "block";
    menu.setAttribute("aria-expanded", "true");
    menu.setAttribute("tabindex", "0");
    menu.querySelector("a").focus();
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
    // menu4.focus();

    // menu5.focus();
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
  }
  else if (e.key === "ArrowRight") {
   toggleSubmenu(content4);
  
    // content2.style.display = 'none';
    // menu2.setAttribute('aria-expanded', 'false');
    // menu3.focus();
  }
}
);
  

  

//    else if (e.key === "ArrowRight") {
//     toggleSubmenu(content4);
//     // content2.style.display = 'none';
//     // menu2.setAttribute('aria-expanded', 'false');
//     // menu3.focus();
//   }
// });

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
  }
  // } else if (e.key === "ArrowLeft") {
    else if (e.key === "ArrowRight") {
      toggleSubmenu(content5);
      const firstSubmenuItem = content5.querySelector("a");
    firstSubmenuItem.focus();
    // content3.style.display = 'none';
    // menu3.setAttribute('aria-expanded', 'false');
    // menu2.focus();
  }
});


const content4 = document.getElementById("content4");
const content5 = document.getElementById("content5");

content4.addEventListener("keydown", function (e) {
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
    // Show the submenu (HTML) and set focus on the first submenu item
    toggleSubmenu(content4);
    const firstSubmenuItem = content4.querySelector("a");
    firstSubmenuItem.focus();
  } else if (e.key === "ArrowLeft") {
    // Hide the submenu (HTML) and set focus back to the "Tutorials" menuitem (menu2)
    content4.style.display = 'none';
    menu4.setAttribute('aria-expanded', 'false');
    menu4.focus();
  }
});

content5.addEventListener("keydown", function (e) {
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
    // Show the submenu (Quizzes) and set focus on the first submenu item
    toggleSubmenu(content5);
    const firstSubmenuItem = content5.querySelector("a");
    firstSubmenuItem.focus();
  } else if (e.key === "ArrowLeft") {
    // Hide the submenu (Quizzes) and set focus back to the "Services" menuitem (menu3)
    content5.style.display = 'none';
    menu5.setAttribute('aria-expanded', 'false');
    menu5.focus();
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

// HTML Quizzes
function toggleSubmenu(submenu) {
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
    submenu.setAttribute("aria-expanded", "false");
    submenu.setAttribute("tabindex", "-1");
  } else {
    submenu.style.display = "block";
    submenu.setAttribute("aria-expanded", "true");
    submenu.setAttribute("tabindex", "0");
    submenu.querySelector("a").focus();
  }
}

