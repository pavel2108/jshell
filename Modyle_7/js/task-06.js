const input = document.querySelector('#validation-input');

const inputValid = () => {
    const lenValue = input.value.trim().length;

    lenValue === Number(input.dataset.length) ? input.classList.replace('invalid', 'valid') : input.classList.add('valid', 'invalid');    
}

input.addEventListener('blur', inputValid);