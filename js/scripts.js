'use strict' ;

const btn = document.getElementById('btn1');

console.log(btn);

btn.addEventListener('click', () => {
    const elemSpan = document.querySelector('span');
    elemSpan.innerText = 'Adam Młynarczyk';
    alert('kliknięto przycisk');
});