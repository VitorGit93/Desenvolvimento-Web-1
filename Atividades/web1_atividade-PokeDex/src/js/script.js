import "../css/style.css";

// Aqui usei o recurso de atributo customizado
const pokeCard = document.querySelector("[dado-poke-card]");
const pokeNome = document.querySelector("[dado-poke-nome]");
const pokeImg = document.querySelector("[dado-poke-img]");
const pokeImgContainer = document.querySelector("[dado-poke-img-container]");
const pokeId = document.querySelector("[dado-poke-id]");
const pokeTipos = document.querySelector("[dado-poke-tipos]");
const pokeStats = document.querySelector("[dado-poke-stats]");

// Vetor que contém as cores dos tipos de pokemom
const tipoCores = {
  electric: "#FFEA70",
  normal: "#B09398",
  fire: "#FF675C",
  water: "#0596C7",
  ice: "#AFEAFD",
  rock: "#999799",
  flying: "#7AE7C7",
  grass: "#4A9681",
  psychic: "#FFC6D9",
  ghost: "#561D25",
  bug: "#A2FAA3",
  poison: "#795663",
  ground: "#D2B074",
  dragon: "#DA627D",
  steel: "#1D8A99",
  fighting: "#2F2F2F",
  default: "#2A1A1F",
};

// Função que capta a API do Pokemon
const getPokemon = (e) => {
  // prevenir a ação padrão de submit
  e.preDefault();
  const { valor } = e.target.pokemon;
  //console.log(valor)
  // garantindo que o que for digitado esteja em minúsculo
  fetch(`https://pokeapi.co/api/v2/pokemon/${valor.toLowerCase()}`).then(
    (dado) => dado.json()
  );
};

// Função para renderizar os tipos de Pokemon
const renderPokemonTypes = (types) => {
  pokeTypes.innerHTML = "";
  types.forEach((type) => {
    const typeTextElement = document.createElement("div");
    typeTextElement.style.color = typeColors[type.type.name];
    typeTextElement.textContent = type.type.name;
    pokeTypes.appendChild(typeTextElement);
  });
};

// Função para renderizar os stats do Pokemon
const renderPokemonStats = (stats) => {
  pokeStats.innerHTML = "";
  stats.forEach((stat) => {
    const statElement = document.createElement("div");
    const statElementName = document.createElement("div");
    const statElementAmount = document.createElement("div");
    statElementName.textContent = stat.stat.name;
    statElementAmount.textContent = stat.base_stat;
    statElement.appendChild(statElementName);
    statElement.appendChild(statElementAmount);
    pokeStats.appendChild(statElement);
  });
};
