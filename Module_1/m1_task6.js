let total = 0;

for (let input = prompt('Введите число'); input !== null; input = prompt('Введите следующее число')) {
   if (Number.isNaN(Number(input)) === true) {
     alert('Было введено не число, попробуйте еще раз');
     continue;   
   }
  
  total += Number(input);  
  } 
  
  alert(`Общая сумма чисел равна ${total}`);