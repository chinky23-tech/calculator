let display = document.getElementById("result");

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        let value = button.value;
        
        if (value === "c") {
            // Clear the display
            display.value = "";
        } else if (value === "=") {
            // Calculate the result
            try {
                display.value = eval(display.value); // Evaluate expression
            } catch {
                display.value = "Error";
            }
        } else {
            // Append the clicked button's value to the display
            display.value += value;
        }
    });
});
