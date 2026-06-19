//Variables
var userName;
var pocketMoney;


/*****************
Main Code
*****************/
const OUTPUT = document.getElementById("orderContent");
addToOrder("The One Ring", $6);


/*****************************
 Functions
******************************/
function addToOrder(_name, _price) {
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price+"</p>"
    OUTPUT.innerHTML += "<p>"Total Price: + _price+"<p>"
}