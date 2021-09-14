const findLongestWord = function(string) {
   let maxWord = '';
   const arr = string.split(' ');

   for (const word of arr) {
     if (word.length > maxWord.length) {
        maxWord = word;
     }  
   }      

return maxWord;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'
  
  