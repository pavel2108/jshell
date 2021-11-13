const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

//--* Вариант 1 *--//
const inputChange = (event) => {
    const str = event.currentTarget.value;
    str.trim() !== '' ? (span.innerText = str.trim()) : span.innerText = 'безымянный';
} 

input.addEventListener('input', inputChange);

//--* Вариант 2 *--//
// input.oninput = () => input.value.trim() !== '' ? (span.innerText = input.value.trim()) : span.innerText = 'шлепок майонезный';