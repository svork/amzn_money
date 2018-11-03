function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var A;
  var Rt;

  // Fórmula
  A = P / n;

  Rt = A * ( 1 + i * ( n - t + 1 ))

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor da prestação " + t + " é R$ " + Rt.toFixed(2);
}
