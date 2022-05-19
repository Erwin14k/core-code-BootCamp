<h1 align="center">Week 2</h1>

# Week challenges (Tuesday) 💻

## Multiply

``` javascript
/*
This code does not execute properly. Try to figure out why.
multiply = function (a, b) {
  a * b;
}
*/

multiply = function (a, b) {
  return a * b;
}
```

## ASCII Total

``` javascript
/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/
function uniTotal (string) {
  let asciiCounter=0;
  for(let i=0; i<string.length; i++){
    asciiCounter+=string[i].charCodeAt();
  }
  return asciiCounter;
}

```

## Char From ASCII Value
``` javascript

/*
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
*/

function getChar(c){
  console.log("The ascii char for that value is: "+ String.fromCharCode(c));
  return String.fromCharCode(c);
}

```

## Binary Addition
``` javascript
/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.
*/

function addBinary(a,b) {
  let binarySum=a+b;
  //The  "2"  parameter, is for the binary system.
  return binarySum.toString(2);
}

```


## Student's Final Grade
``` javascript

/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:
100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases.
*/
function finalGrade (exam, projects) {
  let finalGrade;
  if(exam>90 || projects >10){
    finalGrade=100;
  }else if (exam>75 && projects >=5){
    finalGrade=90;
    
  }else if (exam>50 && projects >=2){
    finalGrade=75;
    
  }else{
    finalGrade=0;
  }
  
  return finalGrade;
}

```

# Week challenges (Wednesday) 💻


## Holiday VIII - Duty Free
``` javascript
/*
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.
*/
function dutyFree(normPrice, discount, hol){
  // Math.floor is used to round down the number
  return Math.floor(hol/((discount*normPrice)/100));
}

```


## Twice As Old
``` javascript
/*
Your function takes two arguments:
current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let doubleSonAge=sonYearsOld*2
  let result=Math.abs(doubleSonAge-dadYearsOld)
  if(doubleSonAge>dadYearsOld){
    console.log("The father will be twice as old in "+result+" years");
    return result;
  }
  console.log("The faher was twice son age "+result+" years ago");
  return result;
  
}

```

## Valid Spacing

``` javascript
/*
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true

*/

function validSpacing(s) {
  if(s[0]===" " ||  s[s.length-1]===" "){
    return false;
  }else if(s.length===0){
    return true;
  }else{
    //Spaces separator array
    let array = s.split(" ");
    for (let i=0; i< array.length;i++){
      if (array[i]===""){
        
        return false;
      }
    }
    return true;
    
  }
}


```


## Fake Binary

``` javascript
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
  let fakeBinary="";
  for(let j=0;j<x.length;j++){
    if (parseInt(x[j])>=5){
        fakeBinary+="1";
    }else{
      fakeBinary+="0";
    }
    
  }
  return fakeBinary;

}

```

# Week challenges (Thursday) 💻


## Remove All Exclamation Marks From The End Of Sentence

``` javascript
/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove (string) {  
    let buffer="";
    let tempBuffer="";
    for(let i=0;i<string.length;i++){
        if(string[i]!="¡" && string[i]!="!"){
        buffer+=string[i];
        console.log(buffer+"d");
        }else{
            if(string[i+1]===undefined){
                console.log(buffer+"e");
                return buffer;
            }else if(string[i+1]!="¡" && string[i+1]!="!"){
                buffer+=string[i];
                console.log(buffer+"f");
            }else{
                tempBuffer+=string[i];
                for(let j=i+1;j<string.length;j++){
                    tempBuffer+=string[j];
                }
                buffer+=tempBuffer.replace(/!+$/, '');
                console.log(buffer+"g");
                return buffer;
            }
        }
    }
    return buffer;
}

```

## Remove All Exclamation Marks From The End Of Sentence

``` javascript
/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
*/

function shortcut (string) {
  let buffer="";
  for(let i=0; i<string.length;i++){
    if (string[i]!="a" && string[i]!="e" && string[i]!="i" && string[i]!="o" 
        && string[i]!="u"){
      buffer+=string[i];
    }
  }
  return buffer;
}
```

## Rock Paper Scissors!
``` javascript
/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
  let hardCounter={  paper: 'rock', rock: 'scissors', scissors: 'paper' };
  if(p1===hardCounter[p2]){
    return 'Player 2 won!';
  }else if(p2===hardCounter[p1]){
    return 'Player 1 won!';
  }
  return "Draw!";
}

```

## Persistent Bugger
``` javascript
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

function persistence(num) {
    let times=0;
    while(num>=10){
        console.log("hola");
        let result=1;
        let digits = num.toString().split('');
        for (let i=0; i<digits.length;i++){
            result*= parseInt(digits[i]);
        }
        console.log(result)
        times++;
        num=result;
    }
    return times;
}
```
