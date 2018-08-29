classValues = ["Fighter"]
var gold = 0
var xp = 0
var opponentHP = 10
var opponentLevel = 1
function class1Select(IDvalue) {
  print("Class 1: " + classValues[IDvalue] + "(" + IDvalue + ")")
}

function attackOpponent(damage) {
  opponentHP = opponentHP - damage 
  
}

function newOpponentSpawn () {
  opponentHP = 1.01^opponentLevel 
}
