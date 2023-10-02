let monthInput=document.getElementById("monthIn");
let result=document.getElementById("result");

document.querySelector('button').addEventListener('click', function () {
    let month=monthIn.value.toLowerCase();

    let days = -1;

    switch(month) {
        default:
            days=-1;
            break;
        
        case "february":
            days=28;
            break;
        
        case "april":
        case "june":
        case "september":
        case "november":
            days=30;
            break;

        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            days=31;
            break;
    }

    if (days == -1) {
        result.textContent = 'Not a Month, please enter the name of a Month';
    } else {
        result.textContent = `There are ${days} days in ${month}.`;
    }
}
);