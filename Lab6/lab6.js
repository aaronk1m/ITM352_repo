let monthInput=document.getElementById("monthIn");
let result=document.getElementById("result");

document.querySelector('button').addEventListener('click', function () {
    let month=monthIn.value.toLowerCase();

    let num_days = -1;

    switch(month) {
        default:
            num_days=-1;
            break;
        
        case "february":
            num_days=28;
            break;
        
        case "april":
        case "june":
        case "september":
        case "november":
            num_days=30;
            break;

        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            num_days=31;
            break;
    }

    if (num_days == -1) {
        result.textContent = 'Invalid month. Please enter a valid month name.';
    } else {
        result.textContent = `There are ${num_days} days in ${month}.`;
    }
}
);