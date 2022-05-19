<h1 align="center">Week 3</h1>

# Week challenges (Monday) 💻

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


# Week challenges (Tuesday) 💻


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

# Week challenges (Wednesday) 💻


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

# Week challenges (Thursday) 💻


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



