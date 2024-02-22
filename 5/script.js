function changeContent() {
    var text1 = document.getElementById("input1").value;
    var text2 = document.getElementById("input2").value;
    document.getElementById("input1").value = text2;
    document.getElementById("input2").value = text1;
}