class StringCalculator {
    
    // Made the method static so that we can call it without creating an instance of the class
   static  add(rawString) {
        // Check if the input is empty
        if (!rawString) {
            return 0;
        }
        const numbersArray = rawString.split(',');
        let sum = 0;
        for (let i = 0; i < numbersArray.length; i++) {
          sum += parseInt(numbersArray[i], 10);
        }
        return sum;
    }
    
  }
module.exports = StringCalculator;