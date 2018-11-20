// Cálculos para o sistema SAC
// ============================================================================

// Ler dados do localStorage
var P = localStorage.getItem("P");
var i = localStorage.getItem("i") / 100;
var n = localStorage.getItem("n");

// Variáveis
var A;
var Pt;
var Pt1;
var Jt;
var Rt;

// Fórmulas
function valor_A(){
  A = P / n;
  return A;
}

function valor_Pt(n, t){
  Pt = valor_A() * ( n - t );
  return Pt;
}

function valor_Pt1(n, t){
  Pt1 = valor_A() * ( n - t + 1 );
  return Pt1;
}

// Funções
function s01(){
  document.getElementById("resultado").innerHTML = "O valor da amortização é R$ " + valor_A().toFixed(2);
}

function s02(){
  var t = document.getElementById("s02t").value;
  document.getElementById("resultado").innerHTML = "O saldo devedor na parcela " + t + " é R$ " + valor_Pt(n, t).toFixed(2);
}

function s03(){
  var t = document.getElementById("s03t").value;
  document.getElementById("resultado").innerHTML = "O saldo devedor na parcela " + ( t - 1 ) + " é R$ " + valor_Pt1(n, t).toFixed(2);
}

function s04(){
  var t = document.getElementById("s04t").value;
  Jt = i * valor_Pt1(n, t);
  document.getElementById("resultado").innerHTML = "O valor de juros na parcela " + t + " é R$ " + Jt.toFixed(2);
}

function s05(){
  var t = document.getElementById("s05t").value;
  Rt = valor_A() * ( 1 + i * ( n - t + 1 ));
  document.getElementById("resultado").innerHTML = "O valor da prestação " + t + " é R$ " + Rt.toFixed(2);
}
