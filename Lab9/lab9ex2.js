//Function for splits
function splitString(string, separator) {
    return string.split(separator);
}

//Define attributes
let attributes = "Kim;20;MIS";

//Split attributes into array
let attributesArray = attributes.split(";");

//Extract name, age, and the major
let name = attributesArray[0];
let age = attributesArray[1];
let major = attributesArray[2];

//Print attributes
console.log("Name: " + attributesArray[0]);
console.log("Age: " + attributesArray[1]);
console.log("Major: " + attributesArray[2]);