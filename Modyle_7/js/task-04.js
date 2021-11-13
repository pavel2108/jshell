let counterValue = 0;

const span = document.querySelector('#value');
const dekrBtn = document.querySelector("[data-action='decrement']");
const inkrBtn = document.querySelector("[data-action='increment']");

const decrement = () => {
    counterValue -= 1;

    span.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;

    span.textContent = counterValue;
};

dekrBtn.addEventListener('click', decrement);
inkrBtn.addEventListener('click', increment);