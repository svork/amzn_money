// Esta função calcula o valor do saldo devedor de ordem t

function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var R
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var Pt

  // Fórmula
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ))

  Pt = R * ((( 1 + i ) ** ( n - t )) - 1 ) / (((( 1 + i ) ** ( n - t ) * i )))

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor do saldo devedor ao final da prestação " + t + " é R$ " + Pt.toFixed(2);
}
