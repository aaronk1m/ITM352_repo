//Declare and push to the DOM the store name at top and bottom
const store_name="Aaron Kim";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
bottom_title.innerHTML=(store_name + "'s Used Smart Phone Store");

let hits= 0;
let spins=0;
let wins;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

let product1 = {
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg",
    brand: "HTC",
    price: "$"+40.00
};
let product2 = {
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg",
    brand: "Apple",
    price: "$"+75.00
};
let product3 = {
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg",
    brand: "Nokia",
    price: "$"+35.00
};
let product4 = {
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg",
    brand: "Samsung",
    price: "$"+45.00
};
let product5 = {
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg",
    brand: "Blackberry",
    price: "$"+10.00
};

products = [product1, product2, product3, product4, product5];



/*for(let i=0; i < products.length; i++){

    document.querySelector('main').innerHTML += `<section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
    <h2>${products[i].brand}</h2>
    <p>${products[i].price}</p>
    <img src=${products[i].image} />
    </section>
    `;

}*/

function changeClassName(element) {
    if(element.className=="item"){
        spins=spins+1; 
        element.className = 'item rotate';
    }
    
  /*  if(spins<2*hits&&hits<spins){
        wins=true;
    }else{
        wins=false;
    }
    win_span.innerHTML=wins;*/
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

    // -- Winning progress depends on hits/spins
    let hits_spins_ratio = hits/spins;
    let progress="";

    if (hits_spins_ratio > 0) {
        if (hits_spins_ratio >= 0.5 && hits < spins) {
            progress = 'You win!';
        } else if (hits_spins_ratio >= 0.5) {
            // In case hits_spins_ratio >= 0.5 but hits >= spins
            progress = 'Almost there!';
        } else if (hits_spins_ratio >= 0.25) {
            progress = 'Almost there!';
        } else {
            progress = 'On your way!';
        }
    } else {
        progress = 'Get going!';
    }
   
    

    /*if (hits_spins_ratio >=0.5) {
        if(hits<spins)
        {
            progress = 'You Win!';
        }
    }
    else if(hits_spins_ratio >= 0.25)
    {
        progress = "Almost there!"
    }
    else if(hits_spins_ratio>0)
    { 
        progress = "On your way!"
    }
    else{
        progress = "Get going!"
    } */



    /*
    if ( hits_spins_ratio > 0 ) {
        progress = 'On your way!';
        if ( hits_spins_ratio >= 0.25 ) {
            progress = 'Almost there!';
            if ( hits_spins_ratio >= 0.5 ) {
                if( hits < spins) { 
                    progress = 'You win!';
                }
            }
        }
    }
    else {
        progress = 'Get going!' ;
    }*/
    win_span.innerHTML=progress; 
}
function resetClassName(element) {
    if(element.className == "item rotate"){
        element.className = 'item';
        hits=hits+=2;
    }
    else{
        changeClassName(element)
    }
  
   /* if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    }else{
        //wins=false;
    }
    win_span.innerHTML=over_half;*/
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

    // -- Winning progress depends on hits/spins
    let hits_spins_ratio = hits/spins;
    let progress="";

    if (hits_spins_ratio > 0) {
        if (hits_spins_ratio >= 0.5 && hits < spins) {
            progress = 'You win!';
        } else if (hits_spins_ratio >= 0.5) {
            // In case hits_spins_ratio >= 0.5 but hits >= spins
            progress = 'Almost there!';
        } else if (hits_spins_ratio >= 0.25) {
            progress = 'Almost there!';
        } else {
            progress = 'On your way!';
        }
    } else {
        progress = 'Get going!';
    }
    
    

    /*if (hits_spins_ratio >=0.5) {
        if(hits<spins)
        {
            progress = 'You Win!';
        }
        
    }
    else if(hits_spins_ratio >= 0.25)
    {
        progress = "Almost there!"
    }
    else if(hits_spins_ratio>0)
    { 
        progress = "On your way!"
    }
    else{
        progress = "Get going!"
    }
    /*
    if ( hits_spins_ratio > 0 ) {
        progress = 'On your way!';
        if ( hits_spins_ratio >= 0.25 ) {
            progress = 'Almost there!';
            if ( hits_spins_ratio >= 0.5 ) {
                if( hits < spins) { 
                    progress = 'You win!';
                }
            }
        }
    }
    else {
        progress = 'Get going!' ;
    }*/
    win_span.innerHTML=progress; 
}

