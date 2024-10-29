function tinhToan() {
    var a = document.getElementById("setNumberA").value;
    var b = document.getElementById("setNumberB").value;
    var giaTri = parseInt(a) + parseInt(b);
    document.getElementById("value").value = giaTri;
}