function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var A;
  var EJ;

  // Fórmula
  A = P / n;

  EJ = i * A * t * (( 2 * n - t + 1 ) / 2 );

  // Resultado
  document.getElementById("resultado").innerHTML = "A soma dos juros acumulados até a prestação " + t + " é R$ " + EJ.toFixed(2);
}
