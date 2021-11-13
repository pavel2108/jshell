let input = document.querySelector('input');
const rndBtn = document.querySelector('button[data-action="render"]');
const dstBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

const random = () => Math.floor(Math.random() * 256);

const createBoxes = (amount) => {    
    let fragment = new DocumentFragment();

    for (let i = 0; i < amount; i++) {
        let size = 30 + i * 10;    

        const div = document.createElement('div');

        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(div);        
    }

    boxes.appendChild(fragment);
}

const deleteBoxes = () => boxes.innerHTML = '';

rndBtn.addEventListener('click', () => createBoxes(input.value));

dstBtn.addEventListener('click', deleteBoxes);