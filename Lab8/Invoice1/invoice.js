//lab 8 part 2.1
let product_quantities =[2,1,1,1,1];

//Lab8 part 2.3

product_quantities.push(3);
//alert("The size of the products array is: "+product_quantities.length);
product_quantities.pop();

//Lab 8 part 2.2
//alert("The size of the products array is: "+product_quantities.length);

// Product 1
let item1 = 'Gillette Sensor 3 Razor';
let quantity1 = product_quantities[0];
let price1 = 1.23;
let extended_price1 = quantity1*price1;
// Product 2
let item2 = 'Barbasol Shaving Cream';
let quantity2 = product_quantities[1];
let price2 = 2.64;
let extended_price2 = quantity2*price2;
// Product 3
let item3 = 'Nautica Cologne';
let quantity3 = product_quantities[2];
let price3 = 6.17;
let extended_price3 = quantity3*price3;
// Product 4
let item4 = 'Rubbing Alcohol';
let quantity4 = product_quantities[3];
let price4 = 0.98;
let extended_price4 = quantity4*price4;
// Product 5
let item5 = 'Colgate Classic Toothbrush';
let quantity5 = product_quantities[4];
let price5 = 1.89;
let extended_price5 = quantity5*price5;


//Lab8 part 1.1
let product1 ={
    productName : "iPhone 12",
    price : 247.95,
    quantity : product_quantities[0]
};


//Lab8 part 1.3
//product1.quantity = 0;

//Lab8 part 1.4

product1["SKU"] = 1234;
delete product1["SKU"];

extended_price1 = product1.price*product1.quantity;

let subTot = (extended_price1+extended_price2+extended_price3+extended_price4+extended_price5);

let tax = (subTot*0.0575);

let total = tax+subTot;

// item row 1
var row = invoiceTable.insertRow();
row.insertCell().innerHTML = product1.productName; 
row.insertCell().innerHTML = product1.quantity;
row.insertCell().innerHTML = product1.price.toFixed(2);
row.insertCell().innerHTML = extended_price1;

// item row 2
var row = invoiceTable.insertRow();
row.insertCell().innerHTML = item2; 
row.insertCell().innerHTML = quantity2;
row.insertCell().innerHTML = price2.toFixed(2);
row.insertCell().innerHTML = extended_price2;

// item row 3
var row = invoiceTable.insertRow();
row.insertCell().innerHTML = item3; 
row.insertCell().innerHTML = quantity3;
row.insertCell().innerHTML = price3.toFixed(2);
row.insertCell().innerHTML = extended_price3;

// item row 4
var row = invoiceTable.insertRow();
row.insertCell().innerHTML = item4; 
row.insertCell().innerHTML = quantity4;
row.insertCell().innerHTML = price4.toFixed(2);
row.insertCell().innerHTML = extended_price4;

// item row 5
var row = invoiceTable.insertRow();
row.insertCell().innerHTML = item5; 
row.insertCell().innerHTML = quantity5;
row.insertCell().innerHTML = price5.toFixed(2);
row.insertCell().innerHTML = extended_price5;

document.getElementById("subtotal_cell").innerHTML = "$" + subTot.toFixed(2);
document.getElementById("tax_cell").innerHTML = "$" + tax.toFixed(2);
document.getElementById("total_cell").innerHTML = "$"+total.toFixed(2);