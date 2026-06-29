//Variables
var userName;
var totalPrice = 0;
var pocketMoney;
var menuArray = 
    ["The One Ring",
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
const FORM_OUTPUT = document.getElementById("popupContainer");
const RECEIPT_OUTPUT = document.getElementById("receiptTotal");

/*****************************
 Functions
******************************/

//the function for adding an item from the array to the ordercontent
function addToOrder(i) {
    ORDER_OUTPUT.innerHTML += "<p>" + menuArray[i] + ": $" + priceArray[i] +"</p>";

     totalPrice = totalPrice + priceArray[i];
}

// function which shows the popup for enter details
function completeOrder() {
popup.classList.add("add")

FORM_OUTPUT.innerHTML += "<p>Your total price is $"+ totalPrice + "</p>"
}

// closes the enter details popup if you have enough money
function closePopup() {
popup.classList.remove("add")

const NAME_FIELD = document.getElementById("nameField"); userName = NAME_FIELD.value;
const MONEY_FIELD = document.getElementById("moneyField"); pocketMoney = Number(MONEY_FIELD.value);

ORDER_OUTPUT.innerHTML += "<p>Name:" + userName + "</p>"
ORDER_OUTPUT.innerHTML += "<p>Your Money: $" + pocketMoney + "</p>"

if(pocketMoney >= totalPrice){
    receiptPopup()

} else {
    alert("Sorry, you can't afford your meal")
    }
}

// makes the receipt popup with the full details of the order
function receiptPopup() {
receiptOutput.classList.add("add")
RECEIPT_OUTPUT.innerHTML += "<p> Name: " + userName + "</p>"

//total price
RECEIPT_OUTPUT.innerHTML += "<p> Your total price is $" + totalPrice + "</p>"


RECEIPT_OUTPUT.innerHTML += "<p> You paid $" + pocketMoney + "</p>"
//calculate the change
change = pocketMoney - totalPrice;
RECEIPT_OUTPUT.innerHTML += "<p>Your change is $" + change + "</p>"
}

// closes the receipt
function closeReceiptPopup() {
receiptOutput.classList.remove("add")
}