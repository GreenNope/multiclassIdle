classValues = ["Fighter"]
var gold = 0
var xp = 0
var opponentHP = 10
var opponentLevel = 1
var opponentHPDisplay = document.getElementById("opponentHP")
var opponentMaxHPDisplay = document.getElementById("opponentMaxHP")
function class1Select(IDvalue) {
  console.log("Class 1: " + classValues[IDvalue] + "(" + IDvalue + ")")
}

function damageOpponent(damage) {
  opponentHP = opponentHP - damage
  opponentHPDisplay.innerHTML = opponentHP
  if (opponentHP <= 0) {
    newOpponentSpawn()
  }
}

function newOpponentSpawn () {
  opponentHP = 1.01^opponentLevel 
  opponentHPDisplay.innerHTML = opponentHP
  opponentMaxHPDisplay.innerHTML = opponentHP
}
