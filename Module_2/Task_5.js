const checkForSpam = function(message) {

    let result = null;
    const arr = message.split(' ');

    for (const word of arr) {
const searchWord = ['spam', 'sale'];

if (searchWord.includes(word.toLowerCase())) {
    result = true;
    break;
  }

result = false;
    } 

    return result;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
   console.log(checkForSpam('Latest technology news')); // false
  
   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
   console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true