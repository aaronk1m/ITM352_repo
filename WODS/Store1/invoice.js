const params = new URL(document.location).searchParams;
// Loop through the expected quantity parameters and update the quantity array

let quantity=[];

for (let i = 0; i < itemData.length; i++) {
    let quantityValue = params.get(`quantity${i}`);
    if (quantityValue !== null) {
        quantity[itemData[i].quantityIndex] = Number(quantityValue);
    }
}

//import data from products.js into this file
import { itemData } from './products.js';

//initialize variables for subtotal, tax, shipping charge, and total
let subtotal=0;
let taxRate = 0.0575; // 5.75%
let taxAmount = 0;
let total = 0;
let shippingCharge = 0;

generateItemRows();

if (subtotal <= 50) {
    shippingCharge = 2;
} else if (subtotal <= 100) {
    shippingCharge = 5;
} else {
    shippingCharge = subtotal * 0.05; // 5% of the subtotal
}

// Calculate total including shipping
taxAmount = subtotal*taxRate;
total = subtotal + taxAmount + shippingCharge;

// Set the total cell in bold
document.getElementById('total_cell').innerHTML = `$${total.toFixed(2)}`;

// Set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' +shippingCharge.toFixed(2);

//there are many ways to code the validateQuantity function... here is one.
function validateQuantity(quantity) {
  let errorMessage = "";

  switch (true) {
      case isNaN(quantity):
          errorMessage = "Not a number. Please enter a non-negative quantity to order.";
          break;
      case quantity < 0 && !Number.isInteger(quantity):
          errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
          break;
      case quantity < 0:
          errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
          break;
      case !Number.isInteger(quantity):
          errorMessage = "Not an Integer. Please enter a non-negative quantity to order.";
          break;
      default:
          errorMessage = ""; // There are no errors
          break;
  }

  return errorMessage;
}
  

 
function generateItemRows() {
    let table = document.getElementById('invoiceTable');
  
    table.innerHTML = '';
  
   
    let hasErrors = false;
  
    
    for (let i = 0; i < itemData.length; i++) {
      let item = itemData[i];
      let itemQuantity = quantity[item.quantityIndex];
  
     
      let validationMessage = validateQuantity(itemQuantity);
  
   
      if (validationMessage !== "") {
        hasErrors = true;
        let row = table.insertRow();
        row.insertCell(0).innerHTML = item.brand;
        row.insertCell(1).innerHTML = validationMessage;
        row.insertCell(2).innerHTML ="";
        row.insertCell(2).innerHTML = "";
      } else if (itemQuantity > 0) {
       
        let extendedPrice = item.price * itemQuantity;
        subtotal += extendedPrice;
  
       
        let row = table.insertRow();
        row.insertCell(0).innerHTML = item.brand;
        row.insertCell(1).innerHTML = itemQuantity;
        row.insertCell(2).innerHTML = '$' + item.price.toFixed(2);
        row.insertCell(3).innerHTML = '$' + extendedPrice.toFixed(2);
      }
    }
  
    
    if (!hasErrors) {
      document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
    }
  }