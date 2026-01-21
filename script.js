let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "C") {
            currentValue = "";
            display.value = "";
        } 
        else if (value === "=") {
            display.value = eval(currentValue);
        } 
        else {
            currentValue += value;
            display.value = currentValue;
            console.log = currentValue
        }
    });
});
