<h1 align="center">Week 6</h1>

# Week challenges (Monday) 💻


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
  if (wolfIndex == queue.length - 1)  return 'Pls go away and stop eating my sheep';
  return `Oi! Sheep number ${Math.abs(wolfIndex + 1 - queue.length)}! You are about to be eaten by a wolf!`;
}
```


# Week challenges (Tuesday) 💻


## A Rule Of Divisibility By 13
``` typescript
/*
From Wikipedia:

"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)
(For "mod" you can see: https://en.wikipedia.org/wiki/Modulo_operation)

Then the whole pattern repeats. Hence the following method:

Multiply

the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

Example:
What is the remainder when 1234567 is divided by 13?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)
Therefore following the method we get:

7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with the number 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).

Task:
Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48
*/

var matchCounter: number=0;
var tempNumber: number=0;
export function thirt(n: number): number {
  // your code
  const remainders = [1, 10, 9, 12, 3, 4];
  let reversedNumber: string[] = n.toString().split('').reverse();
  let sum:number =0;
  let remaindersCounter=0;
  for(var i=0; i<reversedNumber.length;i++){
    
    if(remaindersCounter<remainders.length) sum+=parseInt(reversedNumber[i])*remainders[remaindersCounter];
    if(remaindersCounter>=remainders.length){
      remaindersCounter=0;
      sum+=parseInt(reversedNumber[i])*remainders[remaindersCounter];
    }
    remaindersCounter++;
  }
  if(tempNumber!=sum){
    tempNumber=sum;
    matchCounter=0;
  }
  if (sum===tempNumber && matchCounter===1){
    tempNumber=0;
    matchCounter=0;
    return sum;
  } 
  if(sum===tempNumber && matchCounter===0)matchCounter++;
  return thirt(sum);
  
}
```

## Playing With Digits
``` typescript
/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

dig_pow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
dig_pow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
dig_pow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
dig_pow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

*/

export class G964 {

  public static digPow = (n: number, p: number) => {
      const totals = n
      .toString()
      .split('')
      .map(Number)
      .reduce((prev: number, curr: number) => prev + Math.pow(curr, p++), 0);
      if (totals % n === 0) return totals / n;
      return -1;
  };    
}
```


## Valid Braces
``` typescript
/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

export function validBraces(braces: string): boolean {
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    //The cycle will replace the matches to verify a perfect number of special characters.
    braces = braces.replace(/\(\)|\[\]|\{\}/g, '');
  }
  /*
  if the length is 0, it means that there is a perfect synchrony of the characters,
  therefore it will return true, otherwise it will return false.
  */
  return braces.length === 0;
}
```


## Tic-Tac-Toe
``` typescript
/*
Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available.

The board is represented as an array with the following indexes:

 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8 
For example, the following board would be represented as

solveTTT(['', '', '', 'O', '', '', 'X', '', ''])

   |   |  
---+---+---
 O |   |  
---+---+---
 X |   |   
Valid outputs for the above input would be 0, 1, 2, 4, 5, 7 or 8.

The following board would only have 1 correct output (2) because it is the only move that connects 3 X's in a row:

solveTTT(['O', '', '', 'O', 'X', '', 'X', 'O', 'X'])
*/

function solveTTT(board) {
  var xwin = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6],];
  for (var temp in xwin)
    if (xwin[temp].map((x) => board[x]).join('') == 'XX')
      return xwin[temp].reduce((x, y) => (board[y] == '' ? x + y : x), 0);
  for (var temp in board) if (board[temp] == '') return +temp;
}
```

## Tic-Tac-Toe-Like Table Generator
``` typescript
/*
Do you have in mind the good old TicTacToe?

Assuming that you get all the data in one array, you put a space around each value, | as a columns separator and multiple - as rows separator, with something like ["O", "X", " ", " ", "X", " ", "X", "O", " "] you should be returning this structure (inclusive of new lines):

 O | X |   
-----------
   | X |   
-----------
 X | O |   
Now, to spice up things a bit, we are going to expand our board well beyond a trivial 3 x 3 square and we will accept rectangles of big sizes, still all as a long linear array.

For example, for "O", "X", " ", " ", "X", " ", "X", "O", " ", "O"] (same as above, just one extra "O") and knowing that the length of each row is 5, you will be returning

 O | X |   |   | X 
-------------------
   | X | O |   | O 
And worry not about missing elements, as the array/list/vector length is always going to be a multiple of the width.
*/
```


# Week challenges (Wednesday) 💻



## Duplicate Encoder
``` typescript
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/
export function duplicateEncode(word: string){
    let result:string="";
    let counter:number=0;
    for(var i=0;i<word.length;i++){
      counter=0;
      for(var j=0;j<word.length;j++){
        if(word[i].toLowerCase()===word[j].toLowerCase()) counter++;
      }
      counter===1 ? result+="(": result+=")";
    }
    return result;
}
```


## Find The Odd Int
``` typescript
/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

export const findOdd = (xs: number[]): number => {
  let theOddNumber:number=-1;
  let tempCounter:number=0;
  for(var i=0;i<xs.length;i++){
    tempCounter=0;
    for(var j=0;j<xs.length;j++){
      if(xs[i]===xs[j]) tempCounter++;
    }
    if (tempCounter%2!=0){
      return xs[i];
    } 
  }
  return theOddNumber;
};
```

## Which Are In?
``` typescript
/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.
*/


export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    return a1
    //Verify if the word of "a1" is a substring of "a2".
      .filter((temp: string) => a2.some((temp2: string) => temp2.includes(temp)))
    // ".sort()" will sort the elements of the array.
      .sort();
  }
}

```


## Sums Of Parts
``` typescript
/*
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
*/

export function partsSums(ls: number[]): number[] {
  let sum = ls.reduce((prev: number, curr: number) => prev + curr, 0);
  let result: number[] = [];
  result.push(sum);
  for (let i = 0; i < ls.length; i++) {
    result.push(result[i] - ls[i]);
  }
  return result;
}
```


## Consecutive Strings
``` typescript
/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

Note
consecutive strings : follow one after another without an interruption
*/

export function longestConsec(strarr: string[], k: number): string {
  let max = '';
  const elementsNumber = strarr.length;
  for (let i = 0; i <= elementsNumber - k && k > 0 && k <= elementsNumber; i++) {
    let newStarrr = strarr.slice(i, i + k).join('');
    max = max.length >= newStarrr.length ? max : newStarrr;
  }
  return max;
}
```

# Week challenges (Thursday) 💻

## Tile

``` typescript

/*
Description:

In the board game Scrabble2, each tile contains a letter, which is used to spell words, and a score, which is used to determine the value of words.

1. Write a definition for a class named Tile that represents Scrabble tiles. The instance variables should be a string named letter and an number named value.
2. Write a constructor that takes parameters named letter and value and initializes the instance variables.
3. Write a method named printTile that prints the instance variables in a reader-friendly format (not the { ... } format way).
4. Don't worry you don't have to check if the letter is no more than one String length.
5. You can use this Main class to test your code.
*/

import { Tile } from './Tile';
export class Main {
  start() {
    const A = new Tile('A', 10);
    A.printTile(); // Example of a reader-friendly format above
    /*
      ==================
        Letter: A
        Value: 10
      ==================
    */
    const W = new Tile('W', '50'); // This should show and error
  }
}
*/

//Solution

export default class Tile{
  letter: string;
  value: number;
  //The constructor of the class
  constructor(letter: string, value: number) {
    this.letter = letter;
    this.value = value;
  }
  
  printTitle(){
  console.log(` Instance Variables:
                **********************
                Letter: ${this.letter}
                Value: ${this.value}
                **********************`);
  }
}


```

## Time
``` typescript
/*
Description:
You have been hired by a brand of digital watches to be able to create the functionality of keeping track of time, for this you have been asked to do the following:

1. Write a definition for the class name Time this class would be use to build a digital clock. This class should have 3 attributes of type number. hour, minute and second.
2. Write a constructor that takes parameters named hour, minute and second and initializes the instance variables.
3. Write a method called getInSeconds that returns a number representing the actual time in the instance represented in seconds.
4. Write a method named printTime that prints the instance variables in a reader-friendly format (not the { ... } format way).

*/


import { Time } from './Time';
export class Main {
  start() {
    const t = new Time(10, 45, 1);
    t.printTime(); // Example of a reader-friendly format above
    /*
      ==================
        Hours: 10
        Minutes: 45
        Seconds: 1
      ==================
    */
    console.log(t.getInSeconds()); // 38701
  }
}


//Solution

export default class Time {
  hour: number;
  minute: number;
  second: number;
  //The constructor of the Time class.
  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }
  // Returns a number representing the actual time in the instance represented in seconds.
  getInSeconds(): number {
    return (this.hour *3600) + (this.minute *60) + this.seconds
  }
  // Prints the instance variables in a reader-friendly format
  printTime() {
    console.log(`
        ********Actual Time********
          Hours: ${this.hour}
          Minutes: ${this.minute}
          Seconds: ${this.second}
        ****************************`);
  }
}
```

## Rational
``` typescript
/*
Description:
A rational number is a number that can be represented as the ratio of two integers. For example, 2/3 is a rational number, and you can think of 7 as a rational number with an implicit 1 in the denominator (7/1). For this assignment, you are going to write a class definition for rational numbers.

1. Create a new class named Rational. A Rational object should have two number instance variables to store the numerator and denominator.
2. Write a constructor for your class that takes two arguments and that uses them to initalize the instance variables.
3. Write a method called printRational that prints the object in some reasonable format.
4. Write a method called invert that inverts the number by swapping the numerator and denominator. This method should modify the instance variables.
5. Write a method called toFloat that converts the rational number to a floating-point number and returns the result. This method is a pure function it does not modify the object.
6. Write method named reduce that reduces a rational number to its lowest terms by finding the greatest common divisor (GCD) of the numerator and denominator and dividing through. This method should modify the instance variables. To calculate the GCD you can search for Euclidian Algorithm: GCD.
*/

import { Rational } from './Rational';
export class Main {
  start() {
    const r1 = new Rational(36, 120);
    r1.printRational(); // 36 / 120
    console.log(r1.toFloat()); // 0.3
    r1.reduce();
    r1.printRational(); // 3 / 10
    r1.invert();
    r1.printRational(); // 10 / 3
    r1.reduce();
    r1.printRational(); // 10 / 3
  }
}


//Solution

export default class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  // Prints the object in some reasonable format.
  printRational() {
    console.log(`
      ${this.numerator}
      ____________________
      ${this.denominator}`);
  }
  // Inverts the number by swapping the numerator and denominator. This method should modify the instance variables.
  invert() {
    [this.numerator, this.denominator] = [this.denominator, this.numerator];
  }
  // Converts the rational number to a floating-point number and returns the result. This method is a pure function it does not modify the object.
  toFloat(): number {
    return this.numerator / this.denominator;
  }
  
  // Euclidian Algorithm: GCD
  gcd(a: number, b: number): number {
    if (b == 0) return n;
    return this.gcd(b, a % b);
  }
  
  
  //Reduces a rational number to its lowest terms by finding the greatest common divisor (GCD) of the numerator and denominator and dividing through. This method
  should modify the instance variables.
  reduce() {
    const gcd = this.gcd(this.numerator, this.denominator);
    this.numerator = this.numerator / gcd;
    this.denominator = this.denominator / gcd;
  }
}

```
