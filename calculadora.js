  //SOMAR
  function somar() {
    var n1 = document.getElementById("txtn1").value;
    var n2 = document.getElementById("txtn2").value;
    var resultado = parseInt(n1) + parseInt(n2);
    document.getElementById("txtresultado").value = resultado;
}
// SUBTRAIR
function subtrair() {
    var n1 = document.getElementById("txtn1").value;
    var n2 = document.getElementById("txtn2").value;
    var resultado = parseInt(n1) - parseInt(n2);
    document.getElementById("txtresultado").value = resultado;
}
// MULTIPLICAR
function multiplicar() {
    var n1 = document.getElementById("txtn1").value;
    var n2 = document.getElementById("txtn2").value;
    var resultado = parseInt(n1) * parseInt(n2);
    document.getElementById("txtresultado").value = resultado;
}
// DIVIDIR
function dividir() {
    var n1 = document.getElementById("txtn1").value;
    var n2 = document.getElementById("txtn2").value;
    var resultado = parseInt(n1) / parseInt(n2);
    document.getElementById("txtresultado").value = resultado;
}