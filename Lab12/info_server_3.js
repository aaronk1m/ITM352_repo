let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

//Part 2a
app.get('/test' ,function(req,res){
    res.send("<h2>You have reached the test page - Aloha</h2>");
});

app.use(express.urlencoded({ extended: true }));

app.post("/process_form", function (request, response) {
    //response.send(request.body); 
    
    let q = parseInt(request.body['qty_textbox']);
    let validationMessage = validateQuantity(q);
    
    if (validationMessage == '') {
        response.send(`Thank you for purchasing ${q} things!`);
    } else { 
        response.send(validationMessage+" please press the back button to fix this."); }
 });

app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
});



app.listen(8080, () => console.log(`listening on port 8080`)); // Note use of an anonymous function here to do a callback

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