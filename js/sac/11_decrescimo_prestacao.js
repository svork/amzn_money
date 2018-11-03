function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var R;

  // Fórmula
  A = P / n;

  R = i * A;

  // Resultado
  document.getElementById("resultado").innerHTML = "O decréscimo nas prestações é R$ " + R.toFixed(2);
}
