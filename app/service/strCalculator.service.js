class StringCalculator {
    
    // Made the method static so that we can call it without creating an instance of the class
   static  add(rawString) {
            if (!rawString) {
                return 0;
            }
            if (typeof rawString !== 'string') {
              throw new Error('Invalid input type');
            }
            //Inital Delimiter without including custom
            let delimiter = /[,\n]/;
        
            if (rawString.startsWith('//')) {
              const delEndIndex = rawString.indexOf('\n');
              const customDelimiter = rawString.substring(2, delEndIndex);
              delimiter = new RegExp(`[${customDelimiter},\n]`);
              rawString = rawString.substring(delEndIndex + 1);
            }

            const numbersArray = rawString.split(delimiter);
            // if -0 is there the parse will convert it into 0.
            const numbers = numbersArray.map(rawNumber => parseInt(rawNumber, 10));
            const negativeNumbers = numbers.filter(item => item < 0);
            
            if (negativeNumbers.length > 0) {
              throw new Error(`Negative numbers not allowed ${negativeNumbers.join(',')}`);
            }
            return numbers.reduce((sum, num) => sum + num, 0);
        }
    
  }
module.exports = StringCalculator;