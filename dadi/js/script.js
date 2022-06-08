
// user random number
let userNum = Math.round(Math.random()*5)+1

document.getElementById('user').innerHTML = 'Il tuo numero è: ' + userNum

// computer random number
let computerNum = Math.round(Math.random()*5)+1

document.getElementById('computer').innerHTML = 'Il numero del computer è: ' + computerNum

// highscore

if (userNum > computerNum) {
    document.getElementById('result').innerHTML = 'HAI VINTO, COMPLIMENTI!'
} else if (userNum < computerNum) {
    document.getElementById('result').innerHTML = 'HAI PERSO, RITENTA...'
} else {
    document.getElementById('result').innerHTML = 'PAREGGIO.'
}

