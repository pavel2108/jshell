const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = null;
let message = null;

const countDroid = prompt('Сколько дроидов Вы желаете приобрести?')
console.log(countDroid);

if (countDroid === null) {
    message = 'Отменено пользователем!';
} else {
    totalPrice = pricePerDroid * countDroid;
if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} else {
    message = `'Вы купили ${countDroid} дроидов, на счету осталось ${credits-totalPrice} кредитов.'`;
}
} 

alert(message);