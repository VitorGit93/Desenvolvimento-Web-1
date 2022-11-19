import "@picocss/pico";
import './estilo.css'

const formConsultarCep = document.querySelector("#consultarCep");
const inputCep = formConsultarCep.cep;
const divDados = document.querySelector("#dados");
/* const loader = `<a href="#" aria-busy="true">Consultando o CEP, aguarde...</a>`; */
const btnConsultarCep = document.querySelector("#btnConsultarCep");

formConsultarCep.addEventListener("submit", function (event) {
  event.preventDefault(); // anula o comportamento padrão de envio do form
  ativaLoader(true);
  consultarCep(inputCep.value);
});


async function consultarCep(cep) {
  let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  let dadosCep = await response.json();

  if (dadosCep.erro) {
    divDados.innerHTML = `<div class='erro'>CEP não encontrado!</div>`;
  } else {
    divDados.innerHTML = `
      <p>Endereço: ${dadosCep.logradouro}</p>
      <p>Localidade: ${dadosCep.localidade}</p>
    `;
  }
  ativaLoader(false);
}

function ativaLoader(ativo) {
  if (ativo) {
    btnConsultarCep.setAttribute("aria-busy", "true");
    btnConsultarCep.textContent = "Consultando o CEP...";
  } else {
    btnConsultarCep.removeAttribute("aria-busy");
    btnConsultarCep.textContent = "Consultar";
  }
}
