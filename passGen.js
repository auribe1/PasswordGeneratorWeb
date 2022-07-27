const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass = ""
let passwordEl = document.getElementById("password-el")
let pass2 = ""
let passwordEl2 = document.getElementById("password-el2")
function generateRandNum(){
    let num = Math.floor(Math.random() * characters.length)
    return num

}

function generatePass(){
    pass = ""
    passwordEl.textContent = ""
    pass2 = ""
    passwordEl2.textContent = ""
    for(let i = 0; i < 15; i++){
        let number = generateRandNum()
        pass += characters[number]
        let number2 = generateRandNum()
        pass2 += characters[number2]
    }
    passwordEl.textContent = pass
    passwordEl2.textContent = pass2
}

//TODO: add feature to input a password length
//TODO: potentially add feature to set requirements for a password


