function calculateBMI() {
    var name = document.getElementById("name").value;
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
     //This is just to make fun of my friends
    if (name.toLowerCase().includes("sanika")) {
        var resultMessage = `Sanika better start going to the gym <br>Category: Hippo`;
        document.getElementById("result").innerHTML = resultMessage;
        return;
    }
    else if (name.toLowerCase().includes("aditi")) {
        var resultMessage = `Aditi better start eating something <br>Category: Kuch kha le bhai`;
        document.getElementById("result").innerHTML = resultMessage;
        return;
    }
    //The above is just to make fun of my friends
    else if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("result").innerHTML = "Invalid input. Please enter valid height and weight.";
    } else {
        var bmi = weight / ((height / 100) ** 2);
        var category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        var resultMessage = `${name}, your BMI is: ${bmi.toFixed(2)}<br>Category: ${category}`;
        document.getElementById("result").innerHTML = resultMessage;
    }
}
