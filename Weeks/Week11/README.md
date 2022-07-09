<h1 align="center">Week 11</h1>

# Week challenges (Monday) 💻

- [Get Started With TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-get-started/) guided exercise, using `Typescript` 😏
- [Declare Variable Types In TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-declare-variable-types/) guided exercise, using `Typescript` 😵




# Week challenges (Tuesday) 💻

- [Develop typed functions by using TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-develop-typed-functions/) guided exercise, using `Typescript` 🤔
- [Declare and instantiate classes in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-declare-instantiate-classes/) guided exercise, using `Typescript` 😆

# Week challenges (Wednesday) 💻

- [Define generics in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-generics/) guided exercise, using `Typescript` 😚


## Make the Deadfish Swim 😮

``` typescript
/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [8, 64]
*/


// Solution

/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  let value:number = 0;
  let resultArray: number[] = [];
  for (let temp of data.split('')) {
    switch (temp) {
      case 'i':
        value++;
        break;
      case 'd':
        value--;
        break;
      case 's':
        value *= value;
        break;
      case 'o':
        resultArray.push(value);
    }
  }
  return resultArray;
  
}


```

# Week challenges (Thursday) 💻

- [Generics](./Generics) 🙉

- [TicTacToe](./TicTacToe) 🐍


