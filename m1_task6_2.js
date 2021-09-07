let total = 0;

do {
  input = prompt('Введите число');
  if (Number.isNaN(Number(input)) === true) {
         alert('Было введено не число, попробуйте еще раз');
         continue;   
       }
  total += Number(input);
} while (input !== null);
  
  alert(`Общая сумма чисел равна ${total}`);