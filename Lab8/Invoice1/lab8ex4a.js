
//Define the product_quantities array
let product_quantities =[2,1,1,1,1];

// The array of all products
// The corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]
products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
   ];

//Iterate through product_quantities and print each element in a table
document.write("<table>");
document.write("<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>");

for (let i=0; i < product_quantities.length; i++){

    let quantity = product_quantities[i];
    let product = products[i];
    let extended_cost = quantity *product.price;

    document.write("<tr>");
    document.write("<td>"+ (i+1)+"</td>"); //Product #
    document.write("<td>"+ product.name+"</td>");
    document.write("<td>"+ product.price.toFixed(2) +"</td>");
    document.write("<td>"+quantity+"</td>");
    document.write("<td>"+extended_cost.toFixed(2)+"</td>");

    document.write("</tr>");
}
document.write("</table>")

function addNewRow(){
    let table = document.querySelector('table');

    let newRow = table.insertRow();
    newRow.innerHTML = "<td> blank </td><td> blank </td><td> blank </td><td> blank </td><td> blank </td>"

}

//Add a click event listerner to the table to trigger the addNewRow function

document.addEventListener("DOMContentLoaded", function() {
    let table = document.querySelector('table');
    table.addEventListener('click',addNewRow);
});