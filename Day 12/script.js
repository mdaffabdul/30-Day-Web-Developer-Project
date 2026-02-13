const display = document.getElementById('display');

const addToDisplay = (input) => {
    display.value += input;
};   

const clearDisplay = () => {
    display.value = "";

};

const deleteLast = () => {
    display.value = display.value.slice(0, -1);
};  

const calculate = () => {
    try{
        display.value = eval(display.value)
    }
    catch(error){
      display.value = "Error";  
    }
    
};