function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var n = document.getElementById("n").value;
  var A;

  // Fórmula
  A = P / n;

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor da amortização é R$ " + A.toFixed(2);
}
