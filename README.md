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
