let input;
const numbers = [];
let total = 0;

  for (let input = prompt('Введите число'); input !== null; input = prompt('Введите следующее число')) {
    if (Number.isNaN(Number(input)) === true) {
      alert('Было введено не число, попробуйте еще раз');
      continue;   
    }
   
    numbers.push(input);
   }  

   if (numbers.length !== 0) {
       for (const numb of numbers) {
        total += Number(numb);        
       }
       alert(`Общая сумма чисел равна ${total}`);    
   } else {alert(`Общая сумма чисел равна ${total} потому что ты, дурак, ничего не вводил!`);} 