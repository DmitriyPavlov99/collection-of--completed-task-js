// Создаем массив со словами
let words = [
  'ауди',
  'мерседес',
  'бмв',
  'форд',
  'мазда',
  'киа',
  'шкода',
  'ниссан',
  'лексус',
  'сузуки',
  'тойота',
  'субару',
  'тесла',
  'порш',
];
let btn = document.querySelector('#start');
let letters = document.querySelector('#letters');
btn.addEventListener('click', start);
function start() {
  let word = words[Math.floor(Math.random() * words.length)];
  // Создаем итоговый массив
  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  let remainingLetters = word.length;
  // Игровой цикл
  let counterAttempts = 25;
  while (remainingLetters > 0 && counterAttempts > 0) {
    // Показываем состояние игры
   
    alert(answerArray.join(' '));
    alert(`У вас осталось ${counterAttempts} попытки`);
    // Запрашиваем вариант ответа
    let guess = prompt(
      'Угадайте букву, или нажмите Отмена для выхода из игры.'
    );
    if (guess === null) {
      // Выходим из игрового цикла
      break;
    } else if (guess.length !== 1) {
      alert('Пожалуйста, введите одиночную букву.');
      counterAttempts--;
    } else {
      counterAttempts--;
      guess = guess.toLowerCase();
      // Обновляем состояние игры
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === '_') {
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }
    // Конец игрового цикла
  }

  // Отображаем ответ и поздравляем игрока
  alert(answerArray.join(' '));
  if (counterAttempts > 0) {
    alert('Игра закончена.Победа! Слово было ' + word);
  } else {
    alert('Можно было лучше! Было загадано слово ' + word);
  }
}
// Выбираем случайное слово
