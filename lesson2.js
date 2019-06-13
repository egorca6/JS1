// ОБЪЕКТЫ
var client1 = {
    name: 'Pasha',
    sureName : 'Ivanov',
    age: 21,
}

var myName = client1.name; // обращение
var my = client1[name]
// console тоже объект console.error(info и т.п.) error обращение к полям
//МАССиВЫ - можно хранить все что хочешь
var array = [1, 2, 3]; // нумерация с нуля
var a = array[2] // 3, обращение только через []
array.length = 10; // можно менять длины мыссива
array[100] = 'Hello';

var string = prompt("Введите произвольную строку");
var amount = prompt(
  "ВВедите количество символов которые нужно вырезать от начала строки"
);
var substringResult = string.slice(0, amount);
alert(substringResult);
/* Это все false
NaN
underfined
0
''
null
false
*/
