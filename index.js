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
const loginInput1 = document.createElement('input');
const passInput1 = document.createElement('input');
const passInputConfirm = document.createElement('input');
loginInput.setAttribute('id' , 'login');
passInput.setAttribute('id' , 'pass');
loginInput1.setAttribute('id' , 'login1');
passInput1.setAttribute('id' , 'pass1');
passInputConfirm.setAttribute('id' , 'passConfirm');
loginInput.setAttribute('placeholder' , 'writeLogin');
passInput.setAttribute('placeholder' , 'writePassword');
passInputConfirm.setAttribute('placeholder' , 'repeatePassword');

const mainButton = document.createElement('button');
const loginButton = document.createElement('button');
const registerButton = document.createElement('button');
const saveButton = document.createElement('button');
const saveButton1 = document.createElement('button');
const resetButton = document.createElement('button');
const enterButton = document.createElement('button');

resetButton.setAttribute('type' , 'reset');
saveButton.setAttribute('type' , 'button');
saveButton1.setAttribute('type' , 'button');
saveButton1.setAttribute('id' , 'button1');

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
saveButton1.textContent = 'Save';

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
  formLogin.appendChild(loginInput1);
  formLogin.appendChild(passInput1);
  formLogin.appendChild(saveButton1);
  root.appendChild(formLogin);  
}
  
const Users=[];

function validateUser()
{
  let userName = document.getElementById('login');
  let userPassword = document.getElementById('pass');
  let userPasswordRepeat = document.getElementById('passConfirm');

  if (!userName.value || !userPassword.value || !userPasswordRepeat.value)
  {
    // userName.style.border = '2px solid red';
    const noUser = document.createElement('h1');
    noUser.textContent = 'Введите Логин и пароль';
    noUser.style.border = '2px solid red';
    root.appendChild(noUser);
    setTimeout (function() 
    {
      userName.style.border = '';
      noUser.remove();
      }, 2000);
    return false;
 
  }
  return true;
}



function sendUsers()
{
  let userName = document.getElementById('login').value;
  let userPassword1 = document.getElementById('pass');
  let userPassword = document.getElementById('pass').value;
  let userPasswordRepeat = document.getElementById('passConfirm').value;
 if (userPassword === userPasswordRepeat)
   {
    const mess = document.createElement('h1');
    mess.textContent = 'Вы зарегистрировались';
    mess.style.border = '2px solid red';
    root.appendChild(mess);
    // userPassword1.setAttribute('value' , '2w');
    setTimeout (function() 
    {
      mess.style.border = '';
      mess.remove();
      }, 2000);
    localStorage.setItem(userName, userPassword);
  }
  else {validateUser()}
}

function loginUsers()
{
  let userName1 = document.getElementById('login1').value;
  let userPassword1 = document.getElementById('pass1');
  for(let i=0; i<localStorage.length; i++) 
  {
    let key = localStorage.key(i);
    if (userName1 === key);
    {console.log('Добро пожаловать' +''+ key + '' + ''+ userName1);}
  }

  //  if (userName1.value == !key);
  //  {alert('Нельзя')}
   
}
// логинишься когда, логин--> становится логаут  -> когда закрываешь браузер, и открываешь остаешься залогиненым.
// && userPassword1.value == {localStorage.getItem(key)}
// let x = localStorage.getItem("mytime");
saveButton1.addEventListener('click', loginUsers);
saveButton.addEventListener('click', sendUsers);
registerButton.addEventListener('click', registrationUser);
mainButton.addEventListener('click', returnMain);
loginButton.addEventListener('click', loginUser);
