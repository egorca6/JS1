//XMLHttpRequest

// const xhr = new XMLHttpRequest();
// xhr.open('GET' , 'https://jsonplaceholder.typicode.com/photos/3' )
// xhr.onload = function(e) {
//   console.log('Response', xhr.response);
//   console.log('Status', xhr.status);
//   console.log('StatusText', xhr.statusText);
// }

// xhr.onerror - function(e){
//     console.log('Error',e);
// }

// xhr.send();
fetch('https://jsonplaceholder.typicode.com/photos/3', {method: 'GET'})
.then(resp => resp.json())
.then(resp => {
    const root =  document.querySelector('#root');
    const img = document.createElement('img');
   img.src  = resp.url;
   root.appendChild(img);
})
console.log('FOOTER');

