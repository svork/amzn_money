// Cálculos para o sistema Price
// ============================================================================

// Ler dados do localStorage
var P = localStorage.getItem("P");
var i = localStorage.getItem("i") / 100;
var n = localStorage.getItem("n");

// Variáveis
var R;
var Pt;
var Pt1;
var Jt;
var A1;

// Fórmulas
function valor_R(){
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ));
  return R;
}

function valor_Pt1(t){
  Pt1 = valor_R() * ((( 1 + i ) ** (( n - t ) + 1 )) - 1 ) / (((( 1 + i ) ** (( n - t ) + 1 ) * i )));
  return Pt1;
}

// Funções
function p01(){
  document.getElementById("resultado").innerHTML = "O valor da prestação é R$ " + valor_R().toFixed(2);
}

function p02(){
  var t = document.getElementById("p02t").value;
  Pt = valor_R() * ((( 1 + i ) ** ( n - t )) - 1 ) / (((( 1 + i ) ** ( n - t ) * i )))
  document.getElementById("resultado").innerHTML = "O valor do saldo devedor ao final da prestação " + t + " é R$ " + Pt.toFixed(2);
}

function p03(){
  var t = document.getElementById("p03t").value;
  document.getElementById("resultado").innerHTML = "O valor do saldo devedor ao final da prestação " + ( t - 1 ) + " é R$ " + valor_Pt1(t).toFixed(2);
}

function p04(){
  var t = document.getElementById("p04t").value;
  Jt = i * valor_Pt1(t);
  document.getElementById("resultado").innerHTML = "O valor da parcela de juros ao final da prestação " + t + " é R$ " + Jt.toFixed(2);
}

function p05(){
  A1 = valor_R() - i * P;
  document.getElementById("resultado").innerHTML = "O valor da primeira amortização é R$ " + A1.toFixed(2);
}
