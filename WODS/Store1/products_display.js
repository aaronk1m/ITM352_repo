// Define store name and push it to the DOM in the top title
const first_name = "Aaron";
const last_name = "Kim's";
const store_name="Aaron";

// Manipulate the header to display your name with formatting
const firstNameSpan = document.getElementById('first_name_span');
const lastNameSpan = document.getElementById('last_name_span');
firstNameSpan.textContent = first_name;
lastNameSpan.textContent = last_name;
top_title.innerHTML=("Used Smart Phone Store");

//To initialize hits, spins, over_half and send to the DOM
let hits= 0;
let spins=0;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;


const product1 = {
    name: "HTC",
    price: 40.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg"
};

const product2 = {
    name: "Apple",
    price: 75.64,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg"
};

const product3 = {
    name: "Nokia",
    price: 35.99,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg"
};

const product4 = {
    name: "Samsung",
    price: 33.95,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg"
};

const product5 = {
    name: "Blackberry",
    price: 35.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg"
};

const products = [product1, product2, product3, product4, product5];


for (let i=0; i < products.length; i++){
    const product = products[i];
    document.querySelector('.main').innerHTML += `
    <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <img src="${product.image}" />
        <label id="quantity${i}_label" for="quantity${i}">Quantity Desired</label>
        <input type="text" name="quantity${i}" id="quantity${i}">
    </section>`;
}

//create variables to push to the DOM for current year and time in the footer
const currentYear = new Date().getFullYear();
const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


const line = 1;
const line2 = 2;
const line3 = 3;
const now = new Date();

document.write(`
    <table border="1" style="margin-left: auto; margin-right: auto; text-align: center;">
<tbody>
<tr><th colspan="2"><h1>Your One Stop Shop For Used Phones - ${first_name[0]}. ${last_name[0]}'s</h1></th></tr>
<tr><td>${line}</td><td><br />Copyright @ ${first_name} ${last_name}</td></tr>
<tr><td>${line2}</td><td>${now.getFullYear()}</td></tr>
<tr><td>${line3}</td><td>${((now.getHours() + 11) % 12 + 1)}:${(now.getMinutes())} ${((now.getHours() < 12)?'AM':'PM')}</td></tr>
<tbody>
</table>
`);

// Set the innerHTML of the bottom_title element to the generated table
bottom_title.innerHTML = footerTable;

function changeClassName(element) {
    if(element.className=='item'){
        element.className = 'item rotate';
        spins=spins+1;
    }
    if(spins<2*hits&&hits<spins){
       over_half=true;
    } 

    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

}
function resetClassName(element) {
    if(element.className=='item rotate'){
        element.className = 'item';
        hits=hits+=2;
    } else {
        changeClassName(element);
    }

    if(spins<2*hits&&hits<spins){
        over_half=true;
    } 

    win_span.innerHTML=over_half;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}