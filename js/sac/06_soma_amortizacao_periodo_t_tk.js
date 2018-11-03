function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var k = document.getElementById("tk").value - t;
  var EA;

  // Perfumaria
  var tk = document.getElementById("tk").value;

  // Fórmula
  A = P / n;

  EA = k * A;

  // Resultado
  document.getElementById("resultado").innerHTML = "A soma das amortizações entre a prestação " + t + " e " + tk + " é R$ " + EA.toFixed(2);
}
