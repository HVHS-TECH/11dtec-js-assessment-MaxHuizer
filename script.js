//Variables
var userName;
var pocketMoney;


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
    OUTPUT.innerHTML += "<p>Your total price is" + _price+"</p>"
}