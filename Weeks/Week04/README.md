<h1 align="center">Week 4</h1>

# Week challenges (Wednesday) 💻

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

# Week challenges (Thursday) 💻


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
