<h1 align="center">Week 7</h1>

# Week challenges (Monday) 💻

## OOP Glossary

- [OPP Glossary](./Glossary) 🤯

## Typescript OOP Guide
- [Typescript OOP Guide](./OOPGuide) 😎


# Week challenges (Tuesday) 💻

- [Menu](./Menu/Menu) 🍕
- [Movies](./Movies/Movies) 🎬

# Week challenges (Wednesday) 💻

## Buil Tower

``` typescript
/* Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/
//Solution:
export const towerBuilder = (nFloors: number): string[] => {
  if (nFloors === 1) return ['*'];
  const finalTower: string[] = [];
  for (let i = 1; i <= nFloors; i++) {
    finalTower.push(`${' '.repeat(nFloors - i)}${'*'.repeat(2 * i - 1)}${' '.repeat(nFloors - i)}`);
  }
  return finalTower;
}
```

## Meeting

``` typescript
/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too. */

//Solution

export function meeting(s: string): string {
    return s
    .toUpperCase()
    // When a ";" appears, there is another person, so the split function is used.
    .split(';')
    .map((n: string) => '(' + n.split(':').reverse().join(', ') + ')')
    //gives it sorted in alphabetical order.
    .sort()
    .join('');
}


``` 

