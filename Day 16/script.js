var display = document.getElementById('display');
var addToDisplay = function (input) {
    display.value += input;
};
var clearDisplay = function () {
    display.value = "";
};
var deleteLast = function () {
    display.value = display.value.slice(0, -1);
};
var calculate = function () {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
};
