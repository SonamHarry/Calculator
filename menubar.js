const menubar = document.querySelector("[role='menubar']");
const menu = document.querySelectorAll("[role='menu']");

//navigation with menubar.
menubar.addEventListener("keydown", function(e) {
  if(e.key === "ArrowRight") {
    const currentFocusedItem = e.target.parentElement;
    let nextFocusableItem = currentFocusedItem.nextElementSibling;
    currentFocusedItem.firstElementChild.tabIndex = "-1";
    if(nextFocusableItem) {
      
      nextFocusableItem.firstElementChild.tabIndex = "0";
      nextFocusableItem.firstElementChild.focus();
    }
    else {
      nextFocusableItem = this.firstElementChild;
      nextFocusableItem.firstElementChild.tabIndex = "0";
      nextFocusableItem.firstElementChild.focus();
    }
    
  }
  else if(e.key === "ArrowLeft") {
    const currentFocusedItem = e.target.parentElement;
    let previousFocusableItem = currentFocusedItem.previousElementSibling;
    currentFocusedItem.firstElementChild.tabIndex = "-1";
    if(previousFocusableItem) {
      previousFocusableItem.firstElementChild.tabIndex = "0";
      previousFocusableItem.firstElementChild.focus();
     
    }
    else {
      previousFocusableItem = this.lastElementChild;
      previousFocusableItem.firstElementChild.tabIndex = "0";
      previousFocusableItem.firstElementChild.focus();
    }
  }
  else if(e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
    const currentFocusedItem = e.target.parentElement;
    if(currentFocusedItem.firstElementChild.ariaHasPopup) {
      currentFocusedItem.firstElementChild.ariaExpanded = true;
      currentFocusedItem.lastElementChild.style.display = "block";
      const firstSubMenuItem = currentFocusedItem.lastElementChild.querySelector("a");
      firstSubMenuItem.tabIndex = "0";
      firstSubMenuItem.focus();
    }
  }
  else if(e.key === "ArrowUp") {
    const currentFocusedItem = e.target.parentElement;
    if(currentFocusedItem.firstElementChild.classList.contains("hasSubMenu")) {
      currentFocusedItem.firstElementChild.ariaExpanded = true;
      currentFocusedItem.lastElementChild.style.display = "block";
      const lastSubMenuItem = currentFocusedItem.lastElementChild.firstElementChild.lastElementChild.firstElementChild;
      lastSubMenuItem.tabIndex = "0";
      lastSubMenuItem.focus();
    }
  }
});

//Navigation with menu and sub menus
menu.forEach((element, index) => {
  element.addEventListener("keydown", function(e) {
    if(e.key === "ArrowDown") {
      const currentFocusedItem = e.target.parentElement;
      let nextFocusableItem = currentFocusedItem.nextElementSibling;
      currentFocusedItem.firstElementChild.tabIndex = "-1";
      if(nextFocusableItem) {
        nextFocusableItem.firstElementChild.tabIndex = "0";
        nextFocusableItem.firstElementChild.focus();
      }
      else {
        nextFocusableItem = this.firstElementChild;
        nextFocusableItem.firstElementChild.tabIndex = "0";
        nextFocusableItem.firstElementChild.focus();
       e.stopPropagation();
      }
    }
    else if(e.key === "ArrowUp") {
      const currentFocusedItem = e.target.parentElement;
      let previousFocusableItem = currentFocusedItem.previousElementSibling;
      currentFocusedItem.firstElementChild.tabIndex = "-1";
      if(previousFocusableItem) {
        previousFocusableItem.firstElementChild.tabIndex = "0";
        previousFocusableItem.firstElementChild.focus();
      }
      else {
        previousFocusableItem = this.lastElementChild;
        previousFocusableItem.firstElementChild.tabIndex = "0";
        previousFocusableItem.firstElementChild.focus();
      
      // e.stopPropagation();
    }
  }
    else if(e.key === "ArrowRight") {
      const currentFocusedItem = e.target.parentElement;
      if(currentFocusedItem.firstElementChild.ariaHasPopup) {
        currentFocusedItem.firstElementChild.ariaExpanded = true;
        currentFocusedItem.lastElementChild.style.display = "block";
        const firstSubMenuItem = currentFocusedItem.lastElementChild.querySelector("a");
        firstSubMenuItem.tabIndex = "0";
        firstSubMenuItem.focus();
         e.stopPropagation();
      }
      else {
      let mainmenu = this.parentElement.parentElement.parentElement;
      mainmenu.ariaExpanded = false;
      mainmenu.focus();
      this.style.display = "none";
       e.preventDefault();
      }
    }
    else if(e.key === "Escape") {
      //alert(this.parentElement.tagName);
      const parentMenuItem = this.parentElement.parentElement.firstElementChild;
      parentMenuItem.ariaExpanded = false;
      parentMenuItem.focus();
      this.style.display = "none";
    }
    else if(e.key === "ArrowLeft"){
      let closesubmenu = this.parentElement.parentElement.firstElementChild;
      closesubmenu .ariaExpanded = false;
      closesubmenu .focus();
      this.style.display = "none";
      e.stopPropagation();
    }
  });
});

