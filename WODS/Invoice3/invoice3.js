import { itemData,quantity } from "./products.js";

let extendedPrices = [];
let extendedPrice = 0;
let subtotal = 0;
let taxAmount = 0;

let shipping = 0;

generateItemRows();




/*for(let i=0;i<itemData.length; i++){
    let item = itemData[i];
    let itemQuantity = quantity[item.quantityIndex];
    let extendedPrice = item.price * itemQuantity;

    subtotal +=extendedPrice;
    extendedPrices.push(extendedPrice);

}*/

// calculate subtotal

//calculate tax
 let tax = (subtotal*0.0575);



//checks the shipping price
if(subtotal <= 50)
{
    shipping = 2;
}else if(subtotal <=100)
{
    shipping = 5;
}
else{
    shipping = subtotal*.05;
}

//calculates total
let total = tax+subtotal+shipping;



//let table = document.getElementById("invoiceTable");

/*for(let i= 0; i < itemData.length; i++)
{
    let row = invoiceTable.insertRow();
    row.insertRow(0).innerHTML = itemData[i].brand;
    row.insertRow(1).innerHTML = quantity[itemData[i].quantityIndex];
    row.insertRow(2).innerHTML = "$"+itemData[i].price.toFixed(2);
    row.insertRow(3).innerHTML = "$"+extendedPrices[i].toFixed(2);
}*/

//insert footer row values
document.getElementById("subtotal_cell").innerHTML = "$" + subtotal.toFixed(2);
document.getElementById("tax_cell").innerHTML = "$" + tax.toFixed(2);
document.getElementById("shipping_cell").innerHTML = "$"+shipping.toFixed(2);
document.getElementById("total_cell").innerHTML = "$"+total.toFixed(2);

function validateQuantity(quantity){
    if(isNaN(quantity)){
        return "Not a Number";
    }else if (quantity<0 && !Number.isInteger(quantity)){
        return "Negative Inventory & Not an Integer";
    }else if (quantity <0){
        return "Negative Inventory";
    }else if(!Number.isInteger(quantity)){
        return "Not an Integer";
    }else{
        return"";
    }

}

function generateItemRows(){

    let table = document.getElementById("invoiceTable");

    let hasErrors = false; 

    for(let i=0;i<itemData.length;i++){
        
        let item = itemData[i];
        let itemQuantity = quantity[item.quantityIndex];
        
        let validationMessage = validateQuantity(itemQuantity);

        if(validationMessage !== ""){
            hasErrors = true;
            let row =table.insertRow();
            row.insertCell(0).insertHTML = item.brand;
            row.insertCell(1).innerHTML = validationMessage;
        } else if(itemQuantity >0){
            extendedPrice = item.price * itemQuantity;
            subtotal += extendedPrice;

            let row = table.insertRow();
            row.insertCell(0).innerHTML = item.brand;
            row.insertCell(1).innerHTML = itemQuantity;
            row.insertCell(2).innerHTML = "$" + item.price.toFixed(2);
            row.insertCell(3).innerHTML = "$"+extendedPrice.toFixed(2);

        }

    }

}