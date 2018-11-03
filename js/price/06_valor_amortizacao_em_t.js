// Esta função calcula o valor das prestações

function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var R
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var A1
  var At

  // Fórmula
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ))

  A1 = R - i * P

  At = A1 * (( 1 + i ) ** ( t - 1 ))

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor da parcela da amortização na prestação " + t + " é R$ " + At.toFixed(2);
}
