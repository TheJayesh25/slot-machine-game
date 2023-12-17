
// const print = (str) =>{
//     return console.log(str);
// }

const print = str => console.log(str);

const prompt = require('prompt-sync')();

const COLS = 3; // prompt('No of cols: ')
const ROWS = 3; // prompt('No of rows: ')

const depositAmount = () =>{
    while(true){
        const amount = parseFloat(prompt('Enter deposit amount: '));
        if (amount<=0 || isNaN(amount)){                                 // isNaN(variable) returns false when a number and true when anything else
            console.log('\nThe entered amount is invalid!');
        }
        else{
            return amount;
        }
    }
    
}

const noOfLines = () =>{
    while(true){
        const lines = parseFloat(prompt(`Enter number of lives you want to bet on (1-${ROWS}): `));
        // isNaN(variable) returns false when a number and true when anything else
        if (lines<=0 || isNaN(lines) || lines>ROWS){
            console.log('\nPlease enter valid number of lines!');
        }
        else{
            return lines;
        }
    }
    
}

let balance = 0;
const deposit = depositAmount();
// balance += deposit;
// const numberOfLines = noOfLines();
print(deposit);
// print(numberOfLines);
