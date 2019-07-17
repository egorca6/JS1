const root = document.getElementById('root');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const p2 = document.createElement('p');

//root.innerHTML =  не импользуется, просто пишется код HTML

h1.innerText = 'Hello Javascript';
p.innerText = 'I love';
p2.innerText = 'YO';
const styles = {
    height: '250px',
    width: '250px',
    background: 'black',
    color: '#fff',
    textAlign: 'center'  //// A с большой буквы
}

Object.assign(div.style, styles)


p.style.cssText = 'font-size: 1.2em; color:yellow';

div.appendChild(h1); // один параметр принимает
div.appendChild(p);
div.insertBefore(p2, p);
root.appendChild(div);


div.insertBefore(); // два параметра принимает, 1- что 2- перед кем


{/* <div style="height: 250px">
<h1>Hello Javascript</h1>
<p>I love</p>
</div> */}