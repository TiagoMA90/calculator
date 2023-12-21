const display = document.getElementById("screen");

// Dispalys the input in the screen
function displays(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        // Catches the error for unknown formula
        display.value = "ERROR";
    }
}

// Clears the screen from values
function clears() {
    display.value = "";
}