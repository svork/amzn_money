// Cálculos para o sistema SAC
// ============================================================================

// Ler dados do localStorage
var P = localStorage.getItem("P");
var i = localStorage.getItem("i") / 100;
var n = localStorage.getItem("n");

// Variáveis
var A;
var Pt;

// Fórmulas
function valor_A(){
  A = P / n;
  return A;
}

function valor_Pt(n, t){
  Pt = valor_A() * ( n - t );
  return Pt;
}

// Funções
function s01(){
  document.getElementById("resultado").innerHTML = "O valor da amortização é R$ " + valor_A().toFixed(2);
}

function s02(){
  var t = document.getElementById("s02t").value;
  document.getElementById("resultado").innerHTML = "O saldo devedor na parcela " + t + " é R$ " + valor_Pt(n, t).toFixed(2);
}
