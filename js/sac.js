// Cálculos para o sistema SAC
// ============================================================================

// Ler dados do localStorage
var P = localStorage.getItem("P");
var i = localStorage.getItem("i") / 100;
var n = localStorage.getItem("n");

// Variáveis
var A;

// Fórmulas
function valor_A(){
  A = P / n;
  return A;
}

// Funções
function s01(){
  document.getElementById("resultado").innerHTML = "O valor da amortização é R$ " + valor_A().toFixed(2);
}
