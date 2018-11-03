// Esta função calcula o valor das prestações

function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var R
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var A1

  // Fórmula
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ))

  A1 = R - i * P

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor da primeira amortização é R$ " + A1.toFixed(2);
}
