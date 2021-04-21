'use strict'
console.log("funguju");

let naTahu = 'circle';

const hraButtonElm = document.querySelector('.mrizka');
const kdoHrajeElm = document.querySelector('.kdoHrajeImg');

hraButtonElm.addEventListener('click', (event) => {
  if (naTahu === 'circle') {
    event.target.classList.add('mrizka--circle');
    kdoHrajeElm.src = 'circle.svg';
    event.target.disabled = true;
    naTahu = 'cross';

  } else if (naTahu === 'cross') {
    event.target.classList.add('mrizka--cross');
    kdoHrajeElm.src = 'cross.svg';
    event.target.disabled = true;
    naTahu = 'circle';
  }
});