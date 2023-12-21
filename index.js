const display = document.getElementById("screen");

function displays(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR";
    }
}


function clears() {
    display.value = "";
}