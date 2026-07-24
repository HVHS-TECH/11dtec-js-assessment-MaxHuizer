//Variables
var userName;
var totalPrice = 0;
var pocketMoney;
const menuArray =
    ["The One Ring",
    "Shire Sprinkle",
    "Misty Mountain Maple",
    "Gandalfs Sweet Spell",
    "The Hobbit Hole",
    "Bagel of Five Armies",
    "Smaugs Spicy Bagel",
    "Second Breakfast Bagel"];

const priceArray =
    [6,
    7,
    7,
    8,
    6,
    8,
    7,
    6.50];

const quantityArray = 
[0,0,0,0,0,0,0,0];

/*****************
Main Code
*****************/

//Outputs for different divs

const ORDER_OUTPUT = document.getElementById("orderContent");
const FORM_OUTPUT = document.getElementById("popupContainer");
const RECEIPT_OUTPUT = document.getElementById("receiptTotal");
const RECEIPTTOP_OUTPUT = document.getElementById("receiptTop");
const RECEIPTTOTALPRICE_OUTPUT = document.getElementById("receiptTotalPrice");
const RECEIPTBOTTOM_OUTPUT = document.getElementById("receiptBottom");

/*****************************
 Functions
******************************/

//this function adds an item to the order and the receipt when they eventually complete the order
// it also adds the quantity of the order instead of having an individual line for each item

function addToOrder(i){

totalPrice = totalPrice + priceArray[i];
ORDER_OUTPUT.innerHTML +="<p>" + menuArray[i] + ": $" + priceArray[i].toFixed(2) + "</p>";
RECEIPTBOTTOM_OUTPUT.innerHTML +="<p>" + menuArray[i] + ": $" + priceArray[i].toFixed(2) + "</p>";
}

// this function shows the details popup
function completeOrder() {

popup.classList.add("add");

FORM_OUTPUT.innerHTML = "<p>Your total price is $" + totalPrice.toFixed(2) + "</p>";
}

function completeOrderReturn() {
popup.classList.add("add");
}

// closes the enter details popup if you have enough money
function closePopup() {
popup.classList.remove("add");

const NAME_FIELD = document.getElementById("nameField");
userName = NAME_FIELD.value;

const MONEY_FIELD = document.getElementById("moneyField");
pocketMoney = Number(MONEY_FIELD.value);

if(pocketMoney >= totalPrice){
    receiptPopup();

} else {
    alert("Sorry, you can't afford your meal");
    completeOrderReturn();
}

if(userName === ""){
    alert("Please enter a name");
    completeOrderReturn();
}

if(userName.length > 20){
    alert("Please enter a valid name")
}

}

// makes the receipt popup with the full details of the order
function receiptPopup() {

receiptOutput.classList.add("add");

RECEIPT_OUTPUT.innerHTML = "<p>Name: " + userName + "</p>";

RECEIPTTOTALPRICE_OUTPUT.innerHTML =
"<h2>RECEIPT TOTAL: $" + totalPrice.toFixed(2) + "</h2>";

RECEIPTBOTTOM_OUTPUT.innerHTML += "<p>You paid $" + pocketMoney.toFixed(2) + "</p>";

let change = pocketMoney - totalPrice;

RECEIPTBOTTOM_OUTPUT.innerHTML += "<p>Your change is $" + change.toFixed(2) + "</p>";
}

// closes the receipt
function closeReceiptPopup() {
receiptOutput.classList.remove("add");
}
