//Variables
var userName;
var totalPrice;
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
const ORDER_OUTPUT = document.getElementById("orderContent");

/*****************************
 Functions
******************************/

//the function for adding an item from the array to the ordercontent
function addToOrder(i) {
    ORDER_OUTPUT.innerHTML += "<p>" + menuArray[i] + ": $" + priceArray[i] +"</p>";
}

function completeOrder(i) {
    ORDER_OUTPUTOUTPUT.innerHTML += "<p>Your total price is"+ priceArray[i] + "</p>"
}