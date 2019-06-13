// let t = prompt('Посчитаем Ваши а');
// let result = 1;

// o = {
//     name : 'Ivan'  свойство-поле name
//     getName:  function(){ метод - функция в объекте
// return this.name;


//     sum(a)(b) =  (a+b)

// function sum(a){
//     return function (b) {
//         return a + b;
//     }

// }
// alert(sum(-10)(2));

let sum = (a) => (b) => a + b;
alert(sum(-10)(2));