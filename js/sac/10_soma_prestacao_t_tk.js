function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;
  var t = document.getElementById("t").value;
  var k = document.getElementById("tk").value - t;
  var A;
  var ER;

  // Perfumaria
  var tk = document.getElementById("tk").value;

  // Fórmula
  A = P / n;

  ER = A * k * ( 1 + i * ( n - t - (( k - 1 ) / 2 )));

  // Resultado
  document.getElementById("resultado").innerHTML = "A soma das prestações acumulados entre a prestação " + t + " e " + tk + " é R$ " + ER.toFixed(2);
}
