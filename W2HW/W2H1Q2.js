//2.Write a program to find how many letters, numbers, and special characters are in a user entered string.
let prompt = require("prompt-sync")()
let User = prompt("Enter text to find number of strings,numbers and special characters: ")
let Nstrings = User.match(/[a-z]/gi).length
let Nnum= User.match(/[1-9]/g).length
let Schar= User.length - (Nstrings+Nnum)
console.log(Nstrings + " Strings " + Nnum+" Numbers " + Schar + " Special Characters ");