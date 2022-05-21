/* OBJETIVO 1 - Ao passar o mouse em cima: colocar classe 'selecionado' no personagem 
para adiconar uma animação á ele. Em seguida retirar a classe 'selecionado' do 
personagem selecionado
*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {

    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'ultron') return; /* Bloquear o jogador 1 de selecionar o ultron*/

    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');

    personagem.classList.add('selecionado');

  /* OBJETIVO 2 - Ao passar o mouse em cima do personagem da listagem: 
-> Trocar a imagem e o nome do personagem grande
-> Alterar a imagem do jogador 1
-> Alterar o nome do jogador 1
 */

   const imagemJogador1 = document.getElementById('personagem-jogador-1');
   imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

   const nomeJogador1 = document.getElementById('nome-jogador-1');
   const nomeSelecionado = personagem.getAttribute('data-name');

   nomeJogador1.innerHTML = nomeSelecionado;

  });
});

