'use strict';

let box = document.querySelector('[data-selector="box"]');
let boxStyle = getComputedStyle(box);
let boxMainColor = boxStyle.getPropertyValue('--box-main-color');

let header = document.querySelector('[data-selector="main-header"]');
header.style.setProperty('--header-bg', boxMainColor);
