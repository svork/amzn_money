// Esta função calcula o valor da parcela de juros de ordem t

function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var R
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var Jac

  // Fórmula
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ));

  Jac = R * ( t - (((( 1 + i ) ** n ) - 1 ) / ((( 1 + i ) ** n ) * i ) - ((( 1 + i ) ** ( n - t )) - 1 ) / ((( 1 + i ) ** (n - t )) * i )));

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor dos juros acumulados até a parcela " + t + " é R$ " + Jac.toFixed(2);
}
