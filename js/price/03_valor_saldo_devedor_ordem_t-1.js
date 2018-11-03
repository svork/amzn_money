// Esta função calcula o valor do saldo devedor de ordem t -1

function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var R
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var Pt1

  // Fórmula
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ))

  Pt1 = R * ((( 1 + i ) ** (( n - t ) + 1 )) - 1 ) / (((( 1 + i ) ** (( n - t ) + 1 ) * i )))

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor do saldo devedor ao final da prestação " + ( t - 1 ) + " é R$ " + Pt1.toFixed(2);
}
