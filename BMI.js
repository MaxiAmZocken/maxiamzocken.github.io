function BMI() {
    var w, h, bmi, result, text1, text2;
    text1 = "<u>Your BMI</u>"
    text2 = "<u>Your Result</u>"
    w = document.getElementById("w").value;
    h = document.getElementById("h").value;
    bmi = w/(h*h);
    bmi = Math.round(100*bmi)/100;
    document.getElementById("bmi").innerHTML = text1 + "<br>" + bmi;
    if (bmi<19) {
        result = "You are underweight"
    }
    else if (bmi>26) {
        result = "You are overweight"
    }
    else {
        result = "Your weight is normal"
    };
    document.getElementById("result").innerHTML = text2 + "<br>" + result;
}