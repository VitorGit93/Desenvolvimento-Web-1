import "./nav.js";
import "phosphor-icons";
import "../css/lista-tarefa.css";

const inputNovaTarefa = document.querySelector("#input-nova-tarefa");
const btnAdicionar = document.querySelector("#btn-adicionar");
const listaTarefas = document.querySelector("#lista-tarefas");
//const btnExcluir = document.querySelector('.btn-excluir');

btnAdicionar.addEventListener("click", function () {
  let descricaoTarefa = inputNovaTarefa.value;
  const li = document.createElement("li");
  li.className = "tarefa";
  li.innerHTML = `
        <div>${descricaoTarefa}$</div>
        <button class="btn-excluir"><i class="ph-trash"></i></button>
    `;
  listaTarefas.appendChild(li);

  li.addEventListener("click", function (event) {
    //console.log(event.target)
    if ( event.target.className === "btn-excluir" || event.target.className === "ph-trash") { listaTarefas.removeChild(li); }
  });
});
