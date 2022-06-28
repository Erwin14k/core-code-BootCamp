const { sum, minus } = require("./operations");

let s = 0.5;
let m = 0.5;
const Erwin14k = sum(s, m);

m = minus(Erwin14k, s);
s = minus(Erwin14k, m);