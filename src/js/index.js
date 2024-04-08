/*
Objetivo 1 - Quando o usuário clicar no botão de nmostrar mais deve abrir os projetos que estão 
escondidos no HTML.

     Passo1 - Pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele;

     Passo 2 - Identificar o clique no botão

     Passo 3 - Adicionar a classe "ativo" nos objetos escondidos

Objetivo 2 - Esconder o botão de mostrar mais.

     passo 1 - pegar o botão e esconder ele
*/


const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo');
console.log(projetosInativos);

botaoMostrarProjetos.addEventListener('click', () => {
     //passo 3 - adicionar a classe "ativo " nos projetos escondidos
     projetosInativos.forEach(projetosInativo => {
          projetosInativo.classList.add('ativo');
     })

     //Objetivo 2 - esconder o botão de mostrar mais
     //passo 1 - pegar o botão e esconder ele
     botaoMostrarProjetos.classList.add("remover");
});

