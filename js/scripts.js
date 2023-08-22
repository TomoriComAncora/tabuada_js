// seleção de elementos
const multiplicacaoForm = document.querySelector("#multiplicacao-form");
const numeroInput = document.querySelector("#number");
const multiplicadorInput = document.querySelector("#multiplicador");

// fuções

// eventos
multiplicacaoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numeroMultiplicado = +numeroInput.value;
  const numeroMultiplicacao = +multiplicadorInput.value;

  if(!numeroMultiplicacao || !numeroMultiplicado) return;
  
  console.log(numeroMultiplicado, numeroMultiplicacao);
});
