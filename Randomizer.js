function random() {
    var maxnumber, randomnumber, result;
    maxnumber = document.getElementById("maxnumber").value;
    randomnumber = Math.random();
    result = Math.floor(randomnumber*maxnumber+1);
    document.getElementById("result").innerHTML = result;
}