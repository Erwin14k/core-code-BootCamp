<h1 align="center">Week 10</h1>



# Week challenges (Tuesday) 💻

- Review OOP concepts again with the [Fundamental Concepts of Object Oriented Programming](https://www.youtube.com/watch?v=m_MQYyJpIjg) video 🥰
- Check this [Object Oriented Programming - The Four Pillars of OOP](https://www.youtube.com/watch?v=1ONhXmQuWP8) video, this video use Java, but the idea is the same 😆

## React Kata

``` typescript

/*
DESCRIPTION:
You decide to create a simple list of your favourite Easter eggs in React.

Challenge
Learn about nesting and listing React components.

The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
Loop through the props.eggs to output a unorder list of Easter eggs.
Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.
About keys in React lists
While you can use the index of the array for a key because they should be unique among their siblings. However it is better to use unique values.

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

Solution:

import React from 'react';
export const EggList = (props) => {;
  let list = props.eggs.map((item, index) => {
  return <EasterEgg key = {index} name = {item}/>;      
  });
  
  return(<ul>{list}</ul>);
};
export const EasterEgg = (props) => {
  return <li>{props.name}</li>
};

```

# Week challenges (Wednesday) 💻

- [Node.JS Core Understanding] Learning Exercise 🧠

## ¿What is Node.JS?
Node.js is an open source, cross-platform runtime environment for the server layer based on the JavaScript programming language, asynchronous, with data I/O in an event-driven architecture and based on the V8 engine of Node.js. Google.
## ¿What problem does Node.JS solve?
Node.JS is trying to create a single ecosystem where all the components of an application be it fronted, backend, desktop app, mobile app can all be written in one language and that is JavaScript.
Node.JS also provides flexibility, asynchronous calls, and the most importantly it can be made to behave both functional and object oriented as and when need arises (this property is basically due to JavaScript, but it can be put to many unique applications)
The open source ecosystem is a boom because of Node and NPM, just think of a package and it's already there on NPM, simply install and use. This is very useful for developers who can now focus on application development rather than individual components.
## ¿What is the V8 Javascript Engine?
V8 is Google's open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node. js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors.
## ¿Is Node.JS really necessary in the Development ecosystem?
Node. js for web development is a revolutionary technology that offers unique features. Developers regard it as one of the most efficient cross-platforms JavaScript environments that can help you build robust and effective REST APIs, mobile applications, and web applications.
## ¿What is the difference between Node.JS and any other browser?
Unlike the browser where Javascript is sandboxed for your safety, node. js has full access to the system like any other native application. This means you can read and write directly to/from the file system, have unrestricted access to the network, can execute software and more.
## ¿What is NVM and Why is it useful for Node.JS developers?
NVM is a version manager for node. js. NVM is a tool that makes switching between existing versions of Node much easier. This is especially helpful when developers are working on various projects that have different versions of Node.
 
 - [Node.JS Module System Core Understanding] Learning Exercise 😃
 
 ## ¿What is a Javascript Module?
A module in JavaScript is just a file containing related code. In JavaScript, we use the import and export keywords to share and receive functionalities respectively across different modules. The export keyword is used to make a variable, function, class or object accessible to other modules.
 ## ¿Why are Javascript Modules necessary?
You create modules to better organize and structure your codebase. You can use them to break down large programs into smaller, more manageable, and more independent chunks of code which carry out a single or a couple of related tasks.
## ¿What module standards are available in Node.JS?

| Module| Description|
| ----- | ---- |
| http | 	http module includes classes, methods and events to create Node.js http server. |
| url | 	url module includes methods for URL resolution and parsing. |
| querystring | querystring module includes methods to deal with query string. |
| path | path module includes methods to deal with file paths. |
| fs | 	fs module includes classes, methods, and events to work with file I/O. |
| util | 	util module includes utility functions useful for programmers. |


## ¿What are the differences between ESModules and CommonJS modules?
ES modules are the standard for JavaScript, while CommonJS is the default in Node. js. The ES module format was created to standardize the JavaScript module system. It has become the standard format for encapsulating JavaScript code for reuse.

-[Node.JS Module System] Practice 💻
- [Client-Server Model] Learning Exercise 😮





# Week challenges (Thursday) 💻

- [APIs Core Understanding] Learning Exercise 🧠
- [From JSON to REST]) Learning Exercise 🧠
- [REST API Clients] Learning Exercise 🧠
- [Express.JS Core Understanding] Learning Exercise 🧠




