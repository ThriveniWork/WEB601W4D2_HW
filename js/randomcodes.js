/*-----------Random Codes-----------*/

//Function to generate combination of characters
function generateCode() {
    //create variable of characters including numbers, uppercase, lowercase and symbols
    var code = "";
    var str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
    
    //generate random characters multiple times using a loop
    for (var i = 0; i < 8; i++) {
        var char = Math.random() * str.length; //randomly select a character from the variable
        code += str.charAt(char); //accumulat ethe gnerated character intoa string of 8
    }
    return code;
}
//Display the generated code
document.getElementById("codes").innerHTML = generateCode(); //display the generated code on the HTML element

//Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true; //disable the button
}
//Activate Function
disableButton(); //call the function to disable the button
