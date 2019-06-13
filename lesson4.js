// let za = 1;
// if(true) {
//   console.log(za);
// } 

// let a = +prompt('ВВедите А');
// if (a === 0) {
//     alert('0');
// }
// if (a === 1) {
//     alert('1');
// }
// if (a === NaN) {
//     alert('NaN')
// }

// let a = +prompt('ВВедите А');  Аналог
// console.log(a);
// if (isNaN(a)) {
//   a = 'NaN';
// } 

// if (a == ''){
//     a = 'empty';
// }

// switch (a) {
//   case 0:
//     alert("0");
//     break;
//   case 1:
//     alert("1");
//     break;
//   case 'NaN':
//     alert("Вы ввели не число");
//     break;
//   default : alert('Вы ничего не ввели');
//   break;
// }

// function minMax(a, b, c) {  // Найти минимальное и максмальное значение
// let min = Math.min(a, b, c);
// let max = Math.max(a, b, c);
//  alert('Минимальное значение' + ' ' + min);
// return  alert('Максимальное значение' + ' ' + max);
// } 
// minMax(0, -0, 3);

// возводить число в степень
 
function pow(a, b) {
   let result = 1;
    for (i = 0; i<b; i++){
  result = result * a;
    }
return result;
}
// pow(2, 3);
console.log(pow(2,3));