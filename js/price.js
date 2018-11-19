// Cálculos para o sistema Price
// ============================================================================

// Ler dados do localStorage
var P = localStorage.getItem("P");
var i = localStorage.getItem("i") / 100;
var n = localStorage.getItem("n");

// Variáveis
var R;
var Pt;

function p01(){
  // Fórmula
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ));

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor da prestação é R$ " + R.toFixed(2);
}

function p02(){
  var t = document.getElementById("p02t").value;

  // Fórmula
  R = P * (((( 1 + i ) ** n ) * i ) / ((( 1 + i ) ** n ) - 1 ));
  Pt = R * ((( 1 + i ) ** ( n - t )) - 1 ) / (((( 1 + i ) ** ( n - t ) * i )))

  // Resultado
  document.getElementById("resultado").innerHTML = "O valor do saldo devedor ao final da prestação " + t + " é R$ " + Pt.toFixed(2);
}
