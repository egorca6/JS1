const root = document.getElementById('root');

const divWrapper = document.createElement('div');
const input = document.createElement('input');
const h1 = document.createElement('h1');
const divBtnWrapper = document.createElement('div');
const btnSave = document.createElement('button');
const btnCansel = document.createElement('button');

h1.innerText = 'Введите пароль';


divWrapper.appendChild(h1);
divWrapper.appendChild(input);
divWrapper.appendChild(divBtnWrapper);
divBtnWrapper.appendChild(btnSave);
divBtnWrapper.appendChild(btnCansel);
root.appendChild(divWrapper);


// p2.classList.add('')

// 500px divWrapper
// 300px divBtnWrapper

// HTML, body 100%;