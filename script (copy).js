function mudarTexto() {
  document.getElementById("demo").innerHTML = "O texto mudou com JavaScript!";
}


// Tipos de variáveis:
let nome = "Daniel"; // string
let idade = 17; // número
let altura = 1.75; // número
let estudante = true; // booleano

//arreys e objetos
let frutas = ["maçã", "banana", "laranja"]; //arrey
let pessoa = {
  nome: "Daniel",
  idade: 17,
  altura: 1.75,
  estudante: true
} //objeto

//funções
function somar(a, b) {
  let resultado = a + b;
  return resultado;
}

//arrow function
let somar2 = (a, b) => {
  let resultado = a + b;
  return resultado;
}

// chamando a função somar e somar2
let x = somar(5, 3);
let y = somar2(5, 3);

console.log(x);
console.log(y);

//condicionais
if (idade >= 18) {
  console.log("Você é maior de idade");//condição verdadeira
} else {
  console.log("Você é menor de idade")//condição falsa
}

//loops (repetição)
let lista = [1, 2, 3, 4, 5];

for (let item of lista) {
  console.log(item);
}

//eventos
// Função que sera chamada quando o botão for clicado
function avisar1() {
  alert("Você clicou no botão!");
}

// Função que sera chamada quando o botão for clicado
function avisar2() {
  alert("Opa, você clicou no botao!");
}

// Seleciona o botão pelo ID do HTML
let botao = document.querySelector("#botao");

// Adiciona um ouvinte de evento ao botão
botao.addEventListener("click", () => {
  avisar2();
})

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("Keyup", () => {
  console.log(usdInput.value)
})

brlInput.addEventListener("Keyup", () => {
  console.log(brlInput.value)
})
