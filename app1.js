//This is external file-export the code
//2 ways to export the code

//1. Named Export (inline)
export let std = "komal";

// You MUST export demo() to use it in the main file
export function demo() {
  console.log("Hello I am function");
}

// Array export
export const arr = [10, 20, 30, 40];

//Default Export
//we can export only one default value
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
export default nums;
