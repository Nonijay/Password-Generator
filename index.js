const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass1"); 
let passTwo = document.getElementById("pass2");


function  generatePass(){
   let pass=""
   for(let i = 0; i < 15; i++){
       let smallWork = Math.floor(Math.random()*characters.length);
       pass += characters[smallWork + 1]
   }
   return(pass)
}
function gPass(){
    passOne.innerText += generatePass();
    passTwo.innerText += generatePass();
}

function reset(){
    passOne.innerHTML = ""
    passTwo.innerHTML = ""
}
function copy() {
    let passOne = document.execCommand('copy');
    let passTwo = document.execCommand('copy');
    
    navigator.clipboard.writeText(passOne.value)
    navigator.clipboard.writeText(passTwo.value)
    
}


