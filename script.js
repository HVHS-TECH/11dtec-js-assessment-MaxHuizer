//Variables
var userName;
var pocketMoney;
var menuArray 
    [ "The One Ring",
    "Shire Sprinkle",
    "Misty Mountain Maple",
    "Gandalfs Sweet Spell",
    "The Hobbit Hole",
    "Bagel of Five Armies",
    "Smaugs Spicy Bagel",
    "Second Breakfast Bagel"]

var priceArray
    [ 6,
    7,
    7,
    8,
    6,
    8,
    7,
    6.50
    ]

/*****************
Main Code
*****************/
const OUTPUT = document.getElementById("orderContent");
addToOrder


/*****************************
 Functions
******************************/
function addToOrder(_name, _price) {
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price+"</p>"
}

function completeOrder() {
    OUTPUT.innerHTML += "<p>Your total price is"+"</p>"
}