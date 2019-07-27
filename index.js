const root = document.getElementById('root');

const divWrapper = document.createElement('div');
const input = document.createElement('input');
const input1 = document.createElement('input');
const h1 = document.createElement('h1');
const divBtnWrapper = document.createElement('div');
const btnSave = document.createElement('button');
const btnCansel = document.createElement('button');
btnSave.textContent = 'Save'; // почему не .value ??? // btnSave.innerHTML = 'Hello';
btnCansel.textContent = 'Cansel'; //btnCansel.appendChild(document.createTextNode('Egor'))
h1.innerText = 'Введите пароль';

document.body.style.backgroundColor = 'green';
divWrapper.className = 'wrapper';
divBtnWrapper.className = 'button-wrapper';
btnSave.className = 'btn-save';
btnCansel.className = 'btn-cansel';
input1.setAttribute('type' , 'color')
input1.setAttribute('value' , '#e66465')
// btnCansel.setAttribute('button' , 'Cansel');
divWrapper.appendChild(h1);
divWrapper.appendChild(input);
divWrapper.appendChild(input1);
divWrapper.appendChild(divBtnWrapper);
divBtnWrapper.appendChild(btnSave);
divBtnWrapper.appendChild(btnCansel);
root.appendChild(divWrapper);
// root.insertAdjacentElement
// const defaultColor = document.body.style.backgroundColor;
// defaultColor = ' ';
function handleSave(e) {
   document.body.style.backgroundColor =  input1.value;
   const textForUser = document.createElement('h2');
   textForUser.innerText = 'Цвет фона был установлен ' + input1.value;
   divWrapper.appendChild(textForUser); 
   const elem1 = document.querySelector("h3");
   elem1.remove();
}

function handleReset(e) {
  document.body.style.backgroundColor = 'green';
  const elem = document.querySelector("h2");
  elem.remove();
  const textForUser1 = document.createElement('h3');
  textForUser1.innerText = 'Цвет фона - стандартный ';
  divWrapper.appendChild(textForUser1); 
    // document.body.style.backgroundColor = defaultColor;
}

btnSave.addEventListener('click', handleSave);
btnCansel.addEventListener('click', handleReset);


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