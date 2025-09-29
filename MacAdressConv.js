function convMAC() {
    let mac = document.getElementById("macadress").value;
    let clean = mac.replace(/:/g, "");
    document.getElementById("result").innerHTML = clean;
}