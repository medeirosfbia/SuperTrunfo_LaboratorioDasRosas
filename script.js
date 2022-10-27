var cartas = [
  {
    nome: "Zilda Arns",
    imagem: "https://i.imgur.com/dnq30OH.jpg",
    atributos: { Inovação: 88, Persistência: 88, Prêmios: 25 }
  },
  {
    nome: "Izabel dos Santos",
    imagem: "https://i.imgur.com/6UZIg9b.jpg",
    atributos: { Inovação: 99, Persistência: 91, Prêmios: 0 }
  },
  {
    nome: "Nise da Silveira",
    imagem: "https://i.imgur.com/EkOOnVY.jpg",
    atributos: { Inovação: 99, Persistência: 76, Prêmios: 1 }
  },
  {
    nome: "Luisa & Sandra(SUPER TRUNFO)",
    imagem: "https://i.imgur.com/J9loprv.jpg",
    atributos: { Inovação: 70, Persistência: 99, Prêmios: 0 }
  },
  {
    nome: "Enedina Alves",
    imagem: "https://i.imgur.com/4QpBeTx.jpg",
    atributos: { Inovação: 98, Persistência: 87, Prêmios: 0 }
  },
  {
    nome: "Marie Curie",
    imagem: "https://i.imgur.com/N5RDHJO.jpg",
    atributos: { Inovação: 99, Persistência: 98, Prêmios: 10 }
  },
  {
    nome: "Rosalind Franklin",
    imagem: "https://i.imgur.com/izK6gyw.jpg",
    atributos: { Inovação: 92, Persistência: 89, Prêmios: 1 }
  },
  {
    nome: "Katie Bouman",
    imagem: "https://i.imgur.com/CyahbJz.jpg",
    atributos: { Inovação: 95, Persistência: 76, Prêmios: 1 }
  },
  {
    nome: "Bertha Lutz",
    imagem: "https://i.imgur.com/WdVlCnL.jpg",
    atributos: { Inovação: 96, Persistência: 97, Prêmios: 0 }
  }
];

var cartaMaquina;
var cartaJogador;
var divResultado = document.getElementById("resultado");

function sortearCarta() {
  cartaMaquina = cartas[parseInt(Math.random() * cartas.length)];

  cartaJogador = cartas[parseInt(Math.random() * cartas.length)];
  while (cartaJogador == cartaMaquina) {
    cartaJogador = cartas[parseInt(Math.random() * cartas.length)];
  }
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  console.log(cartaJogador);
  console.log(cartaMaquina);
  exibirCartaJogador();

  //reset
  tirarCartaMaquina();
  divResultado.innerHTML = "<p class='resultado-final'></p>";
}

function jogar() {
  var atributoSelecionado = document.querySelector(
    'input[name="atributo"]:checked'
  ).value;
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  console.log(atributoSelecionado);
  console.log(valorCartaMaquina + " " + valorCartaJogador);

  if (cartaMaquina.nome == "Luisa & Sandra(SUPER TRUNFO)") {
    alert("Você perdeu, a carta da máquina era Luisa & Sandra(SUPER TRUNFO)");
    divResultado.innerHTML = "<p class='resultado-final'>Você perdeu</p>";
  } else if (cartaJogador.nome == "Luisa & Sandra(SUPER TRUNFO)") {
    alert("Você venceu! Sua carta era Luisa & Sandra(SUPER TRUNFO)");
    divResultado.innerHTML = "<p class='resultado-final'>Você venceu!</p>";
  } else if (valorCartaJogador > valorCartaMaquina) {
    divResultado.innerHTML = "<p class='resultado-final'>Você venceu!</p>";
  } else if (valorCartaJogador < valorCartaMaquina) {
    divResultado.innerHTML = "<p class='resultado-final'>Você perdeu</p>";
  } else {
    divResultado.innerHTML = "<p class='resultado-final'>Empatou</p>";
  }
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; // escrevendo no css
  var moldura =
    "<img src='https://i.imgur.com/7x4IgmD.png' style='width: inherit; height: inherit; position: absolute;'>";
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; // escrevendo no css
  var moldura =
    "<img src='https://i.imgur.com/7x4IgmD.png' style='width: inherit; height: inherit; position: absolute;'>";
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function tirarCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url()`; // escrevendo no css
  var moldura =
    "<img src='https://i.imgur.com/7x4IgmD.png' style='width: inherit; height: inherit; position: absolute;'>";
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  var nome = `<p class="carta-subtitle"></p>`;

  divCartaMaquina.innerHTML = moldura + "</div>";
}