class StringCalculator {
    
    // Made the method static so that we can call it without creating an instance of the class
   static  add(rawString) {
        // Check if the input is empty
        if (!rawString) {
            return 0;
        }
        const numbersArray = rawString.split(',');
        console.log(numbersArray);
    }
    
  }
module.exports = StringCalculator;