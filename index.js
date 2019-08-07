const root = document.getElementById('root');

const mainH1 = document.createElement('h1');
const registerH1 = document.createElement('h1');
const loginH1 = document.createElement('h1');

const divWrapper = document.createElement('div');
const formRegistration = document.createElement('form');
const header = document.createElement('div');
const formLogin = document.createElement('form');
const formButtonReg = document.createElement('form');

const loginInput = document.createElement('input');
const passInput = document.createElement('input');
const passInputConfirm = document.createElement('input');
loginInput.setAttribute('placeholder' , 'writeLogin');
passInput.setAttribute('placeholder' , 'writePassword');
passInputConfirm.setAttribute('placeholder' , 'repeatePassword');

const mainButton = document.createElement('button');
const loginButton = document.createElement('button');
const registerButton = document.createElement('button');
const saveButton = document.createElement('button');
const resetButton = document.createElement('button');
const enterButton = document.createElement('button');
resetButton.setAttribute('type' , 'reset');

divWrapper.className = 'divWrapper';
mainButton.className = 'button';
loginButton.className = 'button';
registerButton.className = 'button1';


// header.appendChild(mainH1);
// header.appendChild(mainButton);
// header.appendChild(loginButton);

divWrapper.appendChild(header);
formButtonReg.appendChild(registerButton);
root.appendChild(mainH1);
header.appendChild(mainButton);
header.appendChild(loginButton);
root.appendChild(header);
root.appendChild(formButtonReg);


mainH1.textContent = 'Main';
mainButton.textContent = 'Main';
loginButton.textContent = 'Login';
registerButton.textContent = 'Register';
saveButton.textContent = 'Save';
resetButton.textContent = 'Reset';

function registrationUser(){
 
  let del1 = document.getElementsByTagName('form')[0];
  del1.remove();
  formRegistration.appendChild(loginInput);
  formRegistration.appendChild(passInput);
  formRegistration.appendChild(passInputConfirm);
  formRegistration.appendChild(saveButton);
  formRegistration.appendChild(resetButton);
  root.appendChild(formRegistration);
}

function returnMain(){

  let del1 = document.getElementsByTagName('form')[0];
  del1.remove();
  formButtonReg.appendChild(registerButton);
  root.appendChild(formButtonReg);
}

function loginUser(){
  let del1 = document.getElementsByTagName('form')[0];
  del1.remove();
  formLogin.appendChild(loginInput);
  formLogin.appendChild(passInput);
  formLogin.appendChild(saveButton);
  root.appendChild(formLogin);  
}
  
 
  


registerButton.addEventListener('click', registrationUser);
mainButton.addEventListener('click', returnMain);
loginButton.addEventListener('click', loginUser);


callback/ callback Hell/ promise

// oninput на повторе пароля
//http://programmerbook.ru/html/input/type/password/
// в локал сторидж user - key . value [{login : 1 , password 2, name: 'Ivan'}] for ич
// localStorage.setItem(key, value);







// const root = document.getElementById('root');

// const divWrapper = document.createElement('div');
// divWrapper.className = 'divWrapper';
// const blockColor = document.createElement('div');
// blockColor.className = 'blockColor';
// const div1 = document.createElement('div');
// div1.className = 'div1';
// const div2 = document.createElement('div');
// div2.className = 'div2';
// const div3 = document.createElement('div');
// div3.className = 'div3';
// const div4 = document.createElement('div');
// div4.className = 'div4';
// const button = document.createElement('button');

// button.textContent = 'changeColor'; 

// div1.innerHTML = 'red';
// div2.innerHTML = 'crimson';
// div3.innerHTML = 'deeppink';
// div4.innerHTML = 'plum';
// div1.style.backgroundColor = 'red';
// div2.style.backgroundColor = 'crimson';
// div3.style.backgroundColor = 'deeppink';
// div4.style.backgroundColor = 'blue';
// // blockColor.style.backgroundColor = 'green';
// // div1.setAttribute('backgroundColor' , '#e66465')
// // document.body.style.backgroundColor = 'green';
// blockColor.appendChild(div1);
// blockColor.appendChild(div2);
// blockColor.appendChild(div3);
// blockColor.appendChild(div4);
// divWrapper.appendChild(blockColor);
// divWrapper.appendChild(button);
// root.appendChild(divWrapper);

// const backGR = document.body.style.backgroundColor;

// function backGR1(){
//   document.body.style.backgroundColor = div1.style.backgroundColor
// }

// function backGR2(){
//   document.body.style.backgroundColor = div2.style.backgroundColor
// }

// function backGR3(){
//   document.body.style.backgroundColor = div3.style.backgroundColor
// }

// function backGR4(){
//   document.body.style.backgroundColor = div4.style.backgroundColor
// }

// const colors = [
//   'deeppink',
//   'plum',
//   'salmon',
//   'indigo',
//   'slateblue',
//   'beige',
//   'lightgreen'
// ]
// // function randomColor(colors) {
// //   return colors[Math.floor(Math.random() * colors.length)];
// // }
// function randomColor(colors) {
// var randomItem = colors[Math.floor(Math.random() * colors.length)];
// div1 = randomColor(colors);
// div2 = randomColor(colors);
// div3 = randomColor(colors);
// div4 = randomColor(colors);
// }
// // button.addEventListener('click' , function);
// button.addEventListener('click', randomColor);
// div1.addEventListener('mouseover', backGR1);
// div2.addEventListener('mouseover', backGR2);
// div3.addEventListener('mouseover', backGR3);
// div4.addEventListener('mouseover', backGR4);



// const input = document.createElement('input');
// const input1 = document.createElement('input');
// const h1 = document.createElement('h1');
// const divBtnWrapper = document.createElement('div');
// const btnSave = document.createElement('button');
// const btnCansel = document.createElement('button');
// btnSave.textContent = 'Save'; // почему не .value ??? // btnSave.innerHTML = 'Hello';
// btnCansel.textContent = 'Cansel'; //btnCansel.appendChild(document.createTextNode('Egor'))
// h1.innerText = 'Введите пароль';

// document.body.style.backgroundColor = 'green';
// divWrapper.className = 'wrapper';

// divBtnWrapper.className = 'button-wrapper';
// btnSave.className = 'btn-save';
// btnCansel.className = 'btn-cansel';
// input1.setAttribute('type' , 'color')
// input1.setAttribute('value' , '#e66465')
// // btnCansel.setAttribute('button' , 'Cansel');
// divWrapper.appendChild(h1);
// divWrapper.appendChild(input);
// divWrapper.appendChild(input1);
// divWrapper.appendChild(divBtnWrapper);
// divBtnWrapper.appendChild(btnSave);
// divBtnWrapper.appendChild(btnCansel);
// root.appendChild(divWrapper);
// root.insertAdjacentElement
// const defaultColor = document.body.style.backgroundColor;
// defaultColor = ' ';
// function handleSave(e) {
//    document.body.style.backgroundColor =  input1.value;
//    const textForUser = document.createElement('h2');
//    textForUser.className = 'userMess';
//    textForUser.innerText = 'Цвет фона был установлен ' + input1.value;
//    root.insertBefore(textForUser, divWrapper); 
//    const elem1 = document.querySelector("h3");
//    elem1.remove();
// }

// function handleReset(e) {
//   document.body.style.backgroundColor = 'green';
//   const elem = document.querySelector("h2");
//   elem.remove();
//   const textForUser1 = document.createElement('h3');
//   textForUser1.innerText = 'Цвет фона - стандартный ';
//   divWrapper.appendChild(textForUser1); //prepend
//     // document.body.style.backgroundColor = defaultColor;
// }

// btnSave.addEventListener('click', handleSave);
// btnCansel.addEventListener('click', handleReset);


// let colorB = getComputedStyle(document.body);

// setTimeout (function() {
//   let userQ = prompt("Какой цвет фона установить");
//   document.body.style.backgroundColor = userQ;
//   const textForUser = document.createElement('h2');
//   textForUser.innerText = 'Цвет фона был установлен ' + userQ;
//   divWrapper.appendChild(textForUser); 
//   setTimeout (function() {
//     document.body.style.backgroundColor = 'white';
//       // defaultCol = 'white';
//       divWrapper.removeChild(divWrapper.lastChild);
// }, 3000);
//   }, 200);

// console.log(colorB.color);





// console.log(colorB);
// alert(colorB);


//classList()- псевдо массив
// p2.classList.add('') - по одному
//btnSave.className = 'btn-save второйКласс';
//classList.remove('class')
// toggle - удалить класс
// 500px divWrapper
// 300px divBtnWrapper

// HTML, body 100%;
//getComputedStyle() - хранится в window
// 1 Узнать какого цвета у нас бекграунд и запомнить его
// 2 запросить у пользователя какой он хочет устанОВИТЬ ЦВЕТ ФОНА
// 3 УСТАНАВЛИВАЕМ ЦВЕТ ФОНА
// 4 через 5 секунд возвращаем дефолтное значение
// 5* Вставить сообщение перед фоном о том что цвет бекграунда поменялся на (тот который был указан пользователем)
// прочитать про this