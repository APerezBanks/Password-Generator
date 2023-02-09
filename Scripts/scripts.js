// Requirements 
// Built it from scratch
// Generate 2 random passwords when the user click the button
// each password should be 15 characters long

// strech goals
//ability to set password length ( hint input field)
//Add copy-on-click
// toggle "symbols" and "numbers" on and off ( selecionar los numeros o simbolos fruit challenge creo)


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("firstPassword-el")
let secondPasswordEl = document.getElementById("secondPassword-el")

function getPasswords() {
   firstPasswordEl.textContent = ""
   secondPasswordEl.textContent = ""
    
    for (let i = 0; i <= 14; i++) {
        let charOne = Math.floor( Math.random() * characters.length )
        let charTwo = Math.floor( Math.random() * characters.length )
        firstPasswordEl.textContent += characters[charOne]
        secondPasswordEl.textContent += characters[charTwo]
    }

    
}

// ability to set password length


// function to copy text no me furula


// function copyPass1() {

//     document.getElementById("firstPassword-el").innerHTML = "Password Copied!";


//   }
// function copyPass2() {

//     document.getElementById("secondPassword-el").innerHTML = "Password Copied!";


//   }

