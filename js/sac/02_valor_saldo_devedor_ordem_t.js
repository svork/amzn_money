function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var A;
  var Pt

  // Fórmula
  A = P / n;

  Pt = A * ( n - t );

  // Resultado
  document.getElementById("resultado").innerHTML = "O saldo devedor na parcela " + t + " é R$ " + Pt.toFixed(2);
}
