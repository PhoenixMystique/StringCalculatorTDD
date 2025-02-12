class StringCalculator {
    
    // Made the method static so that we can call it without creating an instance of the class
   static  add(rawString) {
        try{
            if (!rawString) {
                return 0;
            }
            if (typeof rawString !== 'string') {
               return  "Invalid input type";
            }
            const numbersArray = rawString.split(',');
            let sum = 0;
            for (let i = 0; i < numbersArray.length; i++) {
              sum += parseInt(numbersArray[i], 10);
            }
            return sum;
        }
        catch(err){
            return"An error occurred:", err;
        }

    }
    
  }
module.exports = StringCalculator;