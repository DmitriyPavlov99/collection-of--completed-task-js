// Напишите цикл for, который печатает степени тройки, не превышающие
// 10 000 (программа должна выводить 3, 9, 27 и т. д.)
// Перепишите это задание, вместо for использовав цикл while.
// (Подсказка: установите начальное значение перед входом в цикл.)

//Решение с for
for (var x = 3; x < 10000; x = x * 3) {
  console.log(x);
}

//Решение с while
let x = 3;
while (x < 10000) {
  x = x * 3;
  console.log(x);
}
