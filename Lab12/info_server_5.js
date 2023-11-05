let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

//part 2a
app.get('/test' ,function(req,res){
    res.send("<h2>You have reached the test page - Aloha</h2>");
});

app.use(express.urlencoded({ extended: true }));

let products = require(__dirname + '/products.json');
 products.forEach( (prod,i) => {prod.total_sold = 0});

 app.get("/products.js", function (request, response, next) {
    response.type('.js');
    let products_str = `var products = ${JSON.stringify(products)};`;
    
    response.send(products_str);
 });

app.post("/process_form", function (request, response) {
    //response.send(request.body); 
    let brand = products[0]['brand'];
    let brand_price = products[0]['price'];

    let q = Number(parseInt(request.body['qty_textbox']));
    let validationMessage = validateQuantity(q);
    products[0].total_sold += q;
    
    if (validationMessage == '') {
        //response.send(`<h2>Thank you for purchasing ${q} ${brand}. Your total is \$${q * brand_price}!</h2>`);
        console.log("true");
        response.redirect('reciept.html?quantity=' + q);
    } else { 
        response.redirect(`order.html?error=${validationMessage}&qty_textbox=${q}`); }
 });

 

app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
});




app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback

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