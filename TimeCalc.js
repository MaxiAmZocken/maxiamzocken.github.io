function calculate1() {
    var time1, time2, result
    time1 = document.getElementById("time1").value
    time2 = document.getElementById("time2").value

    const [h1, m1] = time1.split(":");
    const [h2, m2] = time2.split(":");

    var m = parseFloat(m1) + parseFloat(m2)
    var h = parseFloat(h1) + parseFloat(h2) + Math.floor(m / 60)
    m = m % 60
    h = h % 24


    result = h+":"+m
    document.getElementById("result").innerHTML = result;
}