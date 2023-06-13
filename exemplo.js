console.log("Tá funcionando");

//adicionando link para nova pagina 


//selecionando lista de link
let listaMenu = document.querySelector('header .menu nav ul');

//criando o novo elemento
let novoItemMenu = "<li> <a href='quem-somos.html'> Quem Somos </a> </li>";

listaMenu.innerHTML += novoItemMenu;

//alterar texto
let tituloReceitasPrincipais = document.querySelector('.receitas-principais h2');

tituloReceitasPrincipais.innerText = "Receitas de Sucesso";

//alterar botao

let botoes = document.querySelectorAll('.lista-receitas article a');

for (let i = 0; i < botoes.length; i++) {
    botoes[i].style.borderRadius = "25px";
}


//alterando titulo 

let titulos = document.querySelector(h2);
console.log(titulos);

for (let i = 0; i < botoes.length; i++) {
    titulos[i].style.color = "#FFA000;";
}