classValues = ["null","Fighter"]
var gold = 0
var xp = 0
var opponentHP = 10
var opponentLevel = 1
var opponentHPDisplay = document.getElementById("opponentHP")
var opponentMaxHPDisplay = document.getElementById("opponentMaxHP")
function class1Select(IDvalue) {
  console.log("Class 1: " + classValues[IDvalue] + "(" + IDvalue + ")")
  if (IDvalue = 1) {
    baseDmgValue = baseDmgValue + 1
    damage = baseDmgValue
    document.getElementById("FighterSelect").parentNode
  }
}

function damageOpponent(damage) {
  opponentHP = opponentHP - damage
  opponentHPDisplay.innerHTML = opponentHP
  if (opponentHP <= 0) {
    newOpponentSpawn()
  }
}

function newOpponentSpawn () {
  opponentLevel = opponentLevel + 1
  opponentHP = Math.floor(Math.pow(1.2,opponentLevel)  + 10)
  opponentHPDisplay.innerHTML = opponentHP.toString()
  opponentMaxHPDisplay.innerHTML = opponentHP.toString()
}
