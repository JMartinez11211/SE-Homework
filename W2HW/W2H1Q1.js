//Write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome)
let prompt = require("prompt-sync")()

let Uinput = prompt ("Enter a word to see if its a palindrome :")
let Rinput = ""
for (let i = Uinput.length - 1; i>=0; i--) {       //.length-1 takes away an index of a string. example hello has 5 but in an array it has 4 since it starts at 0. 
   Rinput +=Uinput[i];                              //as long as there are index left in an array it will continue to loop till its >=0
                                                     // Rinput +=Uinput[i]; will put the letters from Uinport into the empty Rinput"" in reverse order becuase of the i logic.
}
let Uresult = Uinput.toLocaleUpperCase()
let Rresult = Rinput.toLocaleUpperCase()    


console.log(Rresult == Uresult);