const ADMIN_PASSWORD = '123';
let message;

const pass = prompt('Введите пароль')
console.log(pass);

if (pass === null) {
    message = 'Отменено пользователем!';
} else if (pass === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);