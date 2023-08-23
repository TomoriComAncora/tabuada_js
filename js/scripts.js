// seleção de elementos
const multiplicacaoForm = document.querySelector("#multiplicacao-form");
const numeroInput = document.querySelector("#number");
const multiplicadorInput = document.querySelector("#multiplicador");

const multiplicacaoTable = document.querySelector("#multiplicacao-operacao");
const multiplicacaoTitulo = document.querySelector("#multiplicacao-title span");

// fuções
const tabelaMultiplicacao = (numero, numeroMultiplicado) => {
  multiplicacaoTable.innerHTML = "";

  for (let i = 1; i <= numeroMultiplicado; i++) {
    let result = numero * i;
    console.log(result);

    const template = `<div class="row">
        <div class="operacao">${numero} x ${i} =</div>
        <div class="resultado">${result}</div>
      </div>`;

    const parser = new DOMParser()

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");
    multiplicacaoTable.appendChild(row);
    multiplicacaoTitulo.innerText = numero;
  }
};

// eventos
multiplicacaoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numeroMultiplicado = +numeroInput.value;
  const numeroMultiplicacao = +multiplicadorInput.value;

  if (!numeroMultiplicacao || !numeroMultiplicado) return;

  tabelaMultiplicacao(numeroMultiplicado, numeroMultiplicacao);
});
