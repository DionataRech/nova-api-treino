const rowCards = document.getElementById("row-cards");
let contador = 8;

async function pegarInformacoes() {
  try {
    const response = await api.get(`/?count=${contador}`);

    const data = response.data;

    rowCards.innerHTML = "";

    data.forEach((personagem) => {
      let cardHTML = `
        <div class="col-3 col-movie">
          <div class="card show-body m-3">
            <img src="${personagem.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title fw-bold fs-3">${personagem.character}</h5>
              <p class="card-text fw-bold fs-5">Citação:</br></p>
              ${personagem.quote}
            </div>
          </div>
        </div>
      `;
      rowCards.innerHTML += cardHTML;
    });
  } catch (error) {
    console.error("Erro ao obter dados:", error);
  }
}

pegarInformacoes();

async function searchBtn() {
  try {
    const btnSearch = document.getElementById("btn-search");
    const inputValue = btnSearch.value;

    contador = 8;
    const response = await api.get(
      `/?count=${contador}&character=${inputValue}`
    );

    const data = response.data;

    rowCards.innerHTML = "";

    data.forEach((personagem) => {
      let cardHTML = `
        <div class="col-3 col-movie">
          <div class="card show-body m-3">
            <img src="${personagem.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title fw-bold fs-3">${personagem.character}</h5>
              <p class="card-text fw-bold fs-5">Citação:</br></p>
              ${personagem.quote}
            </div>
          </div>
        </div>
      `;
      rowCards.innerHTML += cardHTML;
    });
  } catch (error) {
    console.error("Erro ao obter dados:", error);
  }
}

const paginaAnterior = () => {
  if (contador > 16) {
    contador -= 16;
    pegarInformacoes();
  }
};

const proximaPagina = () => {
  contador += 16;
  pegarInformacoes();
};
