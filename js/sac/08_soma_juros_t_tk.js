function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var k = document.getElementById("tk").value - t;
  var A;
  var EJ;

  // Perfumaria
  var tk = document.getElementById("tk").value;

  // Fórmula
  A = P / n;

  EJ = i * A * k * ( n - t - (( k - 1 ) / 2 ));

  // Resultado
  document.getElementById("resultado").innerHTML = "A soma dos juros acumulados entre a prestação " + t + " e " + tk + " é R$ " + EJ.toFixed(2);
}
