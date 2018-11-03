// Esta função calcula o valor da parcela de juros de ordem t

function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var R
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var k = document.getElementById("tk").value - t;
  var Aactk
  
  // Perfumaria
  var tk = document.getElementById("tk").value;

  // Fórmula
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ));

  Aactk = R * (((( 1 + i ) ** ( n - t )) - 1 ) / ((( 1 + i ) ** ( n - t )) * i ) - ((( 1 + i ) ** ( n - t - k )) - 1 ) / ((( 1 + i ) ** ( n - t - k )) * i ));

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor das amortizações acumuladas entre a parcela " + t + " e " + tk + " é R$ " + Aactk.toFixed(2);
}
