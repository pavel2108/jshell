const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

const inputChange = (event) => {
    const size = event.currentTarget.value;

    span.style.fontSize = size + 'px';    
} 

input.addEventListener('input', inputChange);