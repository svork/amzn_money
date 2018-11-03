function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var A;
  var Pt1

  // Fórmula
  A = P / n;

  Pt1 = A * ( n - t + 1 );

  // Resultado
  document.getElementById("resultado").innerHTML = "O saldo devedor na parcela " + ( t - 1 ) + " é R$ " + Pt1.toFixed(2);
}
