function shapechange() {
    pizzashape = document.getElementById("pizzashape").value;

    if (pizzashape == "round") {
        document.getElementById("square").style.display = "none";
        document.getElementById("round").style.display = "block";
    }
    else if (pizzashape == "square") {
        document.getElementById("round").style.display = "none";
        document.getElementById("square").style.display = "block";
    }
}

function calcround() {
    diameter = document.getElementById("diameter").value;
    let pi = Math.PI;

    result = diameter * 2 * pi;
    document.getElementById("result").innerHTML = (result.toFixed(2))/100+"m²";
}

function calcsquare() {
    side_a = document.getElementById("side_a").value;
    side_b = document.getElementById("side_b").value;
    let pi = Math.PI;

    result = side_a * side_b
    document.getElementById("result").innerHTML = (result.toFixed(2))/100+"m²";
}