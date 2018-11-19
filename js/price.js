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

// Fórmulas
function valor_R(){
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ));
  return R;
}

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
  Pt1 = valor_R() * ((( 1 + i ) ** (( n - t ) + 1 )) - 1 ) / (((( 1 + i ) ** (( n - t ) + 1 ) * i )))
  document.getElementById("resultado").innerHTML = "O valor do saldo devedor ao final da prestação " + ( t - 1 ) + " é R$ " + Pt1.toFixed(2);
}
