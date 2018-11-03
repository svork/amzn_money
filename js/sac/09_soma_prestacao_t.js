function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var A;
  var ER;

  // Fórmula
  A = P / n;

  ER = A * t * ( 1 + i * (( 2 * n - t + 1 ) / 2 ));

  // Resultado
  document.getElementById("resultado").innerHTML = "A soma das prestações acumuladas até a prestação " + t + " é R$ " + ER.toFixed(2);
}
