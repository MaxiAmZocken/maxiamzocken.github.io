function PStoKW() {
    var PS, KW
    PS = document.getElementById("PS").value;
    KW = PS*0.735499;
    KW = Math.round(100*KW)/100;
    document.getElementById("KW").value = KW;
}

function KWtoPS() {
    var PS, KW
    KW = document.getElementById("KW").value;
    PS = KW*1.35962;
    PS = Math.round(100*PS)/100;
    document.getElementById("PS").value = PS;
}