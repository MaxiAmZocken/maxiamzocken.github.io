function calculateCost() {
    var petrolprice = parseFloat(document.getElementById("petrolprice").value);
    var consumption = parseFloat(document.getElementById("consumption").value);
    var distance = parseFloat(document.getElementById("distance").value);
    if (document.getElementById('thereandback').checked) {
        thereandback = 2;
    } else {
        thereandback = 1;
    }

    var cost = (distance / 100) * consumption * petrolprice * thereandback;

    document.getElementById("result").textContent = "Total Cost: €" + cost.toFixed(2);
}