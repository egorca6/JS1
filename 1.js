// BOM - браузерная объектная модель
//     navigator(объект) - объект браузера (window.navigator) вещь кторая помогает работать с браузером
//     history - видит историю посещения цепочки сайтов
//     Notification - 
// DOM - объект для наших тегов\все теги в HTML представлен в ввиде объектов (есть также CSSOM)
// CSSOM в приоритете, потом когда видит script,  DOM обрабатывает его после CSSOM
// console.dir(document.head);

           // LE = {
//     arguments
//     variables
//     functions
//     [scope]
//     this
// // }
//            This!!!!
// сами теги - елементами, ноды -все (текст пробелы, теги, комментарии)
// почитать(
// предпроцессоры less, scss
// gulp, webpack)
// // placeholder вместо value
// document.querySelector();
// document.querySelectorAll();
// getElementById();
// document.body.style.backgroundColor
const body = document.querySelector('body');
// const w = body.style.backgroundColor = 'lightgreen';

// setTimeout(function() {
//     body.style.backgroundColor = '#62665a';
// }, 2000);

const submit = document.querySelector('[type="submit"]');
const value = document.querySelector('[value]');
getElementsByName
value.style.color = 'white';
submit.style.backgroundColor = 'black';