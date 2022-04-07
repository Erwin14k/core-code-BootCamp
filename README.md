# core-code-BootCamp

Welcome to this repository!

# Interpreted And Compiled Programming Languages
Interpreted and compiled programming languaes have many differences, in this space I will mention some of theese.
I think the most important characteristic of the compiled programming languages is that they need to be converted into a machine code, so with this, they trend to be more efficient at execute. 
# Some Examples of Compiled Programming Languages:
- C++
- C
- Go
- Rust

The interpreted programming languages don´t need a machine code to be compiled, they have the peculiarity that run through a program line by line, so this programming languages execute each command.
# Some Examples of Interpreted Programming Languages:
- JavaScript
- Python
- Ruby
- PHP

# Is Java compiled or interpreted, or both?
There is currently a controversy of this topic, because a many people think that java is a compiled language while other people think that is an interpreted language, I think java is a compiled and interpreted  at the same time, we can say that is an hibrid language, because first the source code is compiled into a binary bite-code, this code run on the JVM (Java Virtual Machine) which is usually a software-based interpreter.



# Pseudocode currency converter
Algorithm that will be used to convert dollars (USD) to bitcoin (BTC).
 
 ``` pseudocode
 1. START
  2. SET ActualBitcoinPriceInDollars <---- GET From https://es.investing.com/currencies/usd-btc-converter
  3. SET Dollars <-- GET From User
  4. SET Bitcoins <-- Dollars/ActualBitcoinPriceInDollars
  5. PRINT Bitcoins
 6. END
 ```


# My date of birth in the matrix written in binary?
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

# Algorithms using MIPS

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
