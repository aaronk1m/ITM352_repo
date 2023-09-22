//declared variables per lab 5.1 instructions
let age=20;
let fav_num=7;
let day_of_birth=2;
let month_of_birth=12;

//define calculation
let calc1 = age + fav_num / day_of_birth * month_of_birth;
let calc2 = (age + fav_num) / day_of_birth * month_of_birth;

/*PEMDAS
Parenthesis
Exponent
Mult
Div
Add
Sub
*/


//output calc 1 and 2 to the DOM
document.getElementById("result1").innerHTML = calc1;
document.getElementById("result2").innerHTML = calc2;
