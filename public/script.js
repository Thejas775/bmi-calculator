function calculateBMI() {
    var name = document.getElementById("name").value;
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
   
     if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
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
