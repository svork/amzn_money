// Esta função calcula o valor da parcela de juros de ordem t

function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var R
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var Pt1
  var Jt

  // Fórmula
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ))

  Pt1 = R * ((( 1 + i ) ** (( n - t ) + 1 )) - 1 ) / (((( 1 + i ) ** (( n - t ) + 1 ) * i )))

  Jt = i * Pt1

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor da parcela de juros ao final da prestação " + t + " é R$ " + Jt.toFixed(2);
}
