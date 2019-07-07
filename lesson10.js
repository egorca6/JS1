// f(1)(2)(3)...(n) = сумма вызовов; !!!!!!!!!!!! 
// function sum(a) {
//   let counter = a;
//   function c(b) {
//     counter += b;
//     return c;
//   }
//   c.toString = function() {
//     return counter;
//   };
//   return c;
// }
// console.log(sum(15)(5)(2)(2)(1));
      /*                 
                              Дикскриптры
                              const d = {d:2};
    Object.getOwnPropertyDescriptor(d, 'd')
    {value: 2, writable: true, enumerable: true, configurable: true}
configurable: true
enumerable: true
value: 2
writable: true
__proto__: Object

*/
 
// Object.defineProperty(d, 'a', { // поменять сво-во в объекту d переменной а
//     configurable: true,
//     enumerable: false;
//     writable: false;
// })
//            Object.freeze(o1); 
//             .seal - запрещает добавлять в объект новые св-ва
            
//             .preventExtensions - запрещает расширять объект, менять и удалять можно

// Object.defineProperty(d, 'a', {
//    get: function() { -когда получаем вызываем
    // return 'hello'
// },
//    set: function() { - выполняетя когда изменяем(записываем)
//     return 'hello'
// },
// })
         