//Variables
var userName;
var pocketMoney;
var menuArray = 
    [ "The One Ring",
    "Shire Sprinkle",
    "Misty Mountain Maple",
    "Gandalfs Sweet Spell",
    "The Hobbit Hole",
    "Bagel of Five Armies",
    "Smaugs Spicy Bagel",
    "Second Breakfast Bagel"]

var priceArray = 
    [ 6,
    7,
    7,
    8,
    6,
    8,
    7,
    6.50]

/*****************
Main Code
*****************/

/*****************************
 Functions
******************************/
function addToOrder(index) {
    OUTPUT.innerHTML +=
        "<p>" + menuArray[index] +
        ": $" + priceArray[index] +
        "</p>";
const OUTPUT = document.getElementById("orderContent");
}

function completeOrder() {
    OUTPUT.innerHTML += "<p>Your total price is"+"</p>"
}