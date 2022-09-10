// Попрактикуйтесь в использовании объектов, выполнив эти
// упражнения.

// #1. Подсчет очков
// Представьте, что вы играете в какую-нибудь игру со своими друзь-
// ями и вам нужно вести счет. Создайте для этого объект и назовите
// его scores. Пусть ключами будут имена ваших друзей, а значе-
// ниями — набранные ими очки (0 или больше). Счет игроков надо
// будет увеличивать по мере того, как они зарабатывают новые
// очки. Как вы будете менять счет игрока, хранящийся в объекте
// scores?

let scores = {
  karim: 0,
  lionel: 2,
  cristiano: 1,
};
scores.karim += 1
console.log(scores); // {karim: 1, lionel:2, cristiano:1}

// #2. Вглубь объектов и массивов
// Пускай у вас есть такой объект:
let myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
"random animal": "Банановая акула"
};
// Как одной строкой JavaScript-кода извлечь из этого объекта
// число 123? Проверьте свое решение, запустив его в консоли.
let num = myCrazyObject["some array"][2].number
console.log(num); // 123