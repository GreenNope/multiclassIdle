classValues = ["Fighter"]
var gold = 0
var xp = 0
var opponentHP = 10
var opponentLevel = 1
var opponentHPDisplay = Document.getElementById("opponentHP")
var opponentMaxHPDisplay = Document.getElementById("opponentMaxHP")
function class1Select(IDvalue) {
  print("Class 1: " + classValues[IDvalue] + "(" + IDvalue + ")")
}

function damageOpponent(damage) {
  opponentHP = opponentHP - damage
  opponentHPDisplay.innerHTML = opponentHP
}

function newOpponentSpawn () {
  opponentHP = 1.01^opponentLevel 
  opponentHPDisplay.innerHTML = opponentHP
  opponentMaxHPDisplay.innerHTML = opponentHP
  
}
