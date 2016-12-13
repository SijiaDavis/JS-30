var panels = document.querySelectorAll(".panel");

var toggleOpen = function() {
  this.classList.toggle("open");
}

var toggleOpenActive = function(evt) {
  // we need to check the property name of the transitionend event, because multiple transitions are triggered when we click on a panel element. we only want to toggle class for flex event's transitionend.
  if (evt.propertyName.includes('flex')) {
    this.classList.toggle("open-active");
  }
}

// first toggle the open class
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// next toggle the open-active class
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));