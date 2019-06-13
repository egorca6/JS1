/*var password = prompt("ВВедите Ваш пароль");
var repeatPassword = prompt("Повторите Ваш пароль");
if (password === repeatPassword) {
  alert("Пароль Сохранен");
} else {
  alert("Пароль не совпадает");
}
*/

/*var password = prompt("ВВедите Ваш пароль");
var repeatPassword = prompt("Повторите Ваш пароль");
switch (repeatPassword) {
  case password:
    alert("Пароль Сохранен");
    break;
  default:
    alert("Неправильный пароль");
}
*/
// if - esle switch
/*var password = prompt("ВВедите произвольное число");
if (password === "NaN") {
  alert("Вы ввели не NaN");
  password = +prompt("Пожалуйста введите число");
}
if (isNaN(password)) {
  alert("Вы ввели не число");
  password = +prompt("Введите наконец число");
}
switch (
  password < 0 // или через If
) {
  case true:
    alert("Вы ввели отрицательное число");
    break;
  case false:
    alert("Вы ввели положиьельное число");
    break;
  default:
    alert("Что-то пошло не так");
}
*/
// Циклы While (выражение) {блок кода}
                     // do { код} while - редко используют Очень 
// for (инициализация; проверка; инкремент){ код}
// for (переменная in объект){}
// for (var i=0; i<10; i++) { 
   // if (i===5) {        break    } } и сontinue;

   // вывести четные цифры от 0 до 10
   /*
for (var i = 0; i < 10; i++) {
  if (i % 2 !==0) {
    console.log(i);
  }
}
*/

// Запросить строку пройти по строке и посчитать количество буквы а
var message = prompt("Введите произвольную строку");
    Len = message.length;
    counter = 0;
for (var i = 0; i < Len+1; i++) {
  if (message[i] === "а") {
    counter++;
  }
}
alert(counter);