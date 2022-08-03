const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//added these for the special requirements someone will send in for their password
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const special = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

passwordsExist = false
let passwordLength = 0
while(passwordLength <1 || passwordLength > 20){
    passwordLength = prompt("Please enter a password length that is between 1 and 20")
}


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
    for(let i = 0; i < passwordLength; i++){
        let number = generateRandNum()
        pass += characters[number]
        let number2 = generateRandNum()
        pass2 += characters[number2]
    }
    passwordEl.textContent = pass
    passwordEl2.textContent = pass2
    passwordsExist = true
}

//didn't really know how to take in the id of the element being clicked so two seperate functions were made to copy the text of the passwords to the clipboard
function copyText(){
    let copyText2 = document.getElementById("password-el2").addEventListener("click", navigator.clipboard.writeText(passwordEl.innerHTML))
    alert("The password has been copied to clipboard")
}

function copyTextOne(){
    let copyText1 = document.getElementById("password-el").addEventListener("click", navigator.clipboard.writeText(passwordEl2.innerHTML))
    alert("The password has been copied to clipboard")
}


//TODO: potentially add feature to set requirements for a password