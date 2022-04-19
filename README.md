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
