// Armazenar os valores do financiamento do usuário usando localStorage
// ============================================================================

function mostrar_valores(){
  // Mostrar valores
  document.getElementById("P_label").innerHTML = "Valor do Financiamento R$ " +  localStorage.getItem("P"); 
  document.getElementById("i_label").innerHTML = "Taxa % " + localStorage.getItem("i"); 
  document.getElementById("n_label").innerHTML = "Número de prestações " + localStorage.getItem("n"); 
}

function armazenar_valores(){
  // Guardar dados em variáveis
  P = document.getElementById("P").value;
  i = document.getElementById("i").value;
  n = document.getElementById("n").value;

  // Armazenar valores em localStorage
  localStorage.setItem("P", P);
  localStorage.setItem("i", i);
  localStorage.setItem("n", n);
}

// Abrir página do sistema Price
function price(){
  armazenar_valores();
  window.open("html/price.html", "_blank");
}

// Abrir página do sistema SAC
function sac(){
  armazenar_valores();
  window.open("html/sac.html", "_blank");
}
