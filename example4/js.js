'use strict';
// Auxiliary method. Retrieves and sanitises the value of a custom property.
let getVariable = function(styles, propertyName) {
  return String(styles.getPropertyValue(propertyName)).trim();
};

// Auxiliary method. Sets the value of a custom property at the document level.
let setDocumentVariable = function(propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
};

// Sets the document color scheme to the color scheme of the clicked element.
// This illustrates how it's easy to make a change affecting a large number of
// elements by simply changing a few custom properties.
let chooseDefaultColor = function(evt) {
  // Get the styles for the event target (the clicked button), so we can see
  // what its custom properties are set to.
  let styles = getComputedStyle(evt.target);

  // Get the values for the button's colours...
  let primary = getVariable(styles, '--primary-color');
  let text = getVariable(styles, '--primary-color-text');
  // ... and apply them to the document.
  setDocumentVariable('--primary-color', primary);
  setDocumentVariable('--primary-color-text', text);
};

let buttonsClickHandler = function(evt) {
  chooseDefaultColor(evt);
};

// Initialise page controls.
window.addEventListener('load', function() {
  // Get the styles for the document.
  // This is where we've chosen to store all the global variables we use.
  let styles = getComputedStyle(document.documentElement);

  let quantum = document.querySelector('#quantum');
  let gutter = document.querySelector('#gutter');
  let columns = document.querySelector('#columns');

  // Set up event handlers for buttons.
  let buttons = document.querySelectorAll('.picker-button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonsClickHandler);
  }

  // Retrieve initial custom property values and update controls.
  quantum.value = getVariable(styles, '--spacing-unit').replace('px', '');
  gutter.value = getVariable(styles, '--margins');
  columns.value = getVariable(styles, '--grid-columns');

  // Set up event handlers for having the sliders update the custom properties
  // at the document level.
  quantum.addEventListener('input', function() {
    setDocumentVariable('--spacing-unit', quantum.value + 'px');
  });

  gutter.addEventListener('input', function() {
    setDocumentVariable('--margins', gutter.value);
  });

  columns.addEventListener('input', function() {
    setDocumentVariable('--grid-columns', columns.value);
  });
});
