'use strict'
console.log("funguju");

let naTahu = 'circle';

const hraButton = document.querySelector('.mrizka');

hraButton.addEventListener('click', (event) => {
  if (naTahu === 'circle') {
    event.target.classList.add('mrizka--circle');
  } else if (naTahu === 'cross') {
    event.target.classList.add('mrizka--cross');
  }
});