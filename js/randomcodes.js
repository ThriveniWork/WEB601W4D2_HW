document.addEventListener("DOMContentLoaded", function () {
    var codeDisplay = document.getElementById("codes");
    var inputField = document.querySelector("input[name='randomcode']");
    var submitButton = document.querySelector("input[type='submit']");
    var generatedCode = "";

    // Function to generate a random code
    function generateCode() {
        var code = "";
        var str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
        for (let i = 0; i < 8; i++) {
            var char = Math.random() * str.length; //randomly select a character from the variable
            code += str.charAt(char); //accumulate the gnerated character intoa string of 8
        }
        return code;
    }

    // Function to check input and enable/disable the submit button
    function validateInput() {
        if (inputField.value === generatedCode) {
            submitButton.disabled = false;
            submitButton.style.background = "blue";
        } else {
            submitButton.disabled = true;
            submitButton.style.background = "grey";
        }
    }

    // Initialize the generated code and display it
    function initialize() {
        generatedCode = generateCode();
        codeDisplay.innerText = generatedCode;
        submitButton.disabled = true;
        submitButton.style.background = "grey";
    }

    // Initialize the captcha
    initialize();

    // Add event listener to check input as the user types
    inputField.addEventListener("input", validateInput);
});
