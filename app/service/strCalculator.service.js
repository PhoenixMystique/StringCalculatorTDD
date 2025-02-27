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
            let isMulitply=false
            if (rawString.startsWith('//')) {
              const delEndIndex = rawString.indexOf('\n');
              const customDelimiter = rawString.substring(2, delEndIndex);
              if(customDelimiter==="*"){
                isMulitply=true;
              }
              delimiter = new RegExp(`[${customDelimiter},\n]`);
              rawString = rawString.substring(delEndIndex + 1);
            }

            let numbersArray = rawString.split(delimiter);
            numbersArray= numbersArray.filter(str => str.trim() !== '');
            // if -0 is there the parse will convert it into 0.
            const numbers = numbersArray.map(rawNumber => parseInt(rawNumber, 10));
            const negativeNumbers = numbers.filter(item => item < 0);
            
            if (negativeNumbers.length > 0) {
              throw new Error(`Negative numbers not allowed ${negativeNumbers.join(',')}`);
            }
            return isMulitply?numbers.reduce((sum, num) => sum * num, 1): numbers.reduce((sum, num) => sum + num, 0);
        }
    
  }
module.exports = StringCalculator;