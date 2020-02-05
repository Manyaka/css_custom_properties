'use strict';

let box = document.querySelector('[data-selector="box"]');
let boxStyle = getComputedStyle(box);
let boxMainColor = boxStyle.getPropertyValue('--box-main-color');  //get value

let header = document.querySelector('[data-selector="main-header"]');
header.style.setProperty('--header-bg', boxMainColor); // set value

//document.documentElement.style.setProperty('--primary-color', 'var(--secondary-color)');

//CSSStyleDeclaration API
