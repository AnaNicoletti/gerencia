let modelo = {
    titulo: "Minha lista",
    itens:[
        "Sirius",
        "Canopus",
        "Alpha Centauri / Rigel Kent",
        "Arcturus",
        "Vega",
        "Capella",
        "Rigel",
        "Procyon",
        "Achernar",
        "Betelgeuse"
    ]
}

function adicionarItem() {
  var itemEntrada = document.getElementById("item");
  var valorEntrada = itemEntrada.value.trim();
  itemEntrada.value = "";

  var tamanho=valorEntrada.length;

if (tamanho >= 3 && tamanho <= 50) {
  modelo.itens.push(valorEntrada);
  renderizar();

  var mensagem = document.getElementById("mensagem");
  mensagem.innerText = "Item " + valorEntrada + " inserido com sucesso!";
  } else {
  alert("O item deve ter entre 3 e 50 caracteres");
  }
}

function removerItem(i){
    modelo.itens.splice(i, 1);
    renderizar();
}

function renderizar(){
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let i = 0; i < modelo.itens.length; i ++){
    let item = modelo.itens[i];

    // composto por botao + texto
    let novoItem = document.createElement("li");

    // criar botao remover
    let botao = document.createElement("span");
    botao.textContent = "🌵";
    botao.className = "btnRemover";
    botao.onclick = function(){
        removerItem(i);
    }

    let texto = document.createElement("span");
    texto.textContent = item;

    novoItem.appendChild(botao);
    novoItem.appendChild(texto);

    lista.appendChild(novoItem);
  }

  let textoTitulo = document.getElementById("textoTitulo");
  textoTitulo.textContent = modelo.titulo;
}