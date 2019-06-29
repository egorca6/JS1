// Call Apply Bind\ Call передается первым обязательным аргументом в контексте на который ссылается
// function getName(name, age){
//     return console.log(this.name);

// }
// getName(); // underfined
// const = o {
//     name: 'Java',
//     getThis(){
//         //this === o
//         getName.call(this, name, age); // Java, первый параметр не передается в качестве аргумента
//          // .apply(this, [name, age]); массив
//     },
// }
// o.getThis();

// function getName(){
//     return console.log(this.name);
// }
// const ivan = {
//     name: 'Ivan'
// }
// const petia = {
//     name: 'Dima'
// }
// getName.call(ivan);
// getName.call(petia);

// setInterval(function(){ - черз каждые X будет вызывать функцию

// }, 500) - милисекунды(полсекунды) 
// setTimeout - вызовет через X функцию, возвращает ID его
// clearTimeout(ID)

// EventLoop - как работает задержка таймера в браузера, стек - браузер АйпиАй- очередь

// Запросить Имя и через 3 секунды запросить возраст
// После чего умножаем возраст на 2 и через 3 секунды показать Имя и возраст

// let name, age, newAge;
// name = prompt('Введите Ваше Имя');
// setTimeout(function(){
//  age = +prompt('Введите свой возраст');
//     }, 300);
//     let newAge = age * 2;
// setTimeout(function(){
//     alert(name, newAge);
// }, 100);
// alert('as');

let name, age;

function setName() {
    name = prompt('Name: ');
}
function setAge() {
    age = +prompt('Age: ');
}
function print() {
    let s = age * 2;
    console.log()
}
setName();
setTimeout(setAge, 3000);
setTimeout(print, 3000);