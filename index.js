'use strict'
console.log("funguju");

// ................4.úkol...............

let yourTurn = 'circle';

const boardFieldsElm = document.querySelectorAll('.board__field');
const whoPlaysElm = document.querySelector('.kdoHrajeImg');


const boardFieldSelect = (event) => {
  if (yourTurn === 'circle') {
    event.target.classList.add('board__field--circle');
    whoPlaysElm.src = 'cross.svg';
    event.target.disabled = true;
    yourTurn = 'cross';

  if (isWinningMove(event.target)) {
    setTimeout(() => {
      let confirmation = confirm('Vyhrál hráč s kolečkem. Chcete hrát znovu?');
      if (confirmation === true) {
        location.reload();
      }
    }, 300);
  }

  } else {
    event.target.classList.add('board__field--cross');
    whoPlaysElm.src = 'circle.svg';
    event.target.disabled = true;
    yourTurn = 'circle';

  if (isWinningMove(event.target)) {
    setTimeout(() => {
      let confirmation = confirm('Vyhrál hráč s křížkem. Chcete hrát znovu?');
      if (confirmation === true) {
        location.reload();
      }
    }, 300);
  }
  }
}

for (let i = 0; i < boardFieldsElm.length; i ++) {
  boardFieldsElm[i].addEventListener('click', boardFieldSelect);
}

  // if (isWinningMove(event.target)) {
  //   setTimeout(() => {
  //     if (yourTurn === 'circle') {
  //       confirm('Vyhrává hráč s křížkem. Spustit novou hru?');
  //       location.reload();
  //     } else {
  //       confirm('Vyhrává hráč s kolečkem. Spustit novou hru?');
  //       location.reload();
  //     }
  //   }, 300)
  // }



// ................5.úkol...............

const getSymbol = (field) => {
	if (field.classList.contains('board__field--cross')) {
		return 'cross'
	} else if (field.classList.contains('board__field--circle')) {
		return 'circle'
	}
  
}

const boardSize = 10;
const fields = document.querySelectorAll('.board__field');

const getField = (row, column) => fields[row * boardSize + column];

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < boardFieldsElm.length && field !== fields[fieldIndex]) {
		fieldIndex++;
	}
  return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	};

};

