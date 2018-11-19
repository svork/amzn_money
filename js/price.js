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
var At;
var Aac;
var Aactk;
var Jac;

// Fórmulas
function valor_R(){
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ));
  return R;
}

function valor_Pt1(t){
  Pt1 = valor_R() * ((( 1 + i ) ** (( n - t ) + 1 )) - 1 ) / (((( 1 + i ) ** (( n - t ) + 1 ) * i )));
  return Pt1;
}

function valor_A1(){
  A1 = valor_R() - i * P;
  return A1;
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
  document.getElementById("resultado").innerHTML = "O valor da primeira amortização é R$ " + valor_A1().toFixed(2);
}

function p06(){
  var t = document.getElementById("p06t").value;
  At = A1 * (( 1 + i ) ** ( t - 1 ));
  document.getElementById("resultado").innerHTML = "O valor da parcela de amortização ao final da prestação " + t + " é R$ " + At.toFixed(2);
}

function p07(){
  var t = document.getElementById("p07t").value;
  Aac = valor_R() * (((( 1 + i ) ** n ) - 1 ) / ((( 1 + i ) ** n ) * i ) - ((( 1 + i ) ** ( n - t )) - 1 ) / ((( 1 + i ) ** (n - t )) * i ));
  document.getElementById("resultado").innerHTML = "O valor das amortizações acumuladas até a parcela " + t + " é R$ " + Aac.toFixed(2);
}

function p08(){
  var t = document.getElementById("p08t").value;
  var k = document.getElementById("p08tk").value - t;
  // Perfumaria
  var tk = document.getElementById("p08tk").value;
  Aactk = valor_R() * (((( 1 + i ) ** ( n - t )) - 1 ) / ((( 1 + i ) ** ( n - t )) * i ) - ((( 1 + i ) ** ( n - t - k )) - 1 ) / ((( 1 + i ) ** ( n - t - k )) * i ));
  document.getElementById("resultado").innerHTML = "O valor das amortizações acumuladas entre a parcela " + t + " e " + tk + " é R$ " + Aactk.toFixed(2);
}

function p09(){
  var t = document.getElementById("p09t").value;
  Jac = valor_R() * ( t - (((( 1 + i ) ** n ) - 1 ) / ((( 1 + i ) ** n ) * i ) - ((( 1 + i ) ** ( n - t )) - 1 ) / ((( 1 + i ) ** (n - t )) * i )));
document.getElementById("resultado").innerHTML = "O valor dos juros acumulados até a parcela " + t + " é R$ " + Jac.toFixed(2);
}
