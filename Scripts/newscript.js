// This code adds click event listeners to both password elements and calls the copyToClipboard function when clicked
// . The copyToClipboard function creates a textarea element, sets its value to the password, selects the text, 
// and then executes the copy command.



const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("firstPassword-el");
let secondPasswordEl = document.getElementById("secondPassword-el");

function getPasswords() {
   firstPasswordEl.textContent = "";
   secondPasswordEl.textContent = "";
    
    for (let i = 0; i <= 14; i++) {
        let charOne = Math.floor( Math.random() * characters.length );
        let charTwo = Math.floor( Math.random() * characters.length );
        firstPasswordEl.textContent += characters[charOne];
        secondPasswordEl.textContent += characters[charTwo];
    }
}

firstPasswordEl.addEventListener("click", function() {
    const password = firstPasswordEl.textContent;
    copyToClipboard(password);
    document.getElementById("firstPassword-el").innerHTML = "Password Copied!";
});

secondPasswordEl.addEventListener("click", function() {
    const password = secondPasswordEl.textContent;
    copyToClipboard(password);
    document.getElementById("secondPassword-el").innerHTML = "Password Copied!";
});

function copyToClipboard(text) {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
}
