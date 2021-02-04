'use strict';


function guessTheNumber(num) {

  function areYouLucky(num, attempts) {
    console.log(num);
    let n = prompt('Угадай целое число от 1 до 100 :)');
    if (parseInt(n) > num) {
      attempts--;
      if (attempts === 0) {
        confirm('Попытки закончились, хотите сыграть еще?');
      } else {
        alert('Загаданное число меньше, осталось попыток ' + attempts);
        areYouLucky(num, attempts);
      }
    } else if (parseInt(n) < num) {
      attempts--;
      if (attempts === 0) {
        if (confirm('Попытки закончились, хотите сыграть еще?')) {
          areYouLucky(Math.floor(Math.random() * 101),10);
        }
      } else {
        alert('Загаданное число больше, осталось попыток ' + attempts);
        areYouLucky(num, attempts);
      }
    } else if (n.trim() === '' || isNaN(n)) {
      alert('Введи число!');
      areYouLucky(num, attempts);
    } else if (n === null) {
      confirm('Игра окончена');
    } else if (Number(n) === num) {
      alert('Поздравляю, Вы выиграли! <3');
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        areYouLucky(Math.floor(Math.random() * 101),10);
      }
    }
  }

  areYouLucky(num, 10);
}

guessTheNumber(Math.floor(Math.random() * 101));

