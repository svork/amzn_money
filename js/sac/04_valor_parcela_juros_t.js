function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var A;
  var Pt
  var Jt

  // Fórmula
  A = P / n;

  Pt = A * ( n - t );

  Jt = i * Pt - 1;

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor de juros na parcela " + t + " é R$ " + Jt.toFixed(2);
}
