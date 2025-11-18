//this is the main file--import the code
//always import stmt shoudl be at the top

//2.ywo wyas to uimport the code
//1.Named import:we can importmultiple imports

import { std, demo, arr } from "./app1.js";
import { emp, greet } from "./app2.js";

console.log(std);
demo();
console.log(arr);

console.log(emp);
greet("manu");

import nums from "./app1.js";
console.log(nums);
