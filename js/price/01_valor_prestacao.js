// Esta função calcula o valor das prestações

function calcular(){
  // Entrada
  var P = document.getElementById("P").value;
  var R
  var i = document.getElementById("i").value / 100;
  var n = document.getElementById("n").value;

  // Fórmula
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ))

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor da prestação é R$ " + R.toFixed(2);
}
