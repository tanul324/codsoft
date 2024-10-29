// Initialize an empty expression to store user inputs
let expression = "";

// Function to update the display with the current expression
function updateDisplay() {
    document.getElementById("display").innerText = expression || "0";
}

function appendSymbol(symbol) {
    expression += symbol;
    updateDisplay();
}

// Function to clear the display and reset the expression
function clearDisplay() {
    expression = "";
    updateDisplay();
}

// Function to delete the last character in the expression
function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

// Function to evaluate the expression and display the result
function calculate() {
    try {
        // Evaluate the expression and round the result
        expression = eval(expression).toString();
    } catch (error) {
        expression = "Error"; // Display "Error" for invalid expressions
    }
    updateDisplay();
}

// Update display on page load to show "0"
updateDisplay();


