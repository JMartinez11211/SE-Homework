// 3.Write a program to find how many times a user entered word occurs in given string
let prompt= require("prompt-sync")()
let Uinput=prompt("Enter some text: ")
console.log(Uinput);
let Cinput = prompt("What word would you like to count ? :")
let Uarray = Uinput.split(" ")
let Wcounter =0
for (let i = Wcounter ; i<Uarray.length; i++) {
        if (Uarray[i].toLocaleLowerCase==Cinput.toLocaleLowerCase) {
           Wcounter++
           
        } 
               
}   

console.log(`you Wrote ${Cinput} ${Wcounter} times.`);  