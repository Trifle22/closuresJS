'use strict';


function guessTheNumber() {
  let n = prompt('Угадай число от 1 до 100 :)');

  function areYouLucky(num) {
    if (parseInt(n) > num) {
      alert('Загаданное число меньше');
      guessTheNumber();
    } else if (parseInt(n) < num) {
      alert('Загаданное число больше');
      guessTheNumber();
    } else if (n === '' || isNaN(n)) {
      alert('Введи число!');
      guessTheNumber();
    } else if (n === null) {
      confirm('Игра окончена');
    } else if (Number(n) === num) {
      alert('Поздравляю, Вы выиграли! <3');
    }
  }

  areYouLucky(22);
}

guessTheNumber();

