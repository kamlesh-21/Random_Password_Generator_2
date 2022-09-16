const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let boxOne = document.getElementById("option-One")
let boxTwo = document.getElementById("option-Two")

let randomNumber1 = Math.floor(Math.random()*characters.length);
let randomNumber2 = Math.floor(Math.random()*characters.length);

function generate(){
   boxOne.textContent = "" 
   boxTwo.textContent = ""
    for (let i=0; i<15; i++) {
        let randomNumber1 = Math.floor(Math.random()*characters.length);
        boxOne.textContent += characters[randomNumber1];
        }
    for (let i=0; i<15; i++) {
        let randomNumber2 = Math.floor(Math.random()*characters.length);
        boxTwo.textContent += characters[randomNumber2];
        }
}