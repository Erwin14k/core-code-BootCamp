#### core-code-BootCamp

# Week 1

Welcome to this repository!

## Interpreted And Compiled Programming Languages
Interpreted and compiled programming languaes have many differences, in this space I will mention some of theese.
I think the most important characteristic of the compiled programming languages is that they need to be converted into a machine code, so with this, they trend to be more efficient at execute. 
## Some Examples of Compiled Programming Languages:
- C++
- C
- Go
- Rust

The interpreted programming languages don´t need a machine code to be compiled, they have the peculiarity that run through a program line by line, so this programming languages execute each command.
## Some Examples of Interpreted Programming Languages:
- JavaScript
- Python
- Ruby
- PHP

## Is Java compiled or interpreted, or both?
There is currently a controversy of this topic, because a many people think that java is a compiled language while other people think that is an interpreted language, I think java is a compiled and interpreted  at the same time, we can say that is an hibrid language, because first the source code is compiled into a binary bite-code, this code run on the JVM (Java Virtual Machine) which is usually a software-based interpreter.



## Pseudocode currency converter
Algorithm that will be used to convert dollars (USD) to bitcoin (BTC).
 
 ``` pseudocode
 1. START
  2. SET ActualBitcoinPriceInDollars <---- GET From https://es.investing.com/currencies/usd-btc-converter
  3. SET Dollars <-- GET From User
  4. SET Bitcoins <-- Dollars/ActualBitcoinPriceInDollars
  5. PRINT Bitcoins
 6. END
 ```


## My date of birth in the matrix written in binary?
Powers of two:

 
| Power| Result|
| ----- | ---- |
| 2<sup>0</sup> | 1 |
| 2<sup>1</sup> | 2 |
| 2<sup>2</sup> | 4 |
| 2<sup>3</sup> | 8 |
| 2<sup>4</sup> | 16 |
| 2<sup>5</sup> | 32 |
| 2<sup>6</sup> | 64 |
| 2<sup>7</sup> | 128|
| 2<sup>8</sup> | 256 |
| 2<sup>9</sup> | 512 |
| 2<sup>10</sup> | 1024|
| 2<sup>11</sup> | 2048|
| 2<sup>12</sup> | 4096|
 
 

My year of birth : 2001 `in decimal`

|2<sup>10</sup>|2<sup>9</sup>|2<sup>8</sup>|2<sup>7</sup>|2<sup>6</sup>|2<sup>5</sup>|2<sup>4</sup>|2<sup>3</sup>|2<sup>2</sup>|2<sup>1</sup>|2<sup>0</sup>|
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |---- |---- |
|1 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0  |0| 1|

My year of birth : 11111010001 `in binary`

## Algorithms using MIPS

Program that display my name:
``` assembly
.data
        message_one: .asciiz "Erwin Vásquez"
  .text
        main:
              li $v0, 4
              la $a0, message_one
              syscall
```

Program that display the sum of two numbers given by the user:

``` assembly
  .data
        
        first_number: .asciiz "\nEnter the first number: "
        second_number: .asciiz "\nEnter the second number: "
        sum: .asciiz "The sum of the numbers is: "
        
  .text
        main:
              #The user enters the first number
              li $v0, 4
              la $a0, first_number
              syscall

              li $v0, 5
              syscall
              #Saving the first number
              move $t0, $v0
              #The user enters the second number
              li $v0, 4
              la $a0, second_number
              syscall

              li $v0, 5
              syscall
              #Saving the second number
              move $t1, $v0
              #The sum of the numbers calculation
              add $t2, $t0, $t1
              # Showing The result, but the sum is missing
              li $v0, 4
              la $a0, sum
              syscall
              # Showing the sum result
              li $v0, 1
              move $a0, $t2
              syscall
```
              
## Print special numbers
In this exercise you must use an iterative flow control to be able to print all the even numbers in the range of numbers from 0 to 100. Remember that you should not print each number, you should use a flow control structure to perform the exercise.

Using For:
``` javascript
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i+"' is an even number');
    }else{
        # If you want to see all the odd numbers uncomment the next line.
        //console.log(i+' is an odd number')
    }
}


```

Using While:
``` javascript

var i=0;
while(i<=100){
    if(i%2==0){
        console.log(i+' is an even number');
        i++;
    }else{
        # If you want to see all the odd numbers uncomment the next line.
        //console.log(i+' is an odd number');
        //i++;
    }
}


```

## Bad Code

The code shown below is not working in the right way, as a task you must find the error made by the developer who programmed this code and correct it, for this exercise you must explain what the error is and place the correct code.

Bad code:
``` javascript
var cond = false;

if ((cond = true)) {
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}

```

Solution:

``` javascript

/*the error is in the if condition, since instead of using the logical 
operators of a comparison, a new assignment was being made.
Some solutions for this error would be:
- if(cond==true)
- if (cond)*/

var cond = false;
if ((cond == true)) {
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}

```

## Bad Code 2
You must create the code that follows the following logic, if the given number is 100, take this number as special and show the following message: "This is a special number!", but if the number is less than 1000, multiple of 10 and different from 100, you must show the following message: "This number is almost special". if none of the given conditions are met show the following message: "Just a regular number". Another developer was trying to program the logic, but apparently couldn't, you need to fix the code to work properly.

Bad code:

``` javascript
var n = 100;

if (n == 100) {
  console.log('This is a special number!');
}
if (n < 1000) {
  console.log('');
} else {
  console.log('Just a regular number');
}
if (n % 10 == 0) {
  console.log('This number is multiple of 10');
}
```

solution:
``` javascript

/* The error of the previous code was the mishandling of the 
conditionals, since they were not well structured.*/
var n = 100;

if (n == 100) {
    console.log('This is a special number!');
}else if(n < 1000  && n % 10 == 0){
    console.log('This number is almost special');
}else {
    console.log('Just a regular number');
}


```

# Week 2

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

# Week 3

## Who likes it?

``` javascript
/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
  if(names.length==0){
    return "no one likes this";
  }else if(names.length==1){
    return names[0]+" likes this";
  }else if(names.length==2){
    return names[0]+" and "+names[1]+" like this";
  }else if(names.length==3){
    return names[0]+", "+names[1]+" and "+names[2]+" like this";
  }
  return names[0]+", "+names[1]+" and "+(names.length-2)+" others like this";
}

```

## Bit Counting

``` javascript
/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case.
*/

var countBits = function(n) {
  let binaryResult=n.toString(2);
  let array=binaryResult.split("1");
  return array.length-1;
};
```

## Your order, please

``` javascript

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words) {
  let wordsArray = words.split(' ');
  wordsArray = wordsArray.sort(
    (a, b) => Number(a.replace(/\D/g, '')) - Number(b.replace(/\D/g, ''))
  );
  //Joining all the array with an " " in the middle of each position.
  return wordsArray.join(' ');
}

```

## Simple Pig Latin
``` javascript
/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    let array=str.split(" ");
    let buffer="";
    for(let i=0; i<array.length;i++){
        let tempWord=array[i];
        if(tempWord!="!" && tempWord!="¡" && tempWord!="¿" && tempWord!="?" && tempWord!="." 
            && tempWord!="," && tempWord!=":" && tempWord!=";"){
                buffer+=array[i].slice(1,array[i].length)+tempWord[0]+"ay";
                if(i+1!=array.length){
                    buffer+=" ";
                }
            }else{
                buffer+=tempWord;
            }
    }
    return buffer.toString().trim();
}
  


```

## Counting Duplicates
``` javascript
/*
ount the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  return text
    .toLowerCase()
    .split('')
    .filter((temp, i, array) => {
      return array.indexOf(temp) !== i && array.lastIndexOf(temp) === i;
    }).length;
}


```



## Decode The Morse Code
``` javascript
/*
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
C#: MorseCode.Get(".--") (returns string)
F#: MorseCode.get ".--" (returns string)
Elixir: @morse_codes variable (from use MorseCode.Constants). Ignore the unused variable warning for morse_codes because it's no longer used and kept only for old solutions.
Elm: MorseCodes.get : Dict String String
Haskell: morseCodes ! ".--" (Codes are in a Map String String)
Java: MorseCode.get(".--")
Kotlin: MorseCode[".--"] ?: "" or MorseCode.getOrDefault(".--", "")
Racket: morse-code (a hash table)
Rust: MORSE_CODE
Scala: morseCodes(".--")
Swift: MorseCode[".--"] ?? "" or MorseCode[".--", default: ""]
C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"
NASM: a table of pointers to the morsecodes, and a corresponding list of ascii symbols
All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

Good luck!

After you complete this kata, you may try yourself at Decode the Morse code, advanced.
*/

decodeMorse = function(morseCode){
  return morseCode.split("   ").map(word => word.split(" ") .map(character => MORSE_CODE[character]) .join('')).join(' ') .trim()
}

```

## Valid Parentheses
``` javascript
/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/
function validParentheses(parens) {
  let sentinel = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      console.log("opens");
      sentinel++;
    }
    if (parens[i] === ')'){
      console.log("closes");
      sentinel--;
    }
    if (sentinel < 0) return false;
  }
  console.log(sentinel == 0);
  return sentinel == 0;
}

```

## Convert String To Camel Case
``` javascript
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
function toCamelCase(str){
  return str.replace(/-/g, '_').split('_')
    .map((word, temp) => (temp > 0 ? word.toUpperCase()[0] + word.substr(1) : word)).join('');

}



```

## Unique In Order
``` javascript
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
var uniqueInOrder=function(iterable){
  console.log(iterable);
  let buffer=[];
  let bufferLenght=0;
  for(let i=0; i<iterable.length;i++){
    bufferLenght=buffer.length;
    if(buffer[bufferLenght-1]!=iterable[i]){
      buffer.push(iterable[i]);
    } 
    console.log(buffer[bufferLenght-1]!=iterable[i]);
    
  }
  console.log(buffer);
  return buffer;
}
```
## Fold An Array
``` javascript
/*
In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
*/
function foldArray(array, runs)
{
  //Temp Array
  const tempArray = []
  //All the values
  const part= array.slice();
  //While part length greather than 0, enter this loop.
  while (part.length) tempArray.push(part.pop() + (part.shift() || 0));
  return runs - 1 ? foldArray(tempArray, runs - 1) : tempArray;
}
```

## Encrypt This!
``` javascript

/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/


var encryptThis = function (text) {
  return text.split(' ').map(encryptProcess).join(' ');
};

function encryptProcess(tempWord) {
  //If tempWord only has 1 letter
  if (tempWord.length == 1) return tempWord.charCodeAt();
  //If tempWord only has 2 letters.
  if (tempWord.length == 2) return `${tempWord.charCodeAt(0)}${tempWord[1]}`;
  //Else
  return `${tempWord.charCodeAt(0)}${tempWord[tempWord.length - 1]}${tempWord.slice(2,tempWord.length - 1)}${tempWord[1]}`;
}
```

## Mission Statement

I am Erwin, a systems engineer in process, since I was a child I have entered the world of computing, and I have acquired skills and knowledge that have helped me to face different adversities and challenges on this arduous path.
I have experience in languages like java, python and c++, but lately I have loved web programming, and I have decided to enter this new world with new technologies and give them my own style.

# Week 4

## Simple Validation Of A Username
``` javascript
/*
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

function validateUsr(username) {
  res = /^([a-z]+|\d+|_){4,16}$/.test(username);
  return res;
}
```
## Get Number From String
``` javascript
/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
*/

function getNumberFromString(s) {
  let result=Number(s.replace(/\D/g, ''));
  return result;
  }
```

## String Cleaning
``` javascript
/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/
function stringClean(s){
  //This function return the "s" parameter without digits
  return s.replace(/\d/g, '');
}

```

## Password Validation
``` javascript
/*
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/
function validate(password) {
  //This function validate the "Password" parameter, by testing using this regex.
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

```
# Week 05

## Find The Missing Letter
``` javascript
/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

*/
function findMissingLetter(array)
{
  for (let temp = 0; temp < array.length; temp++) {
    if (array[temp + 1].charCodeAt()!== array[temp].charCodeAt() + 1  ) {
      return String.fromCharCode(array[temp].charCodeAt() + 1);
    }
  }
}

```

## Reverse Or Rotate?
``` javascript
/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".

*/
function revrot(str, sz) {
  if (sz <= 0 || sz >= str.length || str === '') return '';
  let counter = 0;
  let regexUsed = new RegExp(`\\d{${sz}}`, 'g');
  let tempChunks = str.match(regexUsed);
  let chunkList = [];
  let response = tempChunks.map((chunk) => {
    counter = chunk.split('').map((digit) => Math.pow(+digit, 3)).reduce((prev, curr) => prev + curr, 0);chunkList = chunk.split('');
    if (counter % 2 === 0) return chunkList.reverse().join('');
    return chunkList.push(chunkList.shift()), chunkList.join('');
  });
  return response.join('');
}

```
## TypeScript Object Type
``` typescript
export interface User {
    name: string;
    age: number;
    occupation: string;

}

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
```


## TypeScript Unions

``` typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        role: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        occupation: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```

## What's Your Poison?
``` javascript
/*
The Riddle
The King of a small country invites 1000 senators to his annual party. As a tradition, each senator brings the King a bottle of wine. Soon after, the Queen discovers that one of the senators is trying to assassinate the King by giving him a bottle of poisoned wine. Unfortunately, they do not know which senator, nor which bottle of wine is poisoned, and the poison is completely indiscernible.

However, the King has 10 lab rats. He decides to use them as taste testers to determine which bottle of wine contains the poison. The poison when taken has no effect on the rats, until exactly 24 hours later when the infected rats suddenly die. The King needs to determine which bottle of wine is poisoned by tomorrow, so that the festivities can continue as planned.

Hence he only has time for one round of testing, he decides that each rat tastes multiple bottles, according to a certain scheme.

Your Task
You receive an array of integers (0 to 9), each of them is the number of a rat which died after tasting the wine bottles. Return the number of the bottle (1..1000) which is poisoned.

*/
function find(rats) {
  // return number of poisoned bottle
  return rats.reduce((previous, current) => {
    return previous + Math.pow(2, current);
  }, 0);
}


```

## Array.diff
``` javascript
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  return a.filter((e) => b.indexOf(e) === -1);
}
```

# Week 06

## Square(n) Sum
``` typescript
/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

export function squareSum(numbers: number[]): number {
  return numbers.reduce(
    (prev: number, current: number) => prev + Math.pow(current, 2),0);
}
```

## Growth Of A Population
``` typescript
/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/

export class G964 {
    public static nbYear = (p0, percent, aug, p) => {
        // your code
        for (var i = 0; p0 < p; i++) p0 = parseInt(p0 * (1 + percent / 100) + aug);
          return i;
    };
}
```

## Mumbling
``` typescript
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

export function accum(s: string): string {
  return s.toLowerCase().split('').map((char: string, i: number) => `${char.toUpperCase()}${char.repeat(i)}`).join('-');
}
```

## A Wolf In Sheep's Clothing
``` typescript
/*
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/

export function warnTheSheep(queue: string[]): string {
  var wolfIndex = queue.indexOf('wolf');
  if (wolfIndex == queue.length - 1)
    return 'Pls go away and stop eating my sheep';
  return `Oi! Sheep number ${Math.abs(wolfIndex + 1 - queue.length)}! You are about to be eaten by a wolf!`;
}
```

