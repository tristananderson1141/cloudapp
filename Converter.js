
//Takes input from "mi" text field and displays result to "km" textfield
function convertToKm() {

    var miles = document.getElementById("mi").value;
    var km = miles * 1.60934;
    
    document.getElementById("km").value = km;
}

//Takes input from "km" text field and displays result to "mi" textfield
function convertToMi() {
    
    var km = document.getElementById("km").value;
    var miles = km / 1.60934;

    document.getElementById("mi").value = miles;
}

//Clears all textfields
function clearDisplay() {
    
    document.getElementById("mi").value = "";
    document.getElementById("km").value = "";
}