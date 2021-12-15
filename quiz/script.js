'use strict';


let point = 0;

let answer;

answer = prompt('Сколько тебе лет?', ' ');

if (answer == 36) {
   alert('Верно');
   point += 1;
} else {
   alert('Неправильно');
}

answer = prompt('Тебя зовут Эрмек', ' ');
if (answer == 'да') {
   alert('Верно');
   point += 1;
} else {
   alert('Неправильно');
}

console.log(point);