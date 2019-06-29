/* Объекты
o.name
person['age'] - обращение к объекту.
o.sayHello();
o['sayHello']();

this создается в момент вызова функции; - зарезервированное ключевое слово,  ссылается на объект, в рамках контекста(объекта)
если не в рамках объекта, то сразу на window
const o = {
    getThis : function(){  метод или просто getThis()
        // this === 0
        function getThat(){
            // this === 
            return this;
        }
        getThat();
    },
}
o.getThis();

Функция конструктор let o = new Object; слово new;
return в конструкторе не нужен; конструкторы с большой буквы; нужен для создание объекта.
new Function\ new Number\ new Array\

7lessons
prototype есть только у конструкторов, функциях. _proto_ ссылка на тележку prototype, а у нее есть сво-во constructor
рекурсия это (для любой функции при вызове создается lexical enviremant - в нем хранятся аргументы, переменные scope, this, функции)
 у функции и _proto_  и prorotype/ у объекта только _proto_;
*/

// function f (a) {
//     if (a>10) return; 
//      f(++a);
//     };
//     f(1);

//     function Person(name){
//         this.name;
//         this.getName = function() {
//             console.log(this.name)   // если добавить 'My name is' +
//         }
//     }
//     Person.prototype.getName = function() {  
//         console.log(this.name) 

//     const o1 = new Person('Ivan');
//     const o3 = new Person('Sasha');

//     const o4 = new o3._proto_.constructor() == function Person(name) {this.name = name} == new Person('Sasha');
// Object.prototype.toString - переопределим оригинальный toString;
// имя фамилию возраст пол и создать метод getClientInfo()- вывести  конструктур который запрашивает и вызовом  client.getClientInfo

function CreateClient(name, sureName, age, gender){
    this.name = prompt('Введите Ваше Имя');
    this.sureName = prompt('Введите Ваше  Фамилию');
    this.age = +prompt('Введите свой возраст');
    this.gender = prompt('Введите свой пол');
}
CreateClient.prototype.getClientInfo = function() {
    alert('Client: ' + this.name + ' ' + this.sureName + this.age );   
}
CreateClient.prototype.checkAge = function() {
    if (this.age < 18) {
        alert ('Forbidden');
    } else alert('Access');
      
}
CreateClient.prototype.setAge = function(newAge){
    this.age = newAge; 
}
const client1 = new CreateClient();
const client2 = new CreateClient();
const client3 = new CreateClient();

client1.getClientInfo();
client1.checkAge();
client1.setAge(age);